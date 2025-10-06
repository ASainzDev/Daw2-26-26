export default class Carrito{

    
    
    constructor(){
        this.products = new Map;
    }

    addProduct(key,product){
        this.products.set(key, product);
    }

    obtainCollection(){
        return this.products;
    }

    

}