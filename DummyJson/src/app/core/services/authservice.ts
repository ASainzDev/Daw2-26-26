import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDataRequest} from '../../interfaces/user-data-request.interface';
import {UserDataResponse} from '../../interfaces/user-data-response.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Injecto servicio Http
  private httpClient = inject(HttpClient);

  //Defino una variable UserDataResponse que va a ser privada y readonly para saber en todo momento que,
  //de haber un usuario logeado, quién es. Ahora que lo he añadido, a la vez que checkeo si hay un authToken al cargar
  //debo de actualizar este campo al cargar de existir información.
  private usuarioLogeado?: UserDataResponse;

  //Declaro variable para la url base, le daré valor en el constructor
  private readonly baseUrl: string = 'https://dummyjson.com/auth/';

  //Declaro un signal para actualizar la vista segun su valor
  isAuthenticated = signal(false);

  constructor(){
    this.isAuthenticated.set(this.checkAuthenticated());

    this.usuarioLogeado = this.getUserAuthInfo();
  }

  //Metodo para checkear si se esta autenticado y para evitar llamar a local storage en muchas otras funciones
  private checkAuthenticated() : boolean{
    return !!localStorage.getItem('authToken');
  }

  //Metodo que nos da la autenticación de un usuario de existir al cargar la app
  private getUserAuthInfo() : UserDataResponse | undefined{
    if(this.isAuthenticated()){
      return {
        username: localStorage.getItem('username') ?? '',
        accessToken: localStorage.getItem('authToken') ?? '',
        refreshToken: localStorage.getItem('refreshToken') ?? ''
      };
    }
    return undefined;
  }

  //Metodo que devuelve el usuarioLogeado de ser necesario, aunque por ahora no lo creo
  getUsuarioLogeado() : UserDataResponse | undefined{
    return this.usuarioLogeado;
  }

  //Metodo que modifica los datos del usuario logeado
  setUsuarioLogeado(userData : UserDataResponse){
    this.usuarioLogeado = userData;
  }

  //Metodo para el login. De nuevo, si controlo su estado con el signal
  //no debería ni siquiera de evaluar la condición al principio
  userLogin(user : UserDataRequest): Observable<UserDataResponse>{
    return this.httpClient.post<UserDataResponse>(`${this.baseUrl}login`, user)
  }

  //Metodo para el logout. Si planteo el servicio para que el botón de logout
  //no aparezca si no se está auth, no tiene sentido evaluar.
  userLogout(){
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('username');
      this.setAuthenticated(false);
  }

  //Metodo para modificar el signal
  setAuthenticated(isAuth : boolean){
    this.isAuthenticated.set(isAuth);
  }
}
