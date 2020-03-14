import { CreateQuestionRequest } from './../model/createQuestionRequest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public saveQuestion(createQuestionRequest: CreateQuestionRequest) {
    return this.http.post('http://localhost:8080/question', createQuestionRequest, this.httpOptions);
  }

  public getAllQuestions() {
    return this.http.get<any>('http://localhost:8080/question', this.httpOptions);
  }

  public getQuestions(): Question[] {
    const questions: Question[] = [];

    for (const i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]) {
      questions.push({
        title: 'Pytanie ' + i,
        category: 'Category ' + i % 3,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
      },
      {
        title: '#1',
        content: 'Will this run?',
        category: 'Coding questions',
        code: this.block1,
        answer: 'No, method is static and it cannot use this'
      },
      {
        title: '#2',
        content: 'What will be the outcome of this?',
        category: 'Coding questions',
        code: this.block2,
        answer: 'true and 1'
      }
    ];
  }

  block1 = `  // Will this run?
  @SpringBootApplication
  public static void main(String... args) {
    SpringApplication.run(this, args);
  }
  `

  block2 = `  public void function() {
    int i = 0;
    System.out.println(true || (i++ == 0));
    System.out.println(i);
  }`;
}

