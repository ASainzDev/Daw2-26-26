import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HeroesInterface} from '../interfaces/heroes-interface';
import {Powerlevels} from '../interfaces/powerlevels';
import {HeroDetailDTO} from '../interfaces/hero-detail-dto';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {

//   Inyecto servicio http
  http = inject(HttpClient);

//   Declaro url base
  private readonly baseUrl =
    `${environment.apiUrl}/heroesapi/characters`;


//   Defino el get para la lista completa
  getHeroesList(): Observable<HeroesInterface[]>{
    return this.http.get<HeroesInterface[]>(`${this.baseUrl}`);
  }

//   Hero details
  getHeroDetail(id: number): Observable<HeroDetailDTO> {
    return this.http.get<HeroDetailDTO>(
      `${this.baseUrl}/powerlevels/${id}`

    );
  }

}
