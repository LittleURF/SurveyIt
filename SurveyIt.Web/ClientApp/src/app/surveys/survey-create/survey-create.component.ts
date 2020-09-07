import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { SurveyService } from 'src/app/core/services/survey.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionType } from 'src/app/core/enums/question-type';
import { Question } from 'src/app/core/models/question';
import { SurveyStateService } from 'src/app/core/services/survey-state.service';
import { PostSurveyRequestBody } from 'src/app/core/request-templates/post-survey-request-body';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss'],
  providers: [SurveyStateService]
})
export class SurveyCreateComponent implements OnInit {
  userId: string;
  userSubscription: Subscription;
  questions: Question[] = [];
  questionType = QuestionType;
  surveyForm: FormGroup;

  constructor(
      public surveyStateService: SurveyStateService,
      private surveyService: SurveyService,
      private authService: AuthService,
      private router: Router) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser$().subscribe(data => {
      this.userId = data.sub;
      this.initializeForm();
      this.userSubscription.unsubscribe();
    });
  }

  initializeForm(): void {
    this.surveyStateService.answersReadOnly = true;
    this.surveyStateService.questionsReadOnly = false;

    this.surveyForm = new FormGroup({
      title: new FormControl('Your Title', [Validators.minLength(10), Validators.maxLength(70)]),
      description: new FormControl('Your Description', Validators.maxLength(255)),
      questions: new FormArray([], Validators.minLength(1)),
    });
  }

  addQuestion(type: QuestionType): void {
    const question = new Question();
    question.type = type;

    const formQuestions = this.surveyForm.get('questions') as FormArray;
    const newQuestionControl = new FormControl(question.text, Validators.required);

    formQuestions.push(newQuestionControl);
    this.questions.push(question);
  }

  onSubmit() {
    if (!this.surveyForm.valid){
      alert('Form is invalid!');
      return;
    }

    alert('OFF IT GOES WHOOOOOO');
    const title = this.surveyForm.get('title').value;
    const creatorId = this.userId;
    const questions = this.questions;
    const description = this.surveyForm.get('description').value;
    const formBody = new PostSurveyRequestBody(title, creatorId, questions, description);

    this.surveyService.postNewSurvey(formBody).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
