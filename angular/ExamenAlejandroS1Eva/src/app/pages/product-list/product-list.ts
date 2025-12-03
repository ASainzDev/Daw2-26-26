import { Component, inject } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductService } from '../../services/product-service';
import { ProductCard } from "../../components/product-card/product-card";
import { FormularioFiltros } from "../../components/formulario-filtros/formulario-filtros";

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, FormularioFiltros],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  producto : Products;

  listadoProductos : Products[];

  servicioProductos = inject(ProductService);



  constructor(){

    //Inicializo lo que necesite por ahora
    this.listadoProductos = [];

    this.producto = {
      "id": '',
      "name": '',
      "description": '',
      "price": 0,
      "category": '',
      "image": '',
      "active": false,
    }

  }

  ngOnInit(): void {

      //Lo primero que tengo que hacer es hidratar mi coleccion
      this.listadoProductos = this.servicioProductos.obtenerListadoProductos();
    
    
  }
}
