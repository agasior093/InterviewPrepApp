import { UserService } from './../../services/user.service';
import { Messages } from './../../model/messages';
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
  messages = new EventEmitter<Messages>();

  @Output()
  loading = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) { }

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
    this.messages.emit({ content: [] });

    if (this.signInForm.invalid) {
      this.loading.emit(false);
      return;
    }

    this.authService.signIn({ username: this.signInForm.get('username').value, password: this.signInForm.get('password').value })
      .subscribe(payload => {
        this.loading.emit(false);
        this.messages.emit({ content: [] });
        this.authService.setAuthentication(payload.accessToken);
        this.initUserInfo();
      }, err => {
        this.loading.emit(false);
        this.messages.emit({ type: 'danger', content: parseErrors(err) });
      });
  }

  signInWithFacebook() {
    this.loading.emit(true);
    this.authService.signInWithFacebook();
  }

  signInWithGithub() {
    this.loading.emit(true);
    this.authService.signInWithGithub();
  }

  private initUserInfo() {
    this.userService.getUserInfo().subscribe(payload => {
      this.authService.setLoggedUserInfo(payload);
      this.router.navigate(['/profile']);
    });
  }

}
