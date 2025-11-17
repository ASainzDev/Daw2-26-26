import { Articulo } from './../../interfaces/Articulo';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog-service';
import { FormularioComponent } from "../formulario-component/formulario-component";


@Component({
  selector: 'app-seccion-principal',
  imports: [FormsModule, CommonModule, FormularioComponent],
  templateUrl: './seccion-principal.html',
  styleUrl: './seccion-principal.css',
})
export class SeccionPrincipal implements OnInit {


  //Inyecto el servicio del blog para poder acceder a sus propiedades y métodos
  blogServicio = inject(BlogService);

  //Declaro  y defino el array aqui, aunque no sea canónico hacerlo así.
  listaArticulos: Articulo[] = [];

  // Declaro una instancia de Articulo para usarla, aunque indico que su valor ya será definido más adelante.
  articulo! : Articulo;

  articuloSeleccionado: Articulo;

  // selectedUser : string;

  get selectedUser() : string{
    return this.blogServicio.getSelectedUser();
  }

  constructor(){
    // this.selectedUser = '';

    this.articuloSeleccionado = {
      id: 0,
      titulo: '',
      url: '',
      contenido: '',
      fecha: ''
    }
  }

  ngOnInit():void{
    this.listaArticulos = this.blogServicio.getArticlesCollection();
    console.log('Artículos en seccion-principal:', this.listaArticulos);

    // this.selectedUser = this.blogServicio.selectedUser;
  }

  handleLeerMas( articulo: Articulo) {
    this.blogServicio.setArticuloSeleccionado(articulo);
    this.articuloSeleccionado = this.blogServicio.getArticuloSeleccionado();
  }
}
