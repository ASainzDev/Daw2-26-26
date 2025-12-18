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

  clienteOrden : number;

  constructor(){
    this.clientes = [];
    this.clienteOrden = 0;
  }

  getPeticion() : Promise<PeticionInterface>{
    return lastValueFrom(this.httpRequest.get<PeticionInterface>('https://peticiones.online/api/users'));
  }

  async getClientes() : Promise<ClientesInterface[]>{
    await this.getPeticion().then((data: PeticionInterface) => {
      this.clientes = data.results;
      this.clienteOrden = data.total;
    });
    return this.clientes;
  }

  getClienteById(_id : string) : Promise<ClientesInterface>{
    return lastValueFrom(this.httpRequest.get<ClientesInterface>('https://peticiones.online/api/users' + '/' + _id));
  }

  actualizarDatosUsuario(usuario: ClientesInterface) {
    return lastValueFrom(this.httpRequest.put<ClientesInterface>('https://peticiones.online/api/users' + '/' + usuario._id, usuario));
  }
  guardarDatosUsuario(usuario: ClientesInterface) : Promise<any> {
    
    return lastValueFrom(this.httpRequest.post<ClientesInterface>('https://peticiones.online/api/users', usuario));
    
  }

  eliminarDatosUsuario(_id : string){
    return lastValueFrom(this.httpRequest.delete<ClientesInterface>('https://peticiones.online/api/users' + '/' + _id));
  }

  getNumeroClientes():number{
    return this.clienteOrden;
  }

}
