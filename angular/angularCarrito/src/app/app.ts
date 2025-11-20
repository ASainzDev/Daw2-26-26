import { Component, inject, signal } from '@angular/core';
import { ListadoComponent } from "./components/listado-component/listado-component";
import { SCarritoService } from './services/s-carrito.service';
import { CarritoComponent } from './components/carrito-component/carrito-component';

@Component({
  selector: 'app-root',
  imports: [ListadoComponent, CarritoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularCarrito');


  carritoProductos : any[];

  
  servicioProd = inject(SCarritoService);

  producto : any;

  constructor() {
    this.carritoProductos = [];

    this.producto = {
      sku : '',
      title : '',
      price : '',
      quantity : ''
    };
  }

  ngOnInit(): void {
    this.carritoProductos = this.servicioProd.getCarritoProducts();
  }


}
