import { SignUpResponse } from './../../model/signUpResponse';
import { Messages } from './../../model/messages';
import { parseErrors } from 'src/app/commons/response-utils';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faUser = faUser;
  faKey = faKey;
  faEnvelope = faEnvelope;
  signUpForm: FormGroup;
  submitted = false;

  @Output()
  messages = new EventEmitter<Messages>();

  @Output()
  loading = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]]
    });

  }

  get form() { return this.signUpForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading.emit(true);
    this.messages.emit({content: []});

    if (this.signUpForm.invalid) {
      this.loading.emit(false);
      return;
    }

    this.authService.signUp(
      {
        username: this.signUpForm.get('username').value,
        email: this.signUpForm.get('email').value,
        password: this.signUpForm.get('password').value,
        passwordConfirmation: this.signUpForm.get('passwordConfirmation').value,
      })
      .subscribe(payload => {
        this.loading.emit(false);
        this.signUpForm.reset();
        this.messages.emit({type: 'success', content: [payload.message]});
      }, err => {
        console.log(err)
        this.loading.emit(false);
        this.messages.emit({type: 'danger', content: [err.error]});
      });

  }

}
