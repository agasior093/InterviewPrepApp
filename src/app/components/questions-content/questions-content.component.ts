import { Question } from './../../model/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-content',
  templateUrl: './questions-content.component.html',
  styleUrls: ['./questions-content.component.css']
})
export class QuestionsContentComponent implements OnInit {

  @Input() questions: Question[] = [];
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }


  codeBlock: string = 'public class Base \{\n private int fun() \{ return 0 }';

  languages = ['java']




}
