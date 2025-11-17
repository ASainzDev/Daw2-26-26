import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-row-product',
  imports: [],
  templateUrl: './row-product.html',
  styleUrl: './row-product.css',
})
export class RowProduct {


  // Declaro un imput para recibir un artículo
  @Input() producto! : IProduct;

  // Defino una variable para marcar la cantidad inicial
  cantidadInicial: number;

  constructor(){
    this.cantidadInicial = 0;
  }



  addProductToCarrito() {
    this.cantidadInicial++;
  }
}
