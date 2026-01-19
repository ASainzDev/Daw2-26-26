import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/authservice';

export const loginguardGuard: CanActivateFn = (route, state) => {
  //Inyecto router para poder redireccionar
  const router = inject(Router);

  //Inyecto mi authservice que tiene una función para comprobar si se está autenticado
  const authservice = inject(AuthService);

  //Evaluo si estoy autenticado o no
  if(authservice.isAuthenticated()){
    //Si es true, lo devuelvo para poder navegar
    return true;
  }else{
    //Si es false, redirijo a inicio
    router.navigate(['home']);
  }
  return false;
};
