import { PowerlevelsDTO } from './powerlevels-dto';

export interface HeroDetailDTO {
  id: number;
  heroName: string;
  name: string;
  imagen1: string;
  imagen2?: string;
  imagen3?: string;
  powerlevels: PowerlevelsDTO | null;
}
