import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {
  answersReadOnly: boolean;
  questionsReadOnly: boolean;
  createSurveyForm: FormGroup;

  constructor() { }

  initializeForm(): void {
    this.answersReadOnly = true;
    this.questionsReadOnly = false;

    this.createSurveyForm = new FormGroup({
      title: new FormControl(null, [Validators.minLength(10), Validators.maxLength(70)]),
      description: new FormControl(null, Validators.maxLength(255)),
      questions: new FormArray([], Validators.minLength(1)),
    });
  }

  addQuestion(newQuestion: Question): void {
    const questions = this.createSurveyForm.get('questions') as FormArray;
    const newQuestionControl = new FormControl(newQuestion.text, Validators.required);

    questions.push(newQuestionControl);
  }
}
