import { Component, OnInit } from '@angular/core';
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
  loading = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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
    this.loading = true;

    if (this.signUpForm.invalid) {
      this.loading = false;
      return;
    }

  }

}
