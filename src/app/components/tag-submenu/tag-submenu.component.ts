import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/model/tag';

@Component({
  selector: 'app-tag-submenu',
  templateUrl: './tag-submenu.component.html',
  styleUrls: ['./tag-submenu.component.css']
})
export class TagSubmenuComponent implements OnInit {

  tags: Tag[] = [];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getAllTags().subscribe(payload => this.tags = payload);
  }

}
