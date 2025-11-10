import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Articulo } from '../../../model/articulosInterface';


@Component({
  selector: 'app-upload-form',
  imports: [ReactiveFormsModule],
  templateUrl: './upload-form.html',
  styleUrl: './upload-form.scss',
})
export class UploadForm{

  formulario: FormGroup;

  constructor(){

    this.formulario = new FormGroup({

      titulo : new FormControl('', [Validators.required, Validators.minLength(10)]),
      url : new FormControl('', [Validators.required, Validators.minLength(10)]),
      contenido : new FormControl('', [Validators.required, Validators.minLength(10)]),
    })


  }


  async submitForm() {
      if(this.formulario.valid){

        const nuevoArticulo : Articulo = {
          id: 0,
          fechaPublicacion: Date.now(),
          titulo: this.formulario.value.titulo,
          url: this.formulario.value.url,
          contenido: this.formulario.value.contenido
        }

        //articulos.push(nuevoArticulo);
        //console.log(nuevoArticulo);
        await fetch('http://localhost:8080/api/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(nuevoArticulo)
        })
      }
  }
}
