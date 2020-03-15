import { Question } from './../../model/question';
import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/model/tag';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  selectedCategory: string;
  tagsToFilterByQuestions: Set<string>;

  constructor() { }

  ngOnInit() { }

  onTagsFilterChange($event: Set<string>) {
    this.tagsToFilterByQuestions = $event;
  }

  onCategoryChange($event: string) {
    this.selectedCategory = $event;
  }
}
