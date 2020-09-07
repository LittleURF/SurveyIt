import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogAlertComponent } from './dialogs/dialog-alert/dialog-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NavigateBackComponent } from './navigate-back/navigate-back.component';

@NgModule({
  declarations: [
    RatingStarsComponent,
    DialogAlertComponent,
    NavigateBackComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RatingStarsComponent,
    NavigateBackComponent
  ]
})
export class SharedModule { }
