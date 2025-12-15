import { Component, inject } from '@angular/core';
import { ClientesService } from '../../services/clientes-service';
import { ClientesInterface } from '../../interfaces/clientes-interface';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  servicio = inject(ClientesService)

  clientes : ClientesInterface[];

  constructor(){
    this.clientes = []
  }

  async ngOnInit(){
    this.clientes = await this.servicio.getClientes();
    console.log(this.clientes);
  }
}
