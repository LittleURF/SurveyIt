import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyService } from './services/survey.service';
import { AuthService } from './services/auth.service';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    SurveyService,
    AuthService,
  ]
})
export class CoreModule { }
