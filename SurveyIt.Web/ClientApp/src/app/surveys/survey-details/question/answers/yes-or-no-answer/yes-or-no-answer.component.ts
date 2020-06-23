import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-yes-or-no-answer',
  templateUrl: './yes-or-no-answer.component.html',
  styleUrls: ['./yes-or-no-answer.component.scss']
})
export class YesOrNoAnswerComponent implements OnInit {
  @Input() index: number;
  @Input() value: string;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const answers = this.parentForm.get(`answers`) as FormArray;
    answers.controls[this.index].setValue(this.value);
  }

}
