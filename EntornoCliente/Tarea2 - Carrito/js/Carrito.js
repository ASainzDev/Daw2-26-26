export default class Carrito{

    
    
    constructor(product){
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

}