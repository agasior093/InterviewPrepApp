import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionsContentComponent } from './components/questions-content/questions-content.component';
import { TuiModule } from 'ngx-tui-editor';
import { MarkdownModule } from 'ngx-markdown';

import { NewQuestionComponent } from './components/new-question/new-question.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { TagSubmenuComponent } from './components/tag-submenu/tag-submenu.component';
import { EditorComponent } from './components/editor/editor.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionsComponent,
    QuestionsListComponent,
    QuestionsContentComponent,
    NewQuestionComponent,
    QuestionViewComponent,
    TagSubmenuComponent,
    EditorComponent,
    AutocompleteComponent,
    LoaderComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    TuiModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
