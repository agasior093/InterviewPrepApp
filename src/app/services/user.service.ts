import { EnvironmentConfig } from './../../environmentConfig';
import { UserInfo } from './../model/userInfo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from './httpOptions';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly GET_USER_URL = 'user';

  constructor(private http: HttpClient) { }

  public getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(EnvironmentConfig.basePath + this.GET_USER_URL, httpOptions());
  }
}
