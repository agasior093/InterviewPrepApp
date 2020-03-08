import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.css']
})
export class QuestionViewComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionsService) { }

  ngOnInit() {
    this.questionService.getAllQuestions().subscribe(payload => this.questions = payload);
  }

  toggleAnswer(question: Question, param: boolean) {
    question.revealAnswer = param;
  }
}
