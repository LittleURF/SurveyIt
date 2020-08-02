import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core/models/question';
import { QuestionType } from 'src/app/core/enums/question-type';
import { FormGroup } from '@angular/forms';
import { Answer } from 'src/app/core/models/answer';
import { SurveyStateService } from 'src/app/core/services/survey-state.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() answer: Answer;
  @Input() index: number;
  @Input() parentForm: FormGroup;
  isReadonly: boolean;
  questionType = QuestionType;

  constructor(private surveyStateService: SurveyStateService) { }

  ngOnInit(): void {
    if (this.surveyStateService.questionsReadOnly){
      this.isReadonly = true;
    }
  }

}
