import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Login} from './pages/login/login';
import {Products} from './pages/products/products';
import {Private} from './pages/private/private';
import {loginguardGuard} from './core/guards/loginguard-guard';

export const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component: Home},
  {path:'login', component: Login},
  {path:'private', component: Private, canActivate: [loginguardGuard], children:[
      {path:'products', component: Products},
    ]},
  {path:'**', redirectTo:'home'},
];
