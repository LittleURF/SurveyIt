import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from 'src/app/shared/dialogs/dialog-alert/dialog-alert.component';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private dialog: MatDialog){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.loggedIn){
        return this.auth.loggedIn;
      } else {
        this.dialog.open(DialogAlertComponent, {
          data: {
            title: 'Unauthorized',
            message: 'You need to login first!'
          }
        });
      }
  }
}
