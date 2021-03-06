import { ProfileComponent } from './pages/profile/profile.component';
import { SocialComponent } from './components/social/social.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { DefaultAuthGuard } from './commons/default.auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';


const routes: Routes = [
  {path: '', component: QuestionsComponent},
  {path: 'authenticate', component: AuthComponent},
  {path: 'social/:token', component: SocialComponent},
  {path: 'viewQuestions', component: QuestionsComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [DefaultAuthGuard]},
  {path: 'newQuestion', component: NewQuestionComponent, canActivate: [DefaultAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
