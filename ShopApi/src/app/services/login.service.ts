import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
 
  
  displayModalLogin = signal('none');
}
