import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { Filtro } from '../interfaces/filtro';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  // Defino una colección que almacenará los productos

  private listadoProductos : Products[];

  private listadoFiltrado : Products[];

  // Defino el constructor
  constructor(){

    this.listadoProductos = [];

    this.listadoFiltrado = [];


    // Algo he pensado mal al hacer el planteamiento. Tal y como lo habia hecho no se me actualizaba la lista bien, por lo tanto el fetch aquí. No me gusta nada, prefería en la función que tenía declarada, pero bueno, si me da tiempo le doy una vuelta y lo arreglo.
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => {
        data.forEach((product : Products) => {
          this.listadoProductos.push(product);
        });
      });
  }

  // Voy desarrollando el método que va a hacer el fetch
  obtenerListadoProductos () : Products[]{
    return this.listadoProductos;
  }

  // En principio prefiero hacer el fetch en una función aparte. Por limpieza, me gusta más. No ha ido bien, lo he tenido que poner arriba.
  async obtenerProductos() {

    try {
      const response = await fetch('http://localhost:8080/api/products');
      if (!response.ok) {
        throw new Error('Error al cargar las tareas');
      }
      const data = await response.json();

      data.forEach((product : Products) => {
        this.listadoProductos.push(product);
      });

    } catch (error) {
      console.error('Error al cargar las tareas:', error);
    }


  }

  //Diferentes métodos que creo que voy a necesitar para ir operando con los productos
  guardarArtículo(producto: Products) {
    let index = this.listadoProductos.findIndex((productBusc) => productBusc.id === producto.id);

    if (index !== -1) {
      this.listadoProductos[index] = producto;
      console.log('Se ha reescrito info del producto');
    } else {
      this.listadoProductos.push(producto);
      console.log('Se ha guardado un producto');
    }
  }

  // Este método no va a ser el más elegante de todos. Siempre me lío con la 
  //posibilidad de que devuelva undefined. Tiempo al tiempo.

  getArticulo(id: string): Products | undefined {
    return this.listadoProductos.find(producto => producto.id === id);
  }

  //Método para eliminar los datos de la lista.
  eliminarProducto(producto : Products) {
    let index = this.listadoProductos.findIndex((articuloBuscado) => articuloBuscado.id === producto.id);

    if (index != -1) {
      this.listadoProductos.splice(index, 1);
    }
  }


  // Voy a probar solo con values sin crear nuevo objeto.
  filtrarListado(filtro : Filtro){
    

      this.listadoProductos = this.listadoProductos.filter((producto) => producto.active === filtro.active &&
        (!filtro.category || producto.category === filtro.category) && producto.price <= filtro.price
        && (!filtro.name || producto.name.includes(filtro.name)));

  }

  

}
