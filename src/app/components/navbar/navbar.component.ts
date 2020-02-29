import { Component, OnInit } from '@angular/core';
import { faHome, faQuestion, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faQuestion = faQuestion;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
