import { QuestionsComponent } from './pages/questions/questions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { QuestionViewComponent } from './components/question-view/question-view.component';


const routes: Routes = [
  {path: '', component: QuestionsComponent},
  {path: 'newQuestion', component: NewQuestionComponent},
  {path: 'viewQuestions', component: QuestionViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
