import { Component, inject, Input } from '@angular/core';
import { Articulo } from '../../interfaces/articulo.type=interface';
import { Router} from "@angular/router";
import { ArticulosService } from '../../services/articulos-service';

@Component({
  selector: 'app-miniatura-component',
  imports: [],
  templateUrl: './miniatura-component.html',
  styleUrl: './miniatura-component.css',
})
export class MiniaturaComponent {


  @Input() articulo! : Articulo;

  router = inject(Router);

  servicioArticulo = inject(ArticulosService);

  verCompleto(path: string, uuid : string) {
    this.router.navigate(['vista', uuid]);
  }

  eliminarArticulo(articulo : Articulo) {
    this.servicioArticulo.eliminarArticulo(articulo);
  }

  pasarDatosFormulario(uuid : string) {
    this.router.navigate(['formulario', uuid]);
  }
}
