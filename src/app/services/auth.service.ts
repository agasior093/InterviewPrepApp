import { EnvironmentConfig } from './../../environmentConfig';
import { UserInfo } from './../model/userInfo';
import { SignUpResponse } from './../model/signUpResponse';
import { SignUpRequest } from './../model/signUpRequest';
import { SignInRequest } from './../model/signInRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from './httpOptions';
import { SignInResponse } from '../model/signInResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly SIGN_IN_URL = 'auth/signIn';
  private readonly SIGN_UP_URL = 'auth/signUp';
  private readonly FACEBOOK_AUTH_URL = 'oauth2/authorize/facebook';
  private readonly GITHUB_AUTH_URL = 'oauth2/authorize/github';
  private readonly AUTH_TOKEN_KEY = 'auth_token';
  private readonly USERNAME_KEY = 'username';
  private readonly USER_IMAGE_KEY = 'user_image';

  constructor(private http: HttpClient) { }

  public signIn(signInRequest: SignInRequest) {
    return this.http.post<SignInResponse>(EnvironmentConfig.basePath + this.SIGN_IN_URL, signInRequest, httpOptions());
  }

  public signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(EnvironmentConfig.basePath + this.SIGN_UP_URL, signUpRequest, httpOptions());
  }

  public signOut() {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
    localStorage.removeItem(this.USER_IMAGE_KEY);
  }

  public setAuthentication(accessToken: string) {
    localStorage.setItem(this.AUTH_TOKEN_KEY, accessToken);
  }

  public setLoggedUserInfo(userInfo: UserInfo) {
    localStorage.setItem(this.USERNAME_KEY, userInfo.username);
    localStorage.setItem(this.USER_IMAGE_KEY, userInfo.imageUrl);
  }

  public isAuthenticated(): boolean {
    // TODO - use jwt parser to get exp_date and validate token
    const token = localStorage.getItem(this.AUTH_TOKEN_KEY);
    return token && token.length > 0;
  }

  public getAuthToken() {
    return localStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  public getLoggedUserInfo(): UserInfo {
    if (this.isAuthenticated()) {
      return {
        username: localStorage.getItem(this.USERNAME_KEY),
        imageUrl: localStorage.getItem(this.USER_IMAGE_KEY)
      } as UserInfo;
    }
  }

  public signInWithFacebook() {
    window.location.href = EnvironmentConfig.basePath + this.FACEBOOK_AUTH_URL;
  }

  public signInWithGithub() {
    window.location.href = EnvironmentConfig.basePath + this.GITHUB_AUTH_URL;
  }

}
