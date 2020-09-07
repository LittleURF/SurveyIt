import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './pages/home/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FeaturedComponent } from './pages/home/featured/featured.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SurveysModule } from './surveys/surveys.module';
import { CoreModule } from './core/core.module';
import { MatDialog, MatDialogModule, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedComponent,
    HomeComponent,
    NotFoundComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SurveysModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
