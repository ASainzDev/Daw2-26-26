import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Articulo } from '../../interfaces/articulo.type=interface';
import { ArticulosService } from '../../services/articulos-service';

@Component({
  selector: 'app-vista-articulo-page',
  imports: [RouterLink],
  templateUrl: './vista-articulo-page.html',
  styleUrl: './vista-articulo-page.css',
})
export class VistaArticuloPage {

  route = inject(Router);
  activeRoute = inject(ActivatedRoute);

  servicioArticulos = inject(ArticulosService);

  articulo! : Articulo;

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      let uuid = params['uuid'];
      let a : any;
      a = this.servicioArticulos.getArticulo(uuid);
      if(a.uuid === uuid){
        this.articulo = a;
        console.log(this.articulo);
      }
    })
    
  }

}
