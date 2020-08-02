import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogAlertComponent } from './dialogs/dialog-alert/dialog-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RatingStarsComponent,
    DialogAlertComponent,
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
  ]
})
export class SharedModule { }
