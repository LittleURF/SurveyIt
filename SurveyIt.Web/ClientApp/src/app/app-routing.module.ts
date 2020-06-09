import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'surveys/:id', component: SurveyDetailsComponent },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
