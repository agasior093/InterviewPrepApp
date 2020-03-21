import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Question } from './../../model/question';

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
    this.tagsToFilterByQuestions = _.clone($event);
  }

  onCategoryChange($event: string) {
    this.selectedCategory = $event;
  }
}
