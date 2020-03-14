import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TuiService } from 'ngx-tui-editor';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class NewQuestionComponent implements OnInit {

  constructor(private questionsService: QuestionsService, private editorService: TuiService) { }

  ngOnInit() {
  }

  tags = ["java", "javascript", "spring", "angular", "junior"]

  selectedTags = [];

  deleteTag(index: number)  {

  }

  getSelectedTags($event) {
    this.selectedTags = Array.from(new Set($event));
  }

  saveQuestion() {
    const questionInMarkdown = this.editorService.getMarkdown();
    this.questionsService.saveQuestion({content: questionInMarkdown, answer: 'test', tags: ['test']}).subscribe(res => {

    })
  }
}
