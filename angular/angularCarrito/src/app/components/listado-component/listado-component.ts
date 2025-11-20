import { Component, inject } from '@angular/core';
import { SCarritoService } from '../../services/s-carrito.service';
import { IProduct } from '../../interfaces/iproduct.interface';
import { MiniaturaComponent } from '../miniatura-component/miniatura-component';

@Component({
  selector: 'app-listado-component',
  imports: [MiniaturaComponent],
  templateUrl: './listado-component.html',
  styleUrl: './listado-component.css',
})
export class ListadoComponent {


  producto : IProduct;

  arrayProductos : IProduct [];

  
  servicioProd = inject(SCarritoService);

  

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
