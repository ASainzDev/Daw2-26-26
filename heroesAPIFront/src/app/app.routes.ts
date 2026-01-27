import { Routes } from '@angular/router';
import {Landing} from './pages/landing/landing';
import {Login} from './components/login/login';

export const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo: "landing"},
  {path:"landing", component: Landing},
  {path:"login", component: Login},

  {path:"**", redirectTo: "landing"},
];
