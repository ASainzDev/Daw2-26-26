import { SCarritoService } from './../../services/s-carrito.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-carrito-component',
  imports: [],
  templateUrl: './carrito-component.html',
  styleUrl: './carrito-component.css',
})
export class CarritoComponent {


  carritoCompra : any[];

  sCarrito = inject (SCarritoService);

  producto : any;

  currency : string;

  precioTotal : string;

  

  constructor(){
    this.carritoCompra = [];

    this.producto = {
      sku : '',
      title : '',
      price : '',
      quantity : 0
    }

    this.currency = '';

    this.precioTotal = '';
  }

  ngOnInit() : void{

    this.carritoCompra = this.sCarrito.getCarritoProducts();

    this.currency = this.sCarrito.getCurrency();

    // Cuando lo traigo aquí desde el servicio no se actualiza por alguna razón, sin embargo con la llamada directa desde el html a la función del servicio si.
    this.precioTotal = this.sCarrito.getPrecioTotal();

  }

  deleteCart() {
    this.sCarrito.eliminarCompra();
  }


}
