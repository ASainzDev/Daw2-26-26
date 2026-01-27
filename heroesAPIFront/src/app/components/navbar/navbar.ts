import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Loginservice} from '../../services/loginservice';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // Inyecto servicio de login
  loginService = inject(Loginservice)

  protected goToLogin() {
    this.loginService.tryLogin.set(true);
  }
}
