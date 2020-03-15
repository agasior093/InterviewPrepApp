import { DefaultAuthGuard } from './commons/default.auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { TuiModule } from 'ngx-tui-editor';
import { MarkdownModule } from 'ngx-markdown';

import { NewQuestionComponent } from './components/new-question/new-question.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { TagSubmenuComponent } from './components/tag-submenu/tag-submenu.component';
import { EditorComponent } from './components/editor/editor.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionsComponent,
    QuestionsListComponent,
    NewQuestionComponent,
    QuestionViewComponent,
    TagSubmenuComponent,
    EditorComponent,
    AutocompleteComponent,
    LoaderComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    TuiModule,
    HttpClientModule
  ],
  providers: [
    DefaultAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
