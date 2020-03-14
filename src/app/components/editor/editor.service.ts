import { Injectable } from '@angular/core';
import Editor from 'tui-editor';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  editor: any = {};

  defaultId = 'ngx-editor-default';

  constructor() { }

  createEditor(options: any): any {
    const id = options.editorId || this.defaultId;
    this.editor[id] = Editor.factory(Object.assign({
      el: document.querySelector('.ngx-tui-editor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px'
    },
      options));
  }
}
