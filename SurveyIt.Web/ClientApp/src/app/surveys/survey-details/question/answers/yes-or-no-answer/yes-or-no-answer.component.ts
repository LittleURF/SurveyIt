import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { SurveyStateService } from 'src/app/core/services/survey-state.service';

@Component({
  selector: 'app-yes-or-no-answer',
  templateUrl: './yes-or-no-answer.component.html',
  styleUrls: ['./yes-or-no-answer.component.scss']
})
export class YesOrNoAnswerComponent implements OnInit {
  @Input() index: number;
  @Input() value: string;
  @Input() parentForm: FormGroup;
  isReadonly: boolean;

  constructor(private surveyStateService: SurveyStateService) { }

  ngOnInit(): void {
    this.isReadonly = this.surveyStateService.answersReadOnly;

    if (!this.isReadonly){
      const answers = this.parentForm.get(`answers`) as FormArray;
      answers.controls[this.index].setValue(this.value);
    }
  }

}
