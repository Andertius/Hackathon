import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizQuestion } from 'src/app/models/quiz-question.model';
import { QuizResponse } from 'src/app/models/quiz-response.model';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-form-generation',
  templateUrl: './form-generation.component.html',
  styleUrls: ['./form-generation.component.scss']
})
export class FormGenerationComponent implements OnInit {

  public questions: QuizQuestion[] = [];
  public quizForm!: FormGroup;

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
    private readonly _questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.quizForm = new FormGroup({
      questionNumber: new FormControl('', [Validators.required, Validators.min(1), Validators.max(50) ]),
      category: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
    });
  }

  public submit(): void {
    let questionNumber = this.quizForm.get('questionNumber')?.value;
    let category = this.quizForm.get('category')?.value;
    let difficulty = this.quizForm.get('difficulty')?.value;

    const params = new HttpParams()
      .append( "amount", questionNumber)
      .append( "category", category)
      .append( "difficulty", difficulty)
      .append( "type", "boolean")

    this._http.get<QuizResponse>("https://opentdb.com/api.php", { params })
      .subscribe(x => {
        let counter = 1;
        debugger;
        for (let question of x.results) {
          this.questions.push({
            questionNumber: counter++,
            question: question.question,
            correct_answer: question.correct_answer.toLowerCase() === "false" ? false : true,
          });
        }

        this._questionsService.setValues(
          this.questions,
          this.mapCategory(category),
          `${difficulty[0].toUpperCase()}${difficulty.slice(1, difficulty.length)}`);
        this._router.navigate(['quiz']);
      });
  }

  private mapCategory(category: string): string {
    if (category === "9") {
      return "General Knowledge";
    } else if (category === "18") {
      return "Computers";
    } else {
      return "Geography";
    }
  }

}
