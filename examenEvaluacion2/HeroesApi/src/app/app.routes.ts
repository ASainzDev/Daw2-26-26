import { Routes } from '@angular/router';
import { LandinPage } from './pages/landin-page/landin-page';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Herolist } from './pages/herolist/herolist';

export const routes: Routes = [
    
    {path:"", pathMatch:"full", redirectTo:"landing"},
    {path:"landing", component:LandinPage},
    {path:"login", component:Login},
    {path:"dashboard", component: Dashboard, children:[
        {path:"", pathMatch:"full", redirectTo:"dashboard"},
        {path:"herolist", component:Herolist},
        {path:"**", redirectTo:"dashboard"},
    ]},
    {path:"**", redirectTo:"landing"},
];
