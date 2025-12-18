import { Component, inject, Input } from '@angular/core';
import { ClientesInterface } from '../../interfaces/clientes-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-client-component',
  imports: [],
  templateUrl: './card-client-component.html',
  styleUrl: './card-client-component.css',
})
export class CardClientComponent {

  @Input() cliente! : ClientesInterface;

  ruta = inject(Router)

  constructor(){
    
  }

  detailedView(_id: string) {
    this.ruta.navigate(['vista', _id]);
  }

  editUserData(_id: string) {
    console.log('[CardClient] editUserData called with id:', _id);
    this.ruta.navigate(['form', _id]);
  }
}
