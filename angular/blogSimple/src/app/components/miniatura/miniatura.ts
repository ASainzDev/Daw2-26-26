import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo } from '../../interfaces/Articulo';
import { BlogService } from '../../services/blog-service';

@Component({
  selector: 'app-miniatura',
  imports: [],
  templateUrl: './miniatura.html',
  styleUrl: './miniatura.css',
})
export class Miniatura {



@Output() lanzarArticulo = new EventEmitter();


constructor(private data : BlogService){
  
}

  leerMas(articulo : Articulo) {

    this.lanzarArticulo.emit(articulo);
    console.log('articulo lanzado al padre', articulo);
  }
}
