import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/core/services/survey.service';
import { Survey } from 'src/app/core/models/survey';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  surveys: Survey[];

  constructor(private surveyService : SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getAll().subscribe((data: Survey[]) => {
      this.surveys = data;
    });
  }

}
