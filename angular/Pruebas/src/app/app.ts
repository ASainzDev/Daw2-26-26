import { Component, signal } from '@angular/core';
import { CardComponent } from './componentes/card-component/card-component';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pruebas');
}
