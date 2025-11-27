import { Component, inject } from '@angular/core';
import { Articulo } from '../../interfaces/Articulo';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog-service';

@Component({
  selector: 'app-formulario-component',
  imports: [FormsModule],
  templateUrl: './formulario-component.html',
  styleUrl: './formulario-component.css',
})
export class FormularioComponent {

  articulo : Articulo;

  formularioValido: boolean;

  servicio = inject(BlogService);

  constructor(){
    this.formularioValido = false;
    this.articulo = {
      id: 0,
      titulo: '',
      url: '',
      contenido: '',
      fecha: ''
    }
  }

  onInputChange() {
    this.formularioValido = this.articulo.titulo !== '' &&
                            this.articulo.url !== '' &&
                            this.articulo.contenido !== '' &&
                            this.articulo.fecha !== '';
  }

  guardarElemento() {
    this.onInputChange();

    if (this.formularioValido) {
      this.articulo.id = this.servicio.getActualId();
      this.servicio.addArticleCollection(this.articulo);
      alert('Artículo guardado correctamente.');

      // Reiniciar el formulario
      this.articulo = {
        id: 0,
        titulo: '',
        url: '',
        contenido: '',
        fecha: ''
      };
      this.formularioValido = false;
    }else{
      alert('Ha ocurrido un error. Revise los datos del formulario.');
    }

  }
}





