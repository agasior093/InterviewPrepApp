import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { parseErrors } from 'src/app/commons/response-utils';
import { Messages } from 'src/app/model/messages';
import { Question } from 'src/app/model/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit, OnChanges {
  questions: Question[] = [];
  loading = false;

  @Input() tagsToFilterBy: Set<string>;

  @Output() messages = new EventEmitter<Messages>();

  constructor(private questionService: QuestionsService) {}

  ngOnInit() {
    this.loading = true;
    this.questionService
      .getAllQuestions()
      .subscribe(payload => {
        this.questions = payload;
        this.loading = false;
      }, err => {
        this.messages.emit({ type: 'danger', content: [err.message] });
        this.loading = false;
      });
  }

  ngOnChanges(): void {
    if (this.tagsToFilterBy) { this.filterByTags(); }
  }

  toggleAnswer(question: Question, param: boolean) {
    question.revealAnswer = param;
  }

  filterByTags() {
    this.loading = true;
    this.questionService
      .getQuestionsFilteredByTags(this.tagsToFilterBy)
      .subscribe(payload => {
        this.questions = payload;
        this.loading = false;
      },  err => {
        this.messages.emit({ type: 'danger', content: [err.message] });
        this.loading = false;
      });
  }
}
