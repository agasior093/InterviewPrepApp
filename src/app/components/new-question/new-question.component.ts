import { Component, OnInit } from '@angular/core';
import { TuiService } from 'ngx-tui-editor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  constructor(private editorService: TuiService, private http: HttpClient) { }

  options: {
    initialValue: `# Title of Project` ,
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: 'auto',
    minHeight: '500px'
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ngOnInit() {
  }

  saveQuestion() {
    const questionInMarkdown = this.editorService.getMarkdown();
    console.log(JSON.stringify(questionInMarkdown));
    return this.http.post<any>('URL', questionInMarkdown, this.httpOptions);
  }
}
