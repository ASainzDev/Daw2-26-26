import { Component, inject } from '@angular/core';
import { SCarritoService } from '../../services/s-carrito.service';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-tabla-component',
  imports: [],
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
