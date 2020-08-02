import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/core/services/survey.service';
import { Survey } from 'src/app/core/models/survey';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
  animations: [
    trigger('surveyList', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => in', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class FeaturedComponent implements OnInit {
  surveys: Survey[];

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getFeatured().subscribe((data: Survey[]) => {
      this.surveys = data;
    });
  }

}
