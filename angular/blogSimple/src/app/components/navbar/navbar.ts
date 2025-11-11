import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, RouterLink],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @Output() rol = new EventEmitter();

  usuario : number;

  constructor(){
    this.usuario = 2;
  }

seleccionarUsuario($event : any) {

  this.usuario = $event.target.value;

  this.rol.emit(this.usuario);
  console.log(this.usuario);
}

}
