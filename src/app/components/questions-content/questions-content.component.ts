import { Question } from './../../model/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-content',
  templateUrl: './questions-content.component.html',
  styleUrls: ['./questions-content.component.css']
})
export class QuestionsContentComponent implements OnInit {

  readonly languages = ['java'];

  @Input() questions: Question[] = [];
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

  toggleAnswer(question: Question, param: boolean) {
    question.revealAnswer = param;
  }




}
