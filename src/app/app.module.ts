import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './modules/materials/materials.module';
import { QuizModule } from './modules/generate-quiz/quiz.module';
import { HttpClientModule } from '@angular/common/http';
import { OnlyFromGenerationOrFavoritesGuard } from './helpers/only-from-generation-or-favourites.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    QuizModule,
    HttpClientModule,
  ],
  providers: [OnlyFromGenerationOrFavoritesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
