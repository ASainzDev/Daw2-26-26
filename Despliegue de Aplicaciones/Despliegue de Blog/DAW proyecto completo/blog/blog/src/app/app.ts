import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LeftSection } from "./components/left-section/left-section";
import { CentralSection } from "./components/central-section/central-section";
import { Main } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('blog');
}
