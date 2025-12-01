import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service';
import { Products } from '../../interfaces/products';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  

  // Vamos definiendo lo que creo que voy a necesitar

  // Variable del tipo FormGroup.
  productForm: FormGroup;

  // Inyeccion del servicio de productos
  productService = inject(ProductService);

  // variable de tipo Products
  producto! : Products;

  // Creo que estas dos las voy a necesitar. Inyección de router y ActivatedRoute
  router = inject(Router);

  rutaActiva = inject(ActivatedRoute);

  // Esto lo hago porque me parece que queda bien así para tener mínima comunicación con el ususario
  private textPristine: string;

  private textUnvalid: string;

  private textValid: string;

  constructor() {
    // Una vez hemos declarado el formgroup, lo definimos en el constructor.
    // Primero define solo los elemento, luego ya te encargas de los validadores y los estilos
    this.productForm = new FormGroup({
      // Aunque no se vea tengo que poner la id porque si no no va
      id: new FormControl('nuevo'),
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
      price: new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000)]),
      category: new FormControl('', [Validators.required]),
      // Para preparar el examen había buscado un regex para url sencillo y tengo este
      image: new FormControl('', [Validators.required, Validators.pattern(/^(https?:\/\/)?\S+\.\S+$/)]),
      active: new FormControl(''),
    }, []);

    //Defino los strings de validación. Los pongo más que nada por valor estético y por si los piden

    this.textPristine = 'Campo requerido. Inserte los datos';

    this.textUnvalid = 'Formato o datos erróneos. Inserte de nuevo';

    this.textValid = 'Correcto';

  }

  ngOnInit() {
    this.rutaActiva.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        let productoBuscado = this.productService.getArticulo(id);

        if (productoBuscado != undefined) {
          this.producto = productoBuscado;

          this.productForm = new FormGroup({
            id : new FormControl(this.producto.id),
            name : new FormControl(this.producto.name, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
            description : new FormControl(this.producto.description, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]),
            price : new FormControl(this.producto.price, [Validators.required, Validators.min(0), Validators.max(1000)]),
            category: new FormControl(this.producto.category, [Validators.required]),
            // Mismo patrón de url que antes
            image: new FormControl(this.producto.image, [Validators.required, Validators.pattern(/^(https?:\/\/)?\S+\.\S+$/)]),
            active: new FormControl(this.producto.active),
          }, []);

          //Este fin de semana como no se actualizaba bien el botón de guardar para cambiar busqué este método.
          // Y todo para que el fallo fuese que el maxLength de algunos campos fuese muy bajo y al cargar datos
          // venían datos con longitud mayor.
          this.productForm.updateValueAndValidity();
        }
      }
    })
  }

  obtenerPristine(): string {
    return this.textPristine;
  }


  obtenerUnvalid(): string {
    return this.textUnvalid;
  }


  obtenerValid(): string {
    return this.textValid;
  }

  guardarForm(): void {

    let producto = this.productForm.value as Products;
    if ( producto.id === 'nuevo') {
      producto.id = crypto.randomUUID();
    }
    console.log(producto);
    this.productService.guardarArtículo(producto);
    this.productForm.reset;
  }


}
