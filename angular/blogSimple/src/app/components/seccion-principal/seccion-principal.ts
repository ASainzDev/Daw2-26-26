import { Articulo } from './../../interfaces/Articulo';
import { Component, EventEmitter, inject, Input, Output, OnInit } from '@angular/core';
import { Miniatura } from "../miniatura/miniatura";
import { ArticuloCompleto } from "../articulo-completo/articulo-completo";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog-service';
import { FormularioComponent } from "../formulario-component/formulario-component";
import { ListaAdministradorComponent } from "../lista-administrador-component/lista-administrador-component";

@Component({
  selector: 'app-seccion-principal',
  imports: [FormsModule, CommonModule, FormularioComponent, ListaAdministradorComponent],
  templateUrl: './seccion-principal.html',
  styleUrl: './seccion-principal.css',
})
export class SeccionPrincipal implements OnInit {

  blogServicio = inject(BlogService);
  listaArticulos: Articulo[] = [];
  articulo! : Articulo;

  get selectedUser() : string{
    return this.blogServicio.getSelectedUser();
  }

  constructor(){
  }

  ngOnInit():void{
    this.listaArticulos = this.blogServicio.getArticlesCollection();
    console.log('Artículos en seccion-principal:', this.listaArticulos);
  }
}
