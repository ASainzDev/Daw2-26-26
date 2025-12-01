import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticulosService } from '../../services/articulos-service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { Articulo } from '../../interfaces/articulo.type=interface';

@Component({
  selector: 'app-formulario-subida-component',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './formulario-subida-component.html',
  styleUrl: './formulario-subida-component.css',
})
export class FormularioSubidaComponent {


  articuloForm: FormGroup;

  articulosService = inject(ArticulosService);

  articulo! : Articulo;

  router = inject(Router);

  rutaActiva = inject(ActivatedRoute);

  private textPristine : string;

  private textUnvalid : string;

  private textValid : string;

  constructor(){
    // Una vez hemos declarado el formgroup, lo definimos en el constructor.
    // Primero define solo los elemento, luego ya te encargas de los validadores y los estilos
    this.articuloForm = new FormGroup({
      uuid : new FormControl('nuevo'),
      titulo : new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      subtitulo : new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      autor : new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      fecha : new FormControl('',[Validators.required]),
      parrafo1 : new FormControl('',[Validators.required]),
      parrafo2 : new FormControl('',[]),
      parrafo3 : new FormControl('',[]),
      urlImagen : new FormControl('',[Validators.required, Validators.pattern(/^(https?:\/\/)?\S+\.\S+$/)]),
    },[]);

    //Defino los strings de validación. Los pongo más que nada por valor estético y por si los piden

    this.textPristine = 'Campo requerido. Inserte los datos';

    this.textUnvalid = 'Formato o datos erróneos. Inserte de nuevo';

    this.textValid = 'Correcto';

  }

  ngOnInit(){
    this.rutaActiva.params.subscribe(params =>{
      const uuid = params['uuid'];

      if(uuid){
        let articuloBuscado = this.articulosService.getArticulo(uuid);

        if(articuloBuscado != undefined){
          this.articulo = articuloBuscado;

          this.articuloForm = new FormGroup({
            uuid : new FormControl(this.articulo.uuid),
            titulo : new FormControl(this.articulo.titulo,[Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
            subtitulo : new FormControl(this.articulo.subtitulo,[Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
            autor : new FormControl(this.articulo.autor,[Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
            fecha : new FormControl(this.articulo.fecha,[Validators.required]),
            parrafo1 : new FormControl(this.articulo.parrafo1,[Validators.required]),
            parrafo2 : new FormControl(this.articulo.parrafo2,[]),
            parrafo3 : new FormControl(this.articulo.parrafo3,[]),
            urlImagen : new FormControl(this.articulo.urlImagen,[Validators.required, Validators.pattern(/^(https?:\/\/)?\S+\.\S+$/)]),
          },[]);

          //Este fin de semana como no se actualizaba bien el botón de guardar para cambiar busqué este método.
          // Y todo para que el fallo fuese que el maxLength de algunos campos fuese muy bajo y al cargar datos
          // venían datos con longitud mayor.
          this.articuloForm.updateValueAndValidity();
        }
      }
    })
  }

  obtenerPristine () : string {
    return this.textPristine;
  }


  obtenerUnvalid () : string {
    return this.textUnvalid;
  }


  obtenerValid () : string {
    return this.textValid;
  }

  guardarForm() : void {

      let articulo = this.articuloForm.value as Articulo;
      if(articulo.uuid === 'nuevo'){
        articulo.uuid = crypto.randomUUID();
      }
      console.log(articulo);
      this.articulosService.guardarArtículo(articulo);
      this.articuloForm.reset;
  }

}
