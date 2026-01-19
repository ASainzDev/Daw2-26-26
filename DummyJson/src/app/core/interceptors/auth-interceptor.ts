import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from '../services/authservice';
import {inject} from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //Como tengo una función en authservice que me devuelve el token de haber usuario inyecto el servicio aquí
  const authservice = inject(AuthService);

  //No es totalmente necesario pero creo una variable que almacena el authToken
  const authToken = authservice.getUsuarioLogeado()?.accessToken;

  //Evaluo si hay token o si la url incluye auth, el endpoint del login por si alguien lo escribe a mano,
  // si no hay token o la path tiene auth no tiene sentido seguir y paro con un early return
  if(!authToken || req.url.includes("auth")){
    return next(req);
  }

  //Defino una variable que va a tener el valor de la cabecera deseado
  const cloneRequest = req.clone({
    setHeaders:{
      'Content-Type': 'application/json',
      'Authorization': authToken
    }
  });

  return next(cloneRequest);
};
