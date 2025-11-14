import { Component, signal } from '@angular/core';
import { TablaComponent } from "./components/tabla-component/tabla-component";

@Component({
  selector: 'app-root',
  imports: [TablaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularCarrito');
}
