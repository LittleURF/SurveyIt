import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from 'src/app/core/services/survey.service';
import { Survey } from 'src/app/core/models/survey';
import { Question } from 'src/app/core/models/question';

@Component({
  selector: 'app-survey-featured',
  templateUrl: './survey-featured.component.html',
  styleUrls: ['./survey-featured.component.scss']
})
export class SurveyFeaturedComponent implements OnInit {
  @Input() survey : Survey;
  filteredQuestions: Question[];
  
  constructor() { }

  ngOnInit(): void {
    this.filteredQuestions = this.survey.questions.slice(0, 3);
  }
}
