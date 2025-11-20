import { Component, inject, signal } from '@angular/core';
import { ListadoComponent } from "./components/listado-component/listado-component";
import { SCarritoService } from './services/s-carrito.service';
import { CarritoComponent } from './components/carrito-component/carrito-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ListadoComponent, CarritoComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('angularCarrito');


  carritoProductos : any[];

  
  servicioProd = inject(SCarritoService);

  producto : any;

  range! : number;

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

  filtrarPorPrecio(rango : any) {
    this.servicioProd.filtrarListaPrecio(rango);
  }

}
