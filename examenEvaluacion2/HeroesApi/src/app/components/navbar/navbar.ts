import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/authservice';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


// Instancia de Router para poder navegar
router = inject(Router);

//Inyecto el servicio de autenticación
authservice = inject(AuthService);

// Método para navegar al panel de login
  logIn() {
    this.router.navigate(['login']);
  }

  // Metodo para el logout
  logOut() {
    this.authservice.userLogout();
  }

}
