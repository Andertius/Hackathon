import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItselfComponent } from './quiz-itself.component';

describe('QuizItselfComponent', () => {
  let component: QuizItselfComponent;
  let fixture: ComponentFixture<QuizItselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizItselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizItselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
