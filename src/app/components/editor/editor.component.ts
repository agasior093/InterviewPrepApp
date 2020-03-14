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
  @ViewChild('question', {static: false})
  questionEditor: ElementRef;

  @ViewChild('answer', {static: false})
  answerEditor: ElementRef;

  @Output() questionMarkdown = new EventEmitter<string>();
  @Output() answerMarkdown = new EventEmitter<string>();

  editor: any = {};

  defaultId = 'ngx-editor-default';

  options = {
    toolbarItems: [
      'bold',
      'italic',
      'strike',
      'ul',
      'ol',
      'image',
      'link',
      'code',
      'codeblock'
    ]
  };

  constructor() {}
  ngOnInit()  {}

  ngAfterViewInit() {
    this.initEditors();
  }

  private createEditor(options: any): any {
    const id = options.editorId || this.defaultId;
    this.editor[id] = Editor.factory(Object.assign({
      el: document.querySelector('.ngx-tui-editor'),
      previewStyle: 'vertical'
    },
      options));
  }

  private async initEditors() {
    this.editor = await this.createEditor({
        ...this.options,
        el: this.questionEditor.nativeElement,
    });


    this.editor = await this.createEditor({
      ...this.options,
      el: this.answerEditor.nativeElement,
  });
}

}
