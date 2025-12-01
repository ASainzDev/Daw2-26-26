import { Component, inject } from '@angular/core';
import { Articulo } from '../../interfaces/articulo.type=interface';
import { ArticulosService } from '../../services/articulos-service';
import { MiniaturaComponent } from "../../components/miniatura-component/miniatura-component";

@Component({
  selector: 'app-home-page',
  imports: [MiniaturaComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  articulo! : Articulo;

  listadoArticulos : Articulo[];

  servicioArticulos = inject(ArticulosService);


  constructor(){
    this.listadoArticulos = [];
  }

  ngOnInit(): void {
    
    this.listadoArticulos = this.servicioArticulos.getListadoArtículos();
  }
}
