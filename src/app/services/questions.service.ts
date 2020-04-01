import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EnvironmentConfig } from './../../environmentConfig';
import { CreateQuestionRequest } from './../model/createQuestionRequest';
import { httpOptions } from './httpOptions';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private readonly QUESTION_URL = 'question';
  private readonly FILTER_QUESTION_BY_TAGS_URL = '/getQuestionsByTags';

  constructor(private http: HttpClient) { }

  public saveQuestion(createQuestionRequest: CreateQuestionRequest) {
    return this.http.post(EnvironmentConfig.basePath + this.QUESTION_URL, createQuestionRequest, httpOptions());
  }

  public getAllQuestions() {
    return this.http.get<any>(EnvironmentConfig.basePath + this.QUESTION_URL, httpOptions());
  }

  public getQuestionsFilteredByTags(tags: Set<string>) {
    if (!tags || tags.size === 0) { return this.getAllQuestions(); }
    return this.http.post<Question>(EnvironmentConfig.basePath + this.QUESTION_URL +
      this.FILTER_QUESTION_BY_TAGS_URL, JSON.stringify({ tagsToFilterBy: Array.from(tags) }), httpOptions());
  }
}
