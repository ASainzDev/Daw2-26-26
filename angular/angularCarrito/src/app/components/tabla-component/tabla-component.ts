import { Component, inject } from '@angular/core';
import { SCarritoService } from '../../services/s-carrito.service';
import { IProduct } from '../../interfaces/iproduct.interface';
import { RowProduct } from '../row-product/row-product';

@Component({
  selector: 'app-tabla-component',
  imports: [RowProduct],
  templateUrl: './tabla-component.html',
  styleUrl: './tabla-component.css',
})
export class TablaComponent {


  servicioProd = inject(SCarritoService);

  producto : IProduct;

  arrayProductos : IProduct [];

  

  constructor(){

    this.producto = {
      sku : '',
      title : '',
      price : ''
    }

    this.arrayProductos = []

    
  }

  ngOnInit() : void {
    this.arrayProductos = this.servicioProd.getListadoProductos();
  }

  
}
