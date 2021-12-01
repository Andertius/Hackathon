import { Injectable } from '@angular/core';
import { QuizQuestion } from '../models/quiz-question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  public questions: QuizQuestion[] = [];
  public category: string = "";
  public difficulty: string = "";

  public setValues(questions: QuizQuestion[], category: string, difficulty: string): void {
    this.questions = questions;
    this.category = category;
    this.difficulty = difficulty;
  }
}
