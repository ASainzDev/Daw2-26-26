import { Component, inject } from '@angular/core';
import { ClientesInterface } from '../../interfaces/clientes-interface';
import { ClientesService } from '../../services/clientes-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-view-page',
  imports: [],
  templateUrl: './detailed-view-page.html',
  styleUrl: './detailed-view-page.css',
})
export class DetailedViewPage {

  cliente! : ClientesInterface;

  servicio = inject(ClientesService);

  activeRoute = inject(ActivatedRoute);

  async ngOnInit() {
    this.activeRoute.params.subscribe(await params=>{
      let id = params['_id'];
      
      this.cliente = await this.servicio.getClienteById(id);
    });
  }
  
}
