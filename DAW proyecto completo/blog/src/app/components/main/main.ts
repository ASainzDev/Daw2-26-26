import { Component} from '@angular/core';
import { LeftSection } from '../left-section/left-section';
import { Articulo } from '../model/articulosInterface';

@Component({
  selector: 'app-main',
  imports: [LeftSection],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})


export class Main {

  datosTemporales : Articulo[] = [];

  
  articuloSeleccionado : Articulo;
  
  articulo: Articulo;

  


  constructor(){
    this.articulo = {
      id : 0,
      fechaPublicacion : 0,
      titulo : '',
      url : '',
      contenido : ''
    }

    this.articuloSeleccionado = {
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

  async obtenerArticulo(){
      
      try {
          const response = await fetch('http://localhost:8080/api/articulos');
          if (!response.ok) {
              throw new Error('Error al cargar las tareas');
          }
          const data = await response.json();
          
          data.forEach((articulo : Articulo) => {
            this.datosTemporales.push(articulo);
            console.log(articulo);
          });
        
      } catch (error) {
          console.error('Error al cargar las tareas:', error);
      }
          
  
    }



obtenerFecha(number : number){
    return new Date(this.articulo.fechaPublicacion).toLocaleDateString('es-ES');
  }

  leerMas(articulo : Articulo) {
    this.articuloSeleccionado = articulo;
    console.log('articulo enviado', this.articulo)
  }

}
