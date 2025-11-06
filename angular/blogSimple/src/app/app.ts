import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { SeccionPrincipal } from "./components/seccion-principal/seccion-principal";
import { Articulo } from './interfaces/Articulo';

@Component({
  selector: 'app-root',
  imports: [Navbar, SeccionPrincipal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  articuloNuevo: Articulo;

  constructor(){
    this.articuloNuevo = {
      id : 0,
      titulo : '',
      url : '',
      contenido : '',
      fecha : '00-00-0000',
    };
  }

  handleLanzarArticulo($event: any) {
    this.articuloNuevo = $event;
    console.log('mensaje recibido del hijo');
  }

  protected readonly title = signal('blogSimple');


}
