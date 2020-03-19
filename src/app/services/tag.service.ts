import { EnvironmentConfig } from './../../environmentConfig';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from './httpOptions';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private readonly GET_TAG_URL = 'tag';

  constructor(private http: HttpClient) { }

  public getAllTags() {
    return this.http.get<any>(EnvironmentConfig.basePath + this.GET_TAG_URL, httpOptions());
  }
}
