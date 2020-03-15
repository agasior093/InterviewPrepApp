import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
    this.filterByTags();
  }

  toggleAnswer(question: Question, param: boolean) {
    question.revealAnswer = param;
  }

  filterByTags() {
    this.questions = this.questions.filter(question => {
      const array: string[] = question.tags.map(tag => tag.value);
      return _.intersection(array, Array.from(this.tagsToFilterBy)).length > 0;
    });
  }
}
