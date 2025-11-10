import { Component, Input } from '@angular/core';
import { Articulo } from '../model/articulosInterface';

@Component({
  selector: 'app-left-section',
  imports: [],
  templateUrl: './left-section.html',
  styleUrl: './left-section.scss',
})
export class LeftSection {

  @Input() articuloSeleccionado : Articulo;

  constructor(){
    this.articuloSeleccionado = {
      id : 0,
      fechaPublicacion : 0,
      titulo : '',
      url : '',
      contenido : ''
    }
  }

  

  obtenerFecha(number : number){
    return new Date(this.articuloSeleccionado.fechaPublicacion).toLocaleDateString('es-ES');
  }
}
