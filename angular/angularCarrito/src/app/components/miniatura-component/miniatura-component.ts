import { Component, inject, Input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { SCarritoService } from '../../services/s-carrito.service';

@Component({
  selector: 'app-miniatura-component',
  imports: [],
  templateUrl: './miniatura-component.html',
  styleUrl: './miniatura-component.css',
})
export class MiniaturaComponent {


  sCarrito = inject(SCarritoService);

  @Input()  producto: IProduct;

  quantity! : number;

  currency! : string;

  constructor() {
    this.producto = {
      sku : '',
      title : '',
      price : ''
    }

  }

  ngOnInit() : void {
    this.currency = this.sCarrito.getCurrency();

    this.quantity = this.sCarrito.getInitialQuantity();
  }

incrementarCantidad() {
  this.quantity++;
  let productoComprado = {
    sku: this.producto.sku,
    title: this.producto.title,
    price: Number(this.producto.price),
    quantity: this.quantity
  };

  this.sCarrito.addProductCart(productoComprado);

}
reducirCantidad() {
  if(this.quantity > 0){
    this.quantity--;
  }

  let productoComprado = {
    sku: this.producto.sku,
    title: this.producto.title,
    price: Number(this.producto.price),
    quantity: this.quantity
  };
  this.sCarrito.removeProductCart(productoComprado);
}

}
