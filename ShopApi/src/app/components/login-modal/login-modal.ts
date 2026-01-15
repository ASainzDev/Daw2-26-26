import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  imports: [],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css',
})
export class LoginModal {


  servicioLogin = inject(LoginService);

  private router = inject(Router);

  constructor(){
    
  }

  cerrar() {
    this.router.navigate(['inicio']);
  }

  accederTienda() {
    
  }
}
