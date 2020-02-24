import { Injectable } from '@angular/core';

import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  public getQuestions(): Question[] {
    const questions: Question[] = [];

    for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) {
      questions.push({
        title: 'Pytanie ' + i,
        category: 'Category ' + i % 3,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
      });
    }

    return this.getRealQuestions();
  }

  public getRealQuestions(): Question[] {
    return [
      {
        title: 'Multiple inheritance',
        content: 'Does Java support multiple inheritance?',
        category: 'Inheritance',
        answer: 'No, you cant extend multiple base classes, although you can implement multiple interfaces'
      },
      {
        title: 'Diamond problem',
        content: 'Describe what causes diamond problem',
        category: 'Inheritance',
        answer: 'Multiple inheritance is shitty'
      },
      {
        title: 'Method overriding',
        content: 'Can you @Override private method?',
        category: 'Inheritance',
        answer: 'No, because private method is visible only within class that declared it. To make it possible to @Override, it has to be at least protected'
      },
      {
        title: 'Factory',
        content: '',
        category: 'Design patterns',
        answer: ''
      },
      {
        title: 'Abstract Factory',
        content: '',
        category: 'Design patterns',
        answer: ''
      },
      {
        title: 'Strategy',
        content: '',
        category: 'Design patterns',
        answer: ''
      },
      {
        title: 'Chain of responsibility',
        content: '',
        category: 'Design patterns',
        answer: ''
      },
      {
        title: 'Reference vs value',
        content: '',
        category: 'Memory model',
        answer: ''
      }
    ];
  }
}

