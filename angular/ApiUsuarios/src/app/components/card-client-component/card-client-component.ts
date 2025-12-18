import { Component, inject, Input } from '@angular/core';
import { ClientesInterface } from '../../interfaces/clientes-interface';
import { Router } from '@angular/router';
import { WarningModalService } from '../../services/warning-modal-service';
import { WarningModal } from "../warning-modal/warning-modal";


@Component({
  selector: 'app-card-client-component',
  imports: [],
  templateUrl: './card-client-component.html',
  styleUrl: './card-client-component.css',
})
export class CardClientComponent {


  @Input() cliente! : ClientesInterface;

  ruta = inject(Router);

  servicioModal = inject(WarningModalService);

  

  constructor(){
    
  }

  detailedView(_id: string) {
    this.ruta.navigate(['vista', _id]);
  }

  editUserData(_id: string) {
    console.log('[CardClient] editUserData called with id:', _id);
    this.ruta.navigate(['form', _id]);
  }

  eliminarUsuario(cliente : ClientesInterface){
    this.servicioModal.setId(cliente._id);
    this.servicioModal.setImage(cliente.image);
    this.servicioModal.setUsuario(cliente.username);
    this.servicioModal.setDisplayFlex();
  }
}
