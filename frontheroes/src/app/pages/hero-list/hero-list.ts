import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes-service';
import { HeroesInterface } from '../../interfaces/heroes-interface';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-list.html',
  styleUrls: ['./hero-list.css'],
})
export class HeroList {

  heroList = signal<HeroesInterface[]>([]);
  loading = signal(true);
  error = signal(false);

  router = inject(Router);
  heroS = inject(HeroesService);

  ngOnInit() {
    console.log('HERO LIST INIT');
    this.heroS.getHeroesList().subscribe({
      next: heroes => {
        this.heroList.set(heroes);
        this.loading.set(false);
      },
      error: err => {
        console.error('ERROR API', err);
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['detail', id]);
  }
}
