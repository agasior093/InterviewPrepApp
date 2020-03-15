import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  active = 'signIn';
  errors: string[] = [];
  loading = false;

  setErrors(errors: string[]) {
    this.errors = errors;
  }

  setLoader(value: boolean) {
    this.loading = value;
  }

  clearErrors() {
    this.errors = [];
  }

  constructor() { }

  ngOnInit() {
  }

}
