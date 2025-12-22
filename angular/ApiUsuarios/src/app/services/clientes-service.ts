import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { PeticionInterface } from '../interfaces/peticion-interface';
import { lastValueFrom} from 'rxjs';
import { ClientesInterface } from '../interfaces/clientes-interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  // inyecto httpClient
  httpRequest = inject(HttpClient);

  // propiedad del tipo ClientesInterface, es un array
  clientes: ClientesInterface[];

  // hasta que lo modifique, esto está aquí simplemente para dar un id a los clientes
  clienteOrden : number;

  // numero de página a la que se le van a hacer las peticiones
  pagina : number;

  // páginas totales disponibles
  totalPaginas : number;

  // String que es la url base de la API
  baseUrl : string;

  // Variable para el parametro de la página
  variable : string;

  //Defino un array para hacer la paginación
  paginacion : number[];

  // Constructor
  constructor(){
    this.clientes = [];
    this.clienteOrden = 0;
    this.baseUrl = 'https://peticiones.online/api/users';
    this.totalPaginas = 0;
    this.pagina = 1;
    this.variable = '?page=';
    this.paginacion = [];
  }

  // Petición getAllPaginated
  async getClientes(): Promise<ClientesInterface[]> {
  const data: PeticionInterface = await lastValueFrom(
    this.httpRequest.get<PeticionInterface>(`${this.baseUrl}${this.variable}${this.pagina}`)
  );

  this.clientes = data.results;
  this.clienteOrden = data.total;
  this.totalPaginas = data.total_pages;

  this.crearArrayPaginacion(this.totalPaginas);

  return this.clientes;
}

  //Defino un método para modificar el array de la paginación
  crearArrayPaginacion(totalPaginas : number){

    this.paginacion = [];

    for(let i = 1; i <= this.totalPaginas; i++){
      this.paginacion.push(i);
    }

  }

  // Get all by _id
  getClienteById(_id : string) : Promise<ClientesInterface>{
    return lastValueFrom(this.httpRequest.get<ClientesInterface>(`${this.baseUrl}/${_id}`));
  }

  actualizarDatosUsuario(usuario: ClientesInterface) {
    return lastValueFrom(this.httpRequest.put<ClientesInterface>(`${this.baseUrl}/${usuario._id}`, usuario));
  }
  guardarDatosUsuario(usuario: ClientesInterface) : Promise<any> {
    
    return lastValueFrom(this.httpRequest.post<ClientesInterface>(`${this.baseUrl}`, usuario));
    
  }

  eliminarDatosUsuario(_id : string){
    return lastValueFrom(this.httpRequest.delete<ClientesInterface>(`${this.baseUrl}/${_id}`));
  }

  getNumeroClientes():number{
    return this.clienteOrden;
  }

  getTotalPaginas() : number{
    return this.totalPaginas;
  }

  increasePagina(){
    this.pagina++;
  }

  decreasePagina(){
    this.pagina--;
  }

  setPagina(nuevaPagina : number){
    this.pagina = nuevaPagina;
  }

  getPaginaActual() : number{
    return this.pagina;
  }

  getPaginacion():number[]{
    return this.paginacion;
  }


}
