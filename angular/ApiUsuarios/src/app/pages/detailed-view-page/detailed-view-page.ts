import { Component, inject } from '@angular/core';
import { ClientesInterface } from '../../interfaces/clientes-interface';
import { ClientesService } from '../../services/clientes-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailed-view-page',
  imports: [],
  templateUrl: './detailed-view-page.html',
  styleUrl: './detailed-view-page.css',
})
export class DetailedViewPage {


  cliente : ClientesInterface;

  servicio = inject(ClientesService);

  activeRoute = inject(ActivatedRoute);

  ruta = inject(Router)

  constructor(){
    this.cliente = {
      "_id": "",
      "id": 0,
      "first_name": "",
      "last_name": "",
      "username": "",
      "email": "",
      "image": "",
      "password": ""
    }
  }

  async ngOnInit() {
    this.activeRoute.params.subscribe(async params=>{
      const id = params['_id'];
      if(id){
        this.cliente = await this.servicio.getClienteById(id);
        console.log(this.cliente);
      }
      
    });
  }

  // La tenía hecha porque a veces el routerLink no me funcionaba, pero en esta caso va bien.
  volver() {
    this.ruta.navigate(['/home']);
  }

  editUserData(_id: string) {
    console.log('[CardClient] editUserData called with id:', _id);
    this.ruta.navigate(['form', _id]);
  }
  
}
