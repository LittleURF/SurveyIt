import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-yes-or-no-answer',
  templateUrl: './yes-or-no-answer.component.html',
  styleUrls: ['./yes-or-no-answer.component.scss']
})
export class YesOrNoAnswerComponent implements OnInit {
  @Input() index: number;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
