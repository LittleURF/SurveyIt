import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogActions, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html'
})
export class DialogAlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any)  {

  }
}
