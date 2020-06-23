import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rating-answer',
  templateUrl: './rating-answer.component.html',
  styleUrls: ['./rating-answer.component.scss']
})
export class RatingAnswerComponent implements OnInit {
  @Input() index: number;
  @Input() value: string;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const answers = this.parentForm.get(`answers`) as FormArray;
    answers.controls[this.index].setValue(this.value);
  }

}
