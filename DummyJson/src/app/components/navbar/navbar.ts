import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AuthService} from '../../core/services/authservice';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  //Inyecto mi authservice para comprobaciones
  authservice = inject(AuthService);

  //Inyecto el router
  router = inject(Router);

  constructor(){

  }

  logIn(){
    this.router.navigate(['login']);
  }

  logOut(){
    this.authservice.userLogout();
    this.router.navigate(['home']);
  }
}
