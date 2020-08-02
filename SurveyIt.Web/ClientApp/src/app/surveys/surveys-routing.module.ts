import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { LoggedInGuard } from '../core/guards/logged-in.guard';
import { SurveyCreateComponent } from './survey-create/survey-create.component';
import { SurveyResultsComponent } from './survey-results/survey-results.component';


const routes: Routes = [
  { path: 'surveys/create', component: SurveyCreateComponent, pathMatch: 'full' /*canActivate: [LoggedInGuard]*/ },
  { path: 'surveys/:id', component: SurveyDetailsComponent, canActivate: [LoggedInGuard] },
  { path: 'surveys/:id/results', component: SurveyResultsComponent, /*canActivate: [LoggedInGuard]*/ },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule { }
