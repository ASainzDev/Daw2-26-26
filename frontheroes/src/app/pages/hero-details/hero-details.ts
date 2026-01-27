import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes-service';
import { HeroDetailDTO} from '../../interfaces/hero-detail-dto';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.html',
})
export class HeroDetails {

  private route = inject(ActivatedRoute);
  private heroService = inject(HeroesService);
  private router = inject(Router);

  hero = signal<HeroDetailDTO | null>(null);
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHeroDetail(id).subscribe({
      next: data => {
        this.hero.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  volver() {
    this.router.navigate(['list']);
  }
}
