import { Routes, RouterModule } from '@angular/router';
import { Landing } from './pages/landing/landing';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'inicio'},
    {path:'inicio', component: Landing},
    {path:'**', redirectTo:'landing'}
];
