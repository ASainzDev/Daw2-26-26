import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class SCarritoService {
  
  // Para hacer unas pruebas definimos el array y la currency tas y como lo teniamos en JS. Luego una vez lo tenga conectado al back simplemente lo comentamos y lo dejamos por aquí

  // Defino una propiedad de tipo producto
  producto : IProduct;

  // Definimos un array de productos, lo inicializo despues
  arrayProductos : IProduct[];

  currency : string;

  constructor(){

    this.producto = {
      sku:'',
      title:'',
      price:''
    }

    this.arrayProductos = [
      {
        sku : 'a',
        title : '1producto',
        price : '500,00'
      },
      {
        sku: 'a',
        title: '1producto',
        price: '500,00'
      },
    ]

    this.currency = '€';
  }

  getListadoProductos () : IProduct[]{
    return this.arrayProductos;
  }
}
