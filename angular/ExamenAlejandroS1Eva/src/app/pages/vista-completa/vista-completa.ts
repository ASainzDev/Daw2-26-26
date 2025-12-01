import { ProductService } from './../../services/product-service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-vista-completa',
  imports: [RouterLink],
  templateUrl: './vista-completa.html',
  styleUrl: './vista-completa.css',
})
export class VistaCompleta {

  route = inject(Router);
  activeRoute = inject(ActivatedRoute);

  servicioProducto = inject(ProductService);

  product! : Products;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      let id = params['id'];
      let a: any;
      a = this.servicioProducto.getArticulo(id);
      if (a.id === id) {
        this.product = a;
        console.log(this.product);
      }
    })

  }
}
