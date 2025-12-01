import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ProductForm } from './pages/product-form/product-form';
import { VistaCompleta } from './pages/vista-completa/vista-completa';

// Defino las rutas que creo que voy a usar, primero limpias, luego voy añadiedo según necesite.
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // Cargo página principal
    { path: 'home', component: ProductList },
    // Cargo el formulario
    { path: 'formulario', component : ProductForm},
    // Cargo la vista completa de un producto en una página nueva
    { path: 'vista/:id', component: VistaCompleta },
    // Cargo la información de un producto en el formulario
    { path: 'formulario/:id', component: ProductForm },
    // Por defecto, si no encuentra nada
    { path: '**', redirectTo: 'home' },
];
