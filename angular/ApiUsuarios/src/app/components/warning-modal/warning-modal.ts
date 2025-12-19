import { Component, inject } from '@angular/core';
import { WarningModalService } from '../../services/warning-modal-service';
import { ClientesService } from '../../services/clientes-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-warning-modal',
  imports: [],
  templateUrl: './warning-modal.html',
  styleUrl: './warning-modal.css',
})
export class WarningModal {



  servicioModal = inject(WarningModalService);

  servicio = inject(ClientesService);

  cerrarModal() {
    this.servicioModal.setDisplayHidden();
  }

  aniquilarUsuario() {
    this.servicio.eliminarDatosUsuario(this.servicioModal._id());
    this.cerrarModal();
  }

}
