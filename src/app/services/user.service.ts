import { UserInfo } from './../model/userInfo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>('https://interview-prep-app.herokuapp.com/user', this.httpOptions);
  }
}
