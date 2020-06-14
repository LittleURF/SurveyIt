import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './pages/home/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';
import { SurveyPreviewComponent } from './surveys/survey-preview/survey-preview.component';
import { RatingStarsComponent } from './surveys/rating-stars/rating-stars.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { QuestionComponent } from './surveys/survey-details/question/question.component';
import { OpenAnswerComponent } from './surveys/survey-details/question/answers/open-answer/open-answer.component';
import { YesOrNoAnswerComponent } from './surveys/survey-details/question/answers/yes-or-no-answer/yes-or-no-answer.component';
import { RatingAnswerComponent } from './surveys/survey-details/question/answers/rating-answer/rating-answer.component';
import { InterceptorService } from './core/services/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    SurveyPreviewComponent,
    RatingStarsComponent,
    SurveyDetailsComponent,
    HomeComponent,
    NotFoundComponent,
    QuestionComponent,
    OpenAnswerComponent,
    YesOrNoAnswerComponent,
    RatingAnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
