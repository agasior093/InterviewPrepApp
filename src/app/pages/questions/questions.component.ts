import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Question } from './../../model/question';
import { Messages } from 'src/app/model/messages';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  selectedCategory: string;
  tagsToFilterByQuestions: Set<string>;
  messages: Messages = { content: [] };


  constructor() { }

  ngOnInit() { }

  setTagFilteringMessages(messages: Messages) {
    this.messages = messages;
  }

  clearErrors() {
    this.messages = { content: [] };
  }

  onTagsFilterChange($event: Set<string>) {
    this.tagsToFilterByQuestions = _.clone($event);
  }

  onCategoryChange($event: string) {
    this.selectedCategory = $event;
  }
}
