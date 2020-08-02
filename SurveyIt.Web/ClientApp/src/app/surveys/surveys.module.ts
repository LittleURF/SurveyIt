import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingAnswerComponent } from './survey-details/question/answers/rating-answer/rating-answer.component';
import { YesOrNoAnswerComponent } from './survey-details/question/answers/yes-or-no-answer/yes-or-no-answer.component';
import { SurveyPreviewComponent } from './survey-preview/survey-preview.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { QuestionComponent } from './survey-details/question/question.component';
import { OpenAnswerComponent } from './survey-details/question/answers/open-answer/open-answer.component';
import { SurveysRoutingModule } from './surveys-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { SurveyResultsComponent } from './survey-results/survey-results.component';


@NgModule({
  declarations: [
    SurveyPreviewComponent,
    SurveyDetailsComponent,
    QuestionComponent,
    OpenAnswerComponent,
    YesOrNoAnswerComponent,
    RatingAnswerComponent,
    SurveyCreateComponent,
    SurveyResultsComponent,
  ],
  imports: [
    SharedModule,
    SurveysRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    SurveyPreviewComponent,
  ]
})
export class SurveysModule { }
