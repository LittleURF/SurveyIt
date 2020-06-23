import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Question } from 'src/app/core/models/question';

@Component({
  selector: 'app-open-answer',
  templateUrl: './open-answer.component.html',
  styleUrls: ['./open-answer.component.scss']
})
export class OpenAnswerComponent implements OnInit {
  @Input() index: number;
  @Input() value: string;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const answers = this.parentForm.get(`answers`) as FormArray;
    answers.controls[this.index].setValue(this.value);
  }

}
