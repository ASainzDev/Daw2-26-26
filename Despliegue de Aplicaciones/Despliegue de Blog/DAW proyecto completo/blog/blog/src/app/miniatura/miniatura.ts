import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo } from '../../model/articulosInterface';

@Component({
  selector: 'app-miniatura',
  imports: [],
  templateUrl: './miniatura.html',
  styleUrl: './miniatura.scss',
})
export class Miniatura {


  @Input() articulo : Articulo;
  @Output() articuloSeleccionado = new EventEmitter<Articulo>();



  constructor(){
    this.articulo = {
        id : 0,
        fechaPublicacion : 0,
        titulo : '',
        url : '',
        contenido : ''
      }
  }

  ngOnInit(): void {
    
    if(this.articulo == null){
      this.articulo = {
        id : 0,
        fechaPublicacion : 0,
        titulo : '',
        url : '',
        contenido : ''
      }
    }
    
  }

  obtenerFecha(){
    return new Date(this.articulo.fechaPublicacion).toLocaleDateString('es-ES');
  }

  leerMas() {
    this.articuloSeleccionado.emit(this.articulo);
  }
}
