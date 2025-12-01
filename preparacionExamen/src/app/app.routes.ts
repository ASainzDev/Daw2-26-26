import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { FormularioSubidaComponent } from './pages/formulario-subida-component/formulario-subida-component';
import { VistaArticuloPage } from './pages/vista-articulo-page/vista-articulo-page';

export const routes: Routes = [
    {path:'', pathMatch:'full',redirectTo:'home'},
    {path:'home', component: HomePage},
    {path:'formulario', component: FormularioSubidaComponent},
    {path:'formulario/:uuid', component:FormularioSubidaComponent},
    {path:'vista/:uuid', component: VistaArticuloPage},
    {path:'**', redirectTo:'/'},
];
