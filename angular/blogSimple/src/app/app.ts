import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { SeccionPrincipal } from "./components/seccion-principal/seccion-principal";
import { Articulo } from './interfaces/Articulo';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Navbar, SeccionPrincipal, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  articuloNuevo: Articulo;

  rol : number;

  constructor(){
    this.articuloNuevo = {
      id : 0,
      titulo : '',
      url : '',
      contenido : '',
      fecha : '00-00-0000',
    };

    this.rol = 2;
  }

  handleLanzarArticulo($event: any) {
    this.articuloNuevo = $event;
    console.log('mensaje recibido del hijo');
  }

  administrarRol($event : any){
    this.rol = $event;
  }

  protected readonly title = signal('blogSimple');


}
