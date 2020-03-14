import { Component, OnInit } from '@angular/core';
import { TuiService } from 'ngx-tui-editor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  constructor(private questionsService: QuestionsService, private editorService: TuiService) { }

  ngOnInit() {
  }

  saveQuestion() {
    const questionInMarkdown = this.editorService.getMarkdown();
    this.questionsService.saveQuestion({content: questionInMarkdown, answer: 'test', tags: ['test']}).subscribe(res => {

    })
  }
}
