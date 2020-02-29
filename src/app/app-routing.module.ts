import { QuestionsComponent } from './pages/questions/questions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewQuestionComponent } from './components/new-question/new-question.component';


const routes: Routes = [
  {path: '', component: QuestionsComponent},
  {path: 'newQuestion', component: NewQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
