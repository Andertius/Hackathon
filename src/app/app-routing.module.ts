import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyFromGenerationOrFavoritesGuard } from './helpers/only-from-generation-or-favourites.guard';
import { FormGenerationComponent } from './modules/generate-quiz/form-generation/form-generation.component';
import { QuizItselfComponent } from './modules/generate-quiz/quiz-itself/quiz-itself.component';

const routes: Routes = [
  { path: 'generate-quiz', component: FormGenerationComponent },
  { path: 'quiz', component: QuizItselfComponent, canActivate: [OnlyFromGenerationOrFavoritesGuard], },
  { path: '', pathMatch: 'full', redirectTo: 'generate-quiz' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
