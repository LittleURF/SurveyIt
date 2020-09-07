import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/core/models/survey';
import { SurveyService } from 'src/app/core/services/survey.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Answer } from 'src/app/core/models/answer';
import { PostCompletionRequestBody } from 'src/app/core/request-templates/post-completion-request-body';
import { AuthService } from 'src/app/core/services/auth.service';
import { Completion } from 'src/app/core/models/completion';
import { Observable, forkJoin } from 'rxjs';
import { SurveyStateService } from 'src/app/core/services/survey-state.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss'],
  providers: [SurveyStateService]
})

export class SurveyDetailsComponent implements OnInit {
  survey: Survey;
  isCompleted = false;
  completion: Completion;
  surveyForm: FormGroup;
  userId: string;

  constructor(private surveyService: SurveyService, private surveyStateService: SurveyStateService,
              private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.getIdFromRoute();
    this.surveyStateService.questionsReadOnly = true;
    this.surveyStateService.answersReadOnly = false;

    forkJoin({
      user: this.authService.getUser$(),
      survey: this.surveyService.getById(id)
    }).subscribe(data => {
      this.userId = data.user.sub;
      this.survey = data.survey;

      const completedBy = data.survey.completions.map(completion => completion.completingUserId);
      if (completedBy.includes(this.userId)){
        this.isCompleted = true;
        this.completion = data.survey.completions.find(c => c.completingUserId === this.userId);
        this.surveyStateService.answersReadOnly = true;
      }

      this.initializeForm();
    });
  }

  initializeForm(): void {
    this.surveyForm = new FormGroup({
      answers: new FormArray([], Validators.required),
    });

    for (const question of this.survey.questions) {
      const newControl = new FormControl(null, Validators.required);
      const answersGroup = this.surveyForm.get('answers') as FormArray;
      answersGroup.push(newControl);
    }
  }

  onSubmit() {
    if (!this.surveyForm.valid){
      alert('Form is invalid!');
      return;
    }

    const requestBody: PostCompletionRequestBody = {
      surveyId: this.survey.id,
      completingUserId: this.userId,
      answers: []
    };

    this.surveyForm.get('answers').value.forEach((answerValue, index) => {
      requestBody.answers.push({
        questionId: this.survey.questions[index].id,
        value: answerValue
        } as Answer);
    });

    this.surveyService.postCompletion(requestBody).subscribe(data => {
      this.isCompleted = true;
      this.completion = data;
      this.surveyStateService.answersReadOnly = true;
      console.log(data);
    });
  }

  getIdFromRoute(): number {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params.id;
    });

    return id;
  }
}
