import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Articulo } from '../../interfaces/Articulo';

@Component({
  selector: 'app-lista-administrador-component',
  imports: [CommonModule],
  templateUrl: './lista-administrador-component.html',
  styleUrl: './lista-administrador-component.css',
})
export class ListaAdministradorComponent {

  @Input() articulo!: Articulo;

  constructor(){
  }
}
