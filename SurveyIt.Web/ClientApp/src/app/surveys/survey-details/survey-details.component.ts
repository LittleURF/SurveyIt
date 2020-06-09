import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/core/models/survey';
import { SurveyService } from 'src/app/core/services/survey.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {
  survey: Survey;
  isCompleted = false;

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.getIdFromRoute();
    this.surveyService.getById(id).subscribe((survey: Survey) => {
      this.survey = survey;
    });
  }

  getIdFromRoute(): number {
    let id: number;
    this.route.params.subscribe(params => {
      id = params.id;
    });

    return id;
  }

}
