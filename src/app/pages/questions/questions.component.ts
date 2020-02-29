import { Question } from './../../model/question';
import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[];
  selectedCategory: string;
  filteredQuestions: Question[] = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
  }

  onQuestionsFilterChange($event) {
    this.filteredQuestions = $event;
  }

  onCategoryChange($event) {
    this.selectedCategory = $event;
  }
}
