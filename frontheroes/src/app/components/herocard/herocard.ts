import {Component, inject, Input} from '@angular/core';
import {HeroesInterface} from '../../interfaces/heroes-interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-herocard',
  imports: [],
  templateUrl: './herocard.html',
  styleUrl: './herocard.css',
})
export class Herocard {

//   Lo que siempre va a recibir una card es un input de un tipo

  @Input() heroe!: HeroesInterface;

//   Para ver los detalles necesitaré inyectar router
  router = inject(Router);

//   Lo que también voy a tener siempre es un botón de ver detalles del heroe
  viewDetails(): void {
    this.router.navigate(['detail', this.heroe.id]);
  }
}
