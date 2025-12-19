import { Component, inject } from '@angular/core';
import { ClientesService } from '../../services/clientes-service';
import { ClientesInterface } from '../../interfaces/clientes-interface';
import { CardClientComponent } from "../../components/card-client-component/card-client-component";
import { WarningModal } from "../../components/warning-modal/warning-modal";
import { WarningModalService } from '../../services/warning-modal-service';

@Component({
  selector: 'app-main-page',
  imports: [CardClientComponent, WarningModal],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {


  servicio = inject(ClientesService)

  modalService = inject(WarningModalService);

  clientes : ClientesInterface[];

  cliente! : ClientesInterface;

  

  constructor(){
    this.clientes = [];

  }

  async ngOnInit(){
    this.clientes = await this.servicio.getClientes();
    console.log(this.clientes);
  }

  async paginaPosterior() {
    
    this.servicio.increasePagina();

    this.clientes = await this.servicio.getClientes();

  }

  async paginaAnterior() {
    
    if(this.servicio.getPaginaActual() > 1){
      this.servicio.decreasePagina();

      this.clientes = await this.servicio.getClientes();
    }

  }

}
