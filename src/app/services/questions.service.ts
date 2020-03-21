import { EnvironmentConfig } from './../../environmentConfig';
import { CreateQuestionRequest } from './../model/createQuestionRequest';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from './httpOptions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly QUESTION_URL = 'question';

  constructor(private http: HttpClient) { }

  public saveQuestion(createQuestionRequest: CreateQuestionRequest) {
    return this.http.post(EnvironmentConfig.basePath + this.QUESTION_URL, createQuestionRequest, httpOptions());
  }

  public getAllQuestions() {
    return this.http.get<any>(EnvironmentConfig.basePath + this.QUESTION_URL, httpOptions());
  }
}
