import { Messages } from './../../model/messages';
import { EditorComponent } from './../editor/editor.component';
import { CreateQuestionRequest } from './../../model/createQuestionRequest';
import { TagService } from './../../services/tag.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { parseErrors } from 'src/app/commons/response-utils';


@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  @ViewChild('editor', { static: false })
  editor: EditorComponent;

  constructor(private questionsService: QuestionsService, private tagService: TagService) { }

  tags: string[] = [];
  selectedTags: string[] = [];
  messages: Messages = { content: [] };
  createQuestionRequest: CreateQuestionRequest = {};
  loading = false;

  ngOnInit() {
    this.loading = true;
    this.tagService.getAllTags().subscribe(payload => {
      this.tags = payload.map(tag => tag.value);
      this.loading = false;
    }, err => {
      this.messages = { type: 'danger', content: parseErrors(err) };
      this.loading = false;
    });
  }

  assignQuestionContent(value: string) {
    this.createQuestionRequest.content = value;
  }

  assignAnswerContent(value: string) {
    this.createQuestionRequest.answer = value;
  }

  deleteTag(index: number) {
    this.selectedTags.splice(index, 1);
  }

  getSelectedTags($event: Iterable<string>) {
    this.selectedTags = Array.from(new Set($event));
  }

  clearErrors() {
    this.messages = { content: [] };
  }

  saveQuestion() {
    this.loading = true;
    this.clearErrors();
    this.createQuestionRequest.tags = this.selectedTags.map(tag => tag);
    this.questionsService.saveQuestion(this.createQuestionRequest).subscribe(payload => {
      this.messages = { type: 'success', content: this.parseSuccess(payload) };
      this.loading = false;
      this.editor.clearMarkdowns();
      this.selectedTags = [];
    }, err => {
      this.messages = { type: 'danger', content: parseErrors(err) };
      this.loading = false;
    });
  }

  private parseSuccess(payload: any): string[] {
    return ['Question successfully saved with id ' + payload.id];

  }
}
