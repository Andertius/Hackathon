import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuizQuestion } from 'src/app/models/quiz-question.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
        questionNumber: number,
        category: string,
        difficulty: string,
        time: Date,
        correctQuestionNumber: number,
    }) { }

  ngOnInit(): void {
  }

}
