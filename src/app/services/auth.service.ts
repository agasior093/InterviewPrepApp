import { SignUpResponse } from './../model/signUpResponse';
import { SignUpRequest } from './../model/signUpRequest';
import { SignInRequest } from './../model/signInRequest';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public signIn(signInRequest: SignInRequest) {
    return this.http.post('http://localhost:8080/auth/signIn', signInRequest, this.httpOptions);
  }

  public signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>('http://localhost:8080/auth/signUp', signUpRequest, this.httpOptions);
  }

  public signOut() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
  }

  public isAuthenticated(): boolean {
    // TODO - use jwt parser to get exp_date and validate token
    const token = localStorage.getItem('auth_token');
    return token && token.length > 0;
  }

  public getLoggedUsername(): string {
    // TODO - we need API for that or we can parse jwt
    // if (this.isAuthenticated()) {
    //   return localStorage.getItem('username');
    // }
    return 'admin@gmail.com';
  }

  public setAuthentication(payload: any) {
    localStorage.setItem('auth_token', payload.accessToken);
  }


}
