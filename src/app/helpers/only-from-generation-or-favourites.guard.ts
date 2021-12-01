import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { QuestionsService } from "../services/questions.service";

@Injectable({
  providedIn: 'root'
})
export class OnlyFromGenerationOrFavoritesGuard implements CanActivate {
  constructor(
    private readonly _router: Router,
    private readonly _questionsService: QuestionsService) { }

  canActivate() {
    if (this._questionsService.questions.length === 0) {
      this._router.navigate(['generate-quiz']);
      return false;
    }

    return true;
  }
}
