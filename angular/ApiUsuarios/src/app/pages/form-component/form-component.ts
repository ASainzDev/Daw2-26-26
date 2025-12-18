import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ClientesService } from '../../services/clientes-service';
import { ClientesInterface } from '../../interfaces/clientes-interface';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {

  
  clientesForm: FormGroup;

  rutaActiva = inject(ActivatedRoute)

  servicio = inject(ClientesService);

  cliente! : ClientesInterface;

  nuevoUsuario : boolean;


  constructor(){
    this.clientesForm = new FormGroup({
      _id: new FormControl(''),
      id: new FormControl(''),
      first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      image: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });

    this.nuevoUsuario = true;
  }

  ngOnInit(){
    this.rutaActiva.params.subscribe(async params=>{
      const id = params['_id'];

      if(id){
        try{
          this.cliente = await this.servicio.getClienteById(id);
          console.log('[FormComponent] cliente recibido:', this.cliente);

          if(this.cliente){
            this.clientesForm.patchValue({
              _id: this.cliente._id,
              id: this.cliente.id,
              first_name: this.cliente.first_name,
              last_name: this.cliente.last_name,
              username: this.cliente.username,
              email: this.cliente.email,
              image: this.cliente.image,
              password: this.cliente.password,
              confirmPassword: this.cliente.password,
            });
            this.nuevoUsuario = false;
          }else{
            console.warn('[FormComponent] No se encontró cliente con id:', id);
          }
        }catch(err){
          console.error('[FormComponent] Error cargando cliente por id:', id, err);
        }
      }
    });

    
  }

  onSubmit() {
    
    let usuario = this.clientesForm.value as ClientesInterface;

    if(this.nuevoUsuario){
      usuario._id = crypto.randomUUID();
      usuario.id = this.servicio.getNumeroClientes();
      usuario.id++;
      this.servicio.guardarDatosUsuario(usuario);
      this.clientesForm.reset();

    }else{
      this.servicio.actualizarDatosUsuario(usuario);
      this.clientesForm.reset();
      this.nuevoUsuario = true;
    }
  }
}
