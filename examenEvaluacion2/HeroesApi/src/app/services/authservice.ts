import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userdatarequest } from '../interfaces/userdatarequest';
import { Observable } from 'rxjs';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Injecto servicio Http
  private httpClient = inject(HttpClient);

  //Declaro variable para la url base, le daré valor en el constructor
  private readonly baseUrl: string = 'https://dummyjson.com/auth/';

  //Declaro un signal para actualizar la vista segun su valor
  isAuthenticated = signal(false);

  constructor() {
    this.isAuthenticated.set(this.checkAuthenticated());

  }

  //Metodo para checkear si se esta autenticado y para evitar llamar a local storage en muchas otras funciones
  private checkAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  userLogin(user : Userdatarequest): Observable<Token>{
    return this.httpClient.post<Token>(`${this.baseUrl}login`, user);
  }

  //Metodo para el logout. Si planteo el servicio para que el botón de logout
  //no aparezca si no se está auth, no tiene sentido evaluar.
  userLogout() {
    localStorage.removeItem('accessToken');
    this.setAuthenticated(false);
  }

  //Metodo para modificar el signal
  setAuthenticated(isAuth: boolean) {
    this.isAuthenticated.set(isAuth);
  }
}
