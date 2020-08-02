import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { SurveyService } from 'src/app/core/services/survey.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuestionType } from 'src/app/core/enums/question-type';
import { Question } from 'src/app/core/models/question';
import { SurveyStateService } from 'src/app/core/services/survey-state.service';

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

  // MOVE ALL THE INPUTS DATA TO THE SURVEY STATE SERVICE, THEN BIND FIELDS TO THE ACTUAL FORM, MAKE INPUTS. START WITH TITLE
  constructor(public surveyStateService: SurveyStateService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.getUser$().subscribe(data => {
      this.userId = data.sub;
      this.surveyStateService.initializeForm();
      this.userSubscription.unsubscribe();
    });
  }

  addQuestion(type: QuestionType): void {
    const question = new Question();
    question.type = type;

    this.questions.push(question);
    this.surveyStateService.addQuestion(question);
  }

  onSubmit() {
    if (!this.surveyStateService.createSurveyForm.valid){
      alert('Form is invalid!');
      return;
    }

    alert('OFF IT GOES WHOOOOOO');
    return;
  }
}
