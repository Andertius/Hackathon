import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGenerationComponent } from './form-generation/form-generation.component';
import { MaterialsModule } from '../materials/materials.module';
import { QuizItselfComponent } from './quiz-itself/quiz-itself.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    FormGenerationComponent,
    QuizItselfComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    MaterialsModule,
  ],
  exports: [
    FormGenerationComponent,
  ]
})
export class QuizModule { }
