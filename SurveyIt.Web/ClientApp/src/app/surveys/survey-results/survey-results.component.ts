import { Component, OnInit, Input } from '@angular/core';
import { Survey } from 'src/app/core/models/survey';
import { SurveyService } from 'src/app/core/services/survey.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {
  surveyId: number;
  isCreator: boolean;
  survey: Survey;
  userId: string;

  constructor(private surveyService: SurveyService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.surveyId = params.id;
    });

    forkJoin({
      user: this.authService.getUser$(),
      survey: this.surveyService.getById(this.surveyId)
    }).subscribe(data => {

      this.userId = data.user.sub;
      this.survey = data.survey;

      this.isCreator = this.survey.creatorId === this.userId;
    });
  }
}
