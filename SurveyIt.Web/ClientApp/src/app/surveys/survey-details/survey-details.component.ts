import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/core/models/survey';
import { SurveyService } from 'src/app/core/services/survey.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {
  survey: Survey;
  isCompleted = false;
  surveyForm: FormGroup;

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.getIdFromRoute();
    this.surveyService.getById(id).subscribe((survey: Survey) => {
      this.survey = survey;
      this.initializeForm();
    });
  }

  initializeForm(): void{
    // actually, only dynamic elements here, the IDs ill take out
    // programatically just before the submit
    this.surveyForm = new FormGroup({
      answers: new FormArray([], Validators.required)
    });

    for (let question of this.survey.questions){
      const newControl = new FormControl(null, Validators.required);
      const answersGroup = this.surveyForm.get('answers') as FormArray;
      answersGroup.push(newControl);
    }
    console.log(this.surveyForm.get('answers'));
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    //   'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    //   'gender': new FormControl('male')
    // });
  }

  onSubmit() {
    console.log(this.surveyForm);
  }

  getIdFromRoute(): number {
    let id: number;
    this.route.params.subscribe(params => {
      id = params.id;
    });

    return id;
  }

}
