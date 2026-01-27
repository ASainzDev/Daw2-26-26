import { Routes } from '@angular/router';
import {LandingPage} from './pages/landing-page/landing-page';
import {HeroList} from './pages/hero-list/hero-list';
import {HeroDetails} from './pages/hero-details/hero-details';

export const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component: LandingPage},
  {path:'list', component: HeroList},
  {path:'detail/:id', component: HeroDetails},
  {path:'**', redirectTo:'home'}
];
