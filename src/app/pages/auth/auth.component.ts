import { Messages } from './../../model/messages';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  active = 'signIn';
  messages: Messages = { content: [] };
  loading = false;

  setSignInMessages(messages: Messages) {
    this.messages = messages;
  }

  setSignInLoader(value: boolean) {
    this.loading = value;
  }

  setSignUpMessages(messages: Messages) {
    this.messages = messages;
    if (messages.type === 'success') {
      this.active = 'signIn';
    }
  }

  setSignUpLoader(value: boolean) {
    this.loading = value;
  }

  clearErrors() {
    this.messages = { content: [] };
  }

  constructor() { }

  ngOnInit() {
  }

}
