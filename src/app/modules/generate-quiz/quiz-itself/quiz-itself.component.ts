import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, Router } from '@angular/router';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { QuestionsService } from 'src/app/services/questions.service';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-quiz-itself',
  templateUrl: './quiz-itself.component.html',
  styleUrls: ['./quiz-itself.component.scss']
})
export class QuizItselfComponent implements OnInit, AfterViewInit {
  private startTime!: Date;

  public questions: QuizQuestion[] = [];
  public category!: string;
  public difficulty!: string;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _questionsService: QuestionsService,
    private readonly _router: Router) { }

  ngOnInit(): void {
    if (this._questionsService.questions.length === 0) {
      this._router.navigate(['generate-quiz']);
    }

    this.questions = this._questionsService.questions;
    this.category = this._questionsService.category;
    this.difficulty = this._questionsService.difficulty;
  }

  ngAfterViewInit(): void {
    this.startTime = new Date();
  }

  public submit(): void {
    let correctAnswers = this.countCorrectAnswers();

    if (correctAnswers === null) {
      alert('Finish the quiz first!');
      return;
    }

    const dialogRef = this._dialog.open(ResultsComponent, {
      data: {
        questionNumber: this.questions.length,
        category: this.category,
        difficulty: this.difficulty,
        time: new Date().getTime() - this.startTime.getTime(),
        correctQuestionNumber: correctAnswers,
      }
    });

    dialogRef.afterClosed().subscribe(_ => {
      this._router.navigate(['generate-quiz']);
    });
  }

  private countCorrectAnswers(): number | null {
    let counter = 0;

    for (let i = 0; i < this.questions.length; i++) {
      let radioTrue = document.getElementById(`${i}-t`);
      let radioFalse = document.getElementById(`${i + 1}-f`);

      if (!radioTrue?.classList.contains('mat-radio-checked') &&
          !radioFalse?.classList.contains('mat-radio-checked')) {
        return null;
      }

      if (radioTrue?.classList.contains('mat-radio-checked') && this.questions[i].correct_answer === true ||
          radioFalse?.classList.contains('mat-radio-checked') && this.questions[i].correct_answer === false) {
        counter++;
      }
    }

    return counter;
  }
}
