import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/core/models/question';
import { QuestionType } from 'src/app/core/enums/question-type';
import { FormGroup } from '@angular/forms';
import { Answer } from 'src/app/core/models/answer';

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

  questionType = QuestionType;

  constructor() { }

  ngOnInit(): void {
    console.log(this.answer);
  }

}
