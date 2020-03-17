import { UserInfo } from './../model/userInfo';
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
    localStorage.removeItem('user_image');
  }

  // TODO - return valid object from observable and remove this
  public setAuthentication(payload: any) {
    localStorage.setItem('auth_token', payload.accessToken);
  }

  public setAuthenticationToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  public setUserInfo(userInfo: UserInfo) {
    localStorage.setItem('username', userInfo.username);
    localStorage.setItem('user_image', userInfo.imageUrl);
  }

  public isAuthenticated(): boolean {
    // TODO - use jwt parser to get exp_date and validate token
    const token = localStorage.getItem('auth_token');
    return token && token.length > 0;
  }

  public getAuthToken() {
    return localStorage.getItem('auth_token');
  }

  public getLoggedUserInfo(): UserInfo {
    if (this.isAuthenticated()) {
      return {
        username:  localStorage.getItem('username'),
        imageUrl:  localStorage.getItem('user_image')
      } as UserInfo;
    }
  }

  public loginWithFacebook() {
    window.location.href = 'https://interview-prep-app.herokuapp.com/oauth2/authorize/facebook';
  }

}
