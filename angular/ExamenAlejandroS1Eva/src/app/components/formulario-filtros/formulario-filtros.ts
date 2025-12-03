import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filtro } from '../../interfaces/filtro';
import { ProductService } from '../../services/product-service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-formulario-filtros',
  imports: [FormsModule],
  templateUrl: './formulario-filtros.html',
  styleUrl: './formulario-filtros.css',
})
export class FormularioFiltros {

  // Me he decidiod por una nueva interface para los filtros
  filtro : Filtro;

  servicioProductos = inject(ProductService);

  // Defino un output para un listado de productos
  @Output() mandarLista = new EventEmitter();
  
  listadoFiltrado : Products[];


  constructor(){
    // Inicializo el objeto, el precio a mil ya que va a buscar por debajo de ese, el active a false veremos. No tengo claro de que me sirva mucho. Tengo que hacer pruebas.
    this.filtro = {
      "name": '',
      "price":1000,
      "category": '',
      "active": false,
    }

    this.listadoFiltrado = [];
  }
  onSubmit(values : any){
    console.log(values);
    
    this.filtro = values as Filtro;
    this.servicioProductos.filtrarListado(this.filtro);

  }

  
}
