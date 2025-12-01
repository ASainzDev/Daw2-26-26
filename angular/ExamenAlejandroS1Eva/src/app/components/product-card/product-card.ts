import { Component, inject, Input } from '@angular/core';
import { Products } from '../../interfaces/products';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {


  // Defino una variable de tipo producto
  @Input() producto! : Products;

  // Injecto dependencias que creo que voy o que prodría necesitar.
  ruta = inject(Router);

  servicioProducto = inject(ProductService);

  verCompleto(id: string) {
    this.ruta.navigate(['vista', id]);
  }

  // Con este método elimino productos de la lista. Podría mandar sólo la id, pero en un ejemplo lo tenía así.
  eliminarProducto(producto : Products) {
    this.servicioProducto.eliminarProducto(producto);
  }

  // Con este método voy a cargar los datos de un producto en el formulario para editarlo.
  pasarDatosFormulario(id : string) {
    this.ruta.navigate(['formulario', id]);
  }

}
