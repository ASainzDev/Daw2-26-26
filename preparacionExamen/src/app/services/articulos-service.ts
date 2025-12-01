import { Injectable } from '@angular/core';
import { Articulo } from '../interfaces/articulo.type=interface';
import { ARTICULOS } from '../../data/articulos-data';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
    
  
  private listadoArticulos : Articulo[];


  constructor(){
    this.listadoArticulos = ARTICULOS;
  }


  getListadoArtículos() : Articulo[]{
    return this.listadoArticulos;
  }

  guardarArtículo(articulo: Articulo) {

    let index = this.listadoArticulos.findIndex((articuloBusc) => articuloBusc.uuid === articulo.uuid);

    if(index !== -1){
      this.listadoArticulos[index] = articulo;
    }else{
      this.listadoArticulos.push(articulo);
    }
    
  }

  getArticulo(uuid: string): Articulo | undefined{
    return this.listadoArticulos.find(articulo => articulo.uuid === uuid);
  }

  eliminarArticulo(articulo: Articulo) {
    let index = this.listadoArticulos.findIndex((articuloBuscado) => articuloBuscado.uuid === articulo.uuid);

    if(index != -1){
      this.listadoArticulos.splice(index, 1);
    }
  }
}
