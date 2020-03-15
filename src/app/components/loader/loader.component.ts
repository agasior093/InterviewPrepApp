import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  styleUrls: ['./loader.component.css'],
  template: '<div *ngIf="display" class="loader"></div>',
})
export class LoaderComponent implements OnInit {

  @Input() display = false;

  constructor() { }

  ngOnInit() {
  }

}
