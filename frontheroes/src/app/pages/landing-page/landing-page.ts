import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

//   injecto router
  router = inject(Router);

//   función para ir a la lista de heroes
  goToHeroes(){
    this.router.navigate(['list']);
  }
}
