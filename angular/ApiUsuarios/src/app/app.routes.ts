import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { FormComponent } from './pages/form-component/form-component';
import { DetailedViewPage } from './pages/detailed-view-page/detailed-view-page';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'main'},
    {path:'main', component: MainPage},
    {path:'form', component: FormComponent},
    {path:'vista/:_id', component: DetailedViewPage},
    {path:'form/:_id', component: FormComponent},
    {path:'**', redirectTo:'main'}
];
