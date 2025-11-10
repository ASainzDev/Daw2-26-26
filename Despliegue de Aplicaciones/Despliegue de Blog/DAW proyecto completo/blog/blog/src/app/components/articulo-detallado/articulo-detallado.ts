import { Component, Input } from '@angular/core';
import { Articulo } from '../../../model/articulosInterface';

@Component({
  selector: 'app-articulo-detallado',
  imports: [],
  templateUrl: './articulo-detallado.html',
  styleUrl: './articulo-detallado.scss',
})
export class ArticuloDetallado {

  @Input() articuloActual : Articulo;

  constructor(){
    this.articuloActual = {
        id : 0,
        fechaPublicacion : 0,
        titulo : '',
        url : '',
        contenido : ''
    }
  }

  ngOnInit(): void {
    
    if(!this.articuloActual){
      this.articuloActual = {
        id : 0,
        fechaPublicacion : 0,
        titulo : '',
        url : '',
        contenido : ''
      }
    }
    
  }

  obtenerFecha() : string{
    if(this.articuloActual.fechaPublicacion > 0 ){
      return new Date(this.articuloActual.fechaPublicacion).toLocaleDateString('es-ES');  
    }else{
      return '';
    }
    
  }
}
