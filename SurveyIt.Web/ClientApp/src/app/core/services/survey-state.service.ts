import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class SurveyStateService {
  answersReadOnly: boolean;
  questionsReadOnly: boolean;

  constructor() { }


}
