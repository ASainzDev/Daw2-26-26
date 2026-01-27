import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {

//   Defino un signal para controlar el estado del modal de login
  tryLogin = signal(false)

}
