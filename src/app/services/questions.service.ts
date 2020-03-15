import { CreateQuestionRequest } from './../model/createQuestionRequest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
