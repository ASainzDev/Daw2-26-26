import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { FormComponent } from './pages/form-component/form-component';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'main'},
    {path:'main', component: MainPage},
    {path:'form', component: FormComponent},
    {path:'**', redirectTo:'main'}
];
