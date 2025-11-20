import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class SCarritoService {
  
  // Para hacer unas pruebas definimos el array y la currency tas y como lo teniamos en JS. Luego una vez lo tenga conectado al back simplemente lo comentamos y lo dejamos por aquí

  // Defino una propiedad de tipo producto
  producto! : IProduct;

  // Definimos un array de productos, lo inicializo despues
  private arrayProductos : IProduct[];

  //No se si estará bién, pero lo que voy a hacer es crear un array que será para los productos comprados
  private carritoProductos : any[];

  private currency! : string;

  private precioTotal : number

  private initialQuantity : number;

  constructor(){

    this.arrayProductos = [];

    fetch('http://localhost:8080/api/carrito')
    .then(response => response.json())
    .then(data => {
        //Almacenamos los datos de currency en la variable y el array de productos en nuestro propio mapa.
        this.currency = data.currency;
        data.products.forEach((product: IProduct)=> {
            this.arrayProductos.push(product);
        });
        
        
    });

    this.carritoProductos = [];

    this.precioTotal = 0;

    this.initialQuantity = 0;
  }


  getListadoProductos () : IProduct[]{
    return this.arrayProductos;
  }

  addProductCart (producto : any) : void {

    let indice = this.carritoProductos.findIndex((prod) => prod.sku === producto.sku);

    if(indice !== -1){
      this.carritoProductos[indice].quantity = producto.quantity;
    }else{
      this.carritoProductos.push(producto);
    }
    
    this.precioTotal += producto.price;
  }

  removeProductCart(producto : any) : void {
    let indice = this.carritoProductos.findIndex((prod) => prod.sku === producto.sku);

    if(indice !== -1){

      this.carritoProductos[indice].quantity = producto.quantity;

      if(this.carritoProductos[indice].quantity === 0){
        this.carritoProductos.splice(indice, 1);
      }
      
    }

    this.precioTotal -= producto.price;
  }

  getCurrency() : string {
    return this.currency;
  }

  getCarritoProducts() : any[] {
    return this.carritoProductos;
  }

  getPrecioTotal() : string{
    return this.precioTotal.toFixed(2);
  }

  eliminarCompra() {
    this.carritoProductos.splice(0,this.carritoProductos.length);
    this.precioTotal = 0;
  }

  getInitialQuantity() : number{
    return this.initialQuantity;
  }

  resetInitialQuantity() : void{
    this.initialQuantity = 0;
  }

  filtrarListaPrecio(rango: any) {
    let arrayAuxiliar = [];

    arrayAuxiliar = this.arrayProductos;

    this.arrayProductos.sort();
    const indice = this.arrayProductos.findIndex((prod) => Number(prod.price) > rango);

    if(indice != -1){
      this.arrayProductos.splice(indice, this.arrayProductos.length);
    }

    this.arrayProductos = arrayAuxiliar;
  }
}
