import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filtro } from '../../interfaces/filtro';
import { ProductService } from '../../services/product-service';

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


  constructor(){
    // Inicializo el objeto, el precio a mil ya que va a buscar por debajo de ese, el active a false veremos. No tengo claro de que me sirva mucho. Tengo que hacer pruebas.
    this.filtro = {
      "name": '',
      "price":1000,
      "category": '',
      "active": false,
    }
  }
  onSubmit(values : any){
    console.log(values);
    
    this.filtro = values as Filtro;
    this.servicioProductos.filtrarListado(this.filtro);
  }

  // Otro intento distinto a ver si consigo que funcione
  filtrarPorNombre() {
    if(this.filtro.name !== ''){
      this.servicioProductos.filtrarPorNombre(this.filtro.name);
    }
  }
}
