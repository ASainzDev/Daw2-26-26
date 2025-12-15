import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PeticionInterface } from '../interfaces/peticion-interface';
import { lastValueFrom} from 'rxjs';
import { ClientesInterface } from '../interfaces/clientes-interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  httpRequest = inject(HttpClient);

  clientes: ClientesInterface[];

  

  constructor(){
    this.clientes = [];
  }

  getPeticion() : Promise<PeticionInterface>{
    return lastValueFrom(this.httpRequest.get<PeticionInterface>('https://peticiones.online/api/users'));
  }

  async getClientes() : Promise<ClientesInterface[]>{
    await this.getPeticion().then((data: PeticionInterface) => {
      this.clientes = data.results;
    });
    return this.clientes;
  }

  getClienteById(_id : string) : Promise<ClientesInterface>{
    return lastValueFrom(this.httpRequest.get<ClientesInterface>('https://peticiones.online/api/users' + '/' + _id));
  }
}
