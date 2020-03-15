import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faHome, faQuestion, faPlus, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faQuestion = faQuestion;
  faPlus = faPlus;
  faUser = faUser;
  faBell = faBell;

  loggedUser: string;

  constructor(private router: Router, public authService: AuthService) { }

  navigateToAuth() {
    this.router.navigate(['/authenticate']);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}
