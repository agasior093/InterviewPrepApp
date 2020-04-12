import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import Editor from 'tui-editor';

@Component({
  selector: 'app-editor',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './editor.component.css',
  ],
  templateUrl: './editor.component.html',
})
export class EditorComponent implements OnInit, AfterViewInit {

  @Output() questionMarkdown = new EventEmitter<string>();
  @Output() answerMarkdown = new EventEmitter<string>();

  @ViewChild('question', { static: false })
  private questionEditorView: ElementRef;

  @ViewChild('answer', { static: false })
  private answerEditorView: ElementRef;

  private questionEditor;
  private answerEditor;

  private readonly toolbarItems = [
    'bold',
    'italic',
    'strike',
    'ul',
    'ol',
    'image',
    'link',
    'code',
    'codeblock'
  ];

  public clearMarkdowns() {
    this.answerEditor.setMarkdown('');
    this.questionEditor.setMarkdown('');
  }

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initEditors(this.toolbarItems);
  }

  onQuestionMarkdownChange() {
    if (this.questionEditor) {
      this.questionMarkdown.emit(this.questionEditor.getMarkdown());
    }
  }

  onAnswerMarkdownChange() {
    if (this.answerEditor) {
      this.answerMarkdown.emit(this.answerEditor.getMarkdown());
    }
  }

  private createEditor(options: any): any {
    return Editor.factory(Object.assign({
      el: document.querySelector('.ngx-tui-editor'),
      previewStyle: 'vertical',
      initialEditType: 'markdown'
    },
      options));
  }

  private initEditors(toolbarItems: string[]) {
    this.questionEditor = this.createEditor({
      ...{
        toolbarItems,
        events: {
          change: () => this.onQuestionMarkdownChange()
        },
      },
      el: this.questionEditorView.nativeElement,
    });


    this.answerEditor = this.createEditor({
      ...{
        toolbarItems,
        events: {
          change: () => this.onAnswerMarkdownChange()
        },
      },
      el: this.answerEditorView.nativeElement,
    });
  }

}
