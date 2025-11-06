import { Articulo } from './../../interfaces/Articulo';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Miniatura } from "../miniatura/miniatura";
import { ArticuloCompleto } from "../articulo-completo/articulo-completo";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seccion-principal',
  imports: [FormsModule],
  templateUrl: './seccion-principal.html',
  styleUrl: './seccion-principal.css',
})
export class SeccionPrincipal {


listaArticulos : Articulo [] = [];

articulo : Articulo;

@Input() articuloNuevo : Articulo;

@Output() lanzarArticulo = new EventEmitter();

  constructor(){
    this.listaArticulos = [
      {
        id: 1,
        titulo: 'Artículo de Prueba',
        url: 'www.google.es',
        contenido: 'Menuda locura que me está dando esta mierda',
        fecha: '01-01-2001',
      },
      {
        id: 2,
        titulo: 'Segundo Artículo',
        url: 'www.marca.es',
        contenido: 'Esto se nos va de las manos',
        fecha: '01-01-2000',
      },
    ];

    this.articuloNuevo = {
      id: 0,
      titulo: '',
      url: '',
      contenido: '',
      fecha: '00-00-0000',
    }

    this.articulo = {
      id: 0,
      titulo: '',
      url: '',
      contenido: '',
      fecha: '00-00-0000',
    }
     
  }

  handleLanzarArticulo($event: any) {
    this.articuloNuevo = $event;
    console.log('mensaje recibido del hijo');
  }

  leerMas(articulo: Articulo) {

    this.lanzarArticulo.emit(articulo);
    console.log('articulo lanzado al padre', articulo);
  }


  guardarElemento() {
    this.articulo.id = this.listaArticulos.length + 1;
    this.listaArticulos.push(this.articulo);
    console.log(this.articulo.fecha);
  }

}
