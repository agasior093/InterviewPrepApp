import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { parseErrors } from 'src/app/commons/response-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  faUser = faUser;
  faKey = faKey;

  signInForm: FormGroup;
  submitted = false;

  @Output()
  errors = new EventEmitter<string[]>();

  @Output()
  loading = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  get form() { return this.signInForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading.emit(true);
    this.errors.emit([]);

    if (this.signInForm.invalid) {
      this.loading.emit(false);
      return;
    }

    this.authService.signIn({ username: this.signInForm.get('username').value, password: this.signInForm.get('password').value })
      .subscribe(payload => {
        this.loading.emit(false);
        this.errors.emit([]);
        this.authService.setAuthentication(payload);
        this.router.navigate(['/']);
      }, err => {
        this.loading.emit(false);
        this.errors.emit(parseErrors(err));
      });

  }

}
