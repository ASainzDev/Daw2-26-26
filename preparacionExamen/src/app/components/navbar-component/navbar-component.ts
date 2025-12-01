import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  
  isDark: boolean;


  constructor(){
    this.isDark = false;
  }
}
