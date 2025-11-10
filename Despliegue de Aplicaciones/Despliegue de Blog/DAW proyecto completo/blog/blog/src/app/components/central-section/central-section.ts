import { Component, Input, OnInit } from '@angular/core';
import { Miniatura } from '../../miniatura/miniatura';
import { articulos } from '../../../assets/data';
import { Articulo } from '../../../model/articulosInterface';
import { ArticuloDetallado } from '../articulo-detallado/articulo-detallado';

@Component({
  selector: 'app-central-section',
  imports: [Miniatura, articulos],
  templateUrl: './central-section.html',
  styleUrl: './central-section.scss',
})
export class CentralSection implements OnInit{

  datosTemporales : Articulo[] = [];

  articuloActual : Articulo;

  @Input() articulo : Articulo;

  constructor(){

    this.articulo = {
        id : 0,
        fechaPublicacion : 0,
        titulo : '',
        url : '',
        contenido : ''
    }

    this.articuloActual = {
        id : 0,
        fechaPublicacion : 0,
        titulo : '',
        url : '',
        contenido : ''
    }

  }

  ngOnInit(): void {
    
    this.obtenerArticulo();
  }

  articuloSeleccionado(articulo : Articulo){
    this.articuloActual = articulo;
  }

  async obtenerArticulo(){
    
    try {
        const response = await fetch('http://localhost:8080/api/articulos');
        if (!response.ok) {
            throw new Error('Error al cargar las tareas');
        }
        const data = await response.json();
        
        data.forEach((articulo : Articulo) => {
          this.datosTemporales.push(articulo);
        });
      
    } catch (error) {
        console.error('Error al cargar las tareas:', error);
    }
        

  }

}

