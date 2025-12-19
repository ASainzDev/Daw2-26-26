import { Component, inject, Input } from '@angular/core';
import { ClientesInterface } from '../../interfaces/clientes-interface';
import { Router } from '@angular/router';
import { WarningModalService } from '../../services/warning-modal-service';

@Component({
  selector: 'app-card-client-component',
  imports: [],
  templateUrl: './card-client-component.html',
  styleUrl: './card-client-component.css',
})
export class CardClientComponent {


  @Input() cliente! : ClientesInterface;

  ruta = inject(Router);

  modalService = inject(WarningModalService);

  constructor(){
    
  }

  detailedView(_id: string) {
    this.ruta.navigate(['vista', _id]);
  }

  editUserData(_id: string) {
    this.ruta.navigate(['form', _id]);
  }

  eliminarUsuario(cliente: ClientesInterface) {
    this.modalService.setDisplayFlex();
    this.modalService.setId(cliente._id);
    this.modalService.setImage(cliente.image);
    this.modalService.setUsuario(cliente.username);
  }
}
