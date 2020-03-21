import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { Tag } from 'src/app/model/tag';
import * as _ from 'lodash';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit, OnChanges {
  questions: Question[] = [];

  @Input() tagsToFilterBy: Set<string>;

  constructor(private questionService: QuestionsService) {}

  ngOnInit() {
    this.questionService
      .getAllQuestions()
      .subscribe(payload => (this.questions = payload));
  }

  ngOnChanges(): void {
    if (this.tagsToFilterBy) { this.filterByTags(); }
  }

  toggleAnswer(question: Question, param: boolean) {
    question.revealAnswer = param;
  }

  filterByTags() {
    this.questionService
      .getQuestionsFilteredByTags(this.tagsToFilterBy)
      .subscribe(payload => (this.questions = payload));
  }
}
