import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/model/tag';

@Component({
  selector: 'app-tag-submenu',
  templateUrl: './tag-submenu.component.html',
  styleUrls: ['./tag-submenu.component.css']
})
export class TagSubmenuComponent implements OnInit {
  tags: Tag[] = [];
  tagsToFilterBy: Set<string>;

  @Output() tagsToFilterByChanged = new EventEmitter<Set<string>>();

  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.tagService.getAllTags().subscribe(payload => (this.tags = payload));
  }

  filterQuestions(tag: Tag) {
    if (!this.tagsToFilterBy)  {
      this.tagsToFilterBy = new Set<string>();
      this.tagsToFilterBy.add(tag.value);
    } else {
      this.tagsToFilterBy.has(tag.value)
      ? this.tagsToFilterBy.delete(tag.value)
      : this.tagsToFilterBy.add(tag.value);
    }

    this.tagsToFilterByChanged.emit(this.tagsToFilterBy);
  }

  deleteTagsSelection() {
    this.tagsToFilterBy = new Set<string>();
    this.tags.forEach(tag => tag.toggled = false);
    // Emitting empty list of tags to filter, hits for all questions
    this.tagsToFilterByChanged.emit(this.tagsToFilterBy);
  }
}
