import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
