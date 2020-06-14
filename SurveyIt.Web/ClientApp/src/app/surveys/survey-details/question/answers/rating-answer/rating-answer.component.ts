import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating-answer',
  templateUrl: './rating-answer.component.html',
  styleUrls: ['./rating-answer.component.scss']
})
export class RatingAnswerComponent implements OnInit {
  @Input() index: number;
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
