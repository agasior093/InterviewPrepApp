import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { TuiModule } from 'ngx-tui-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultAuthGuard } from './commons/default.auth.guard';
import { TokenInterceptor } from './commons/token.interceptor';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { EditorComponent } from './components/editor/editor.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SocialComponent } from './components/social/social.component';
import { TagSubmenuComponent } from './components/tag-submenu/tag-submenu.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestionsComponent } from './pages/questions/questions.component';


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
    SignupComponent,
    SocialComponent,
    ProfileComponent,
    ProfileViewComponent
  ],
  imports: [
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: true
        }
      },
    }),
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
    DefaultAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
