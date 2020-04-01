import { Question } from './../../model/question';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  @Input() questions: Question[] = [];
  @Output() categoryChange = new EventEmitter<string>();
  @Output() questionsFilterChange = new EventEmitter<Question[]>();

  constructor() { }

  ngOnInit() {
    this.filterQuestions({nextState: true, panelId: 'Category 1'}); //JUST FOR TESTING
  }

  distinctCategories(): Set<string> {
    const categories = new Set<string>();
    for (const question of this.questions) {
      categories.add(question.category);
    }
    return categories;
  }

  titlesByCategory(category: string): string[] {
    return this.questions.filter(question => question.category === category).map(question => question.title);
  }

  filterQuestions($event: { nextState: any; panelId: any; }) {
    console.log($event);
    if ($event.nextState) {
      const category = $event.panelId;
      this.categoryChange.emit(category);
      this.questionsFilterChange.emit(this.questions.filter(question => question.category === category));
      window.scroll(0, 0);
    }
  }

}
