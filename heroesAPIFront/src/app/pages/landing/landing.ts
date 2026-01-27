import {Component, inject} from '@angular/core';
import {Navbar} from '../../components/navbar/navbar';
import {Footer} from '../../components/footer/footer';
import {Login} from '../../components/login/login';
import {Loginservice} from '../../services/loginservice';

@Component({
  selector: 'app-landing',
  imports: [
    Navbar,
    Footer,
    Login
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

  loginService = inject(Loginservice);
}
