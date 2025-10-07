export default class Carrito{

    
    
    constructor(){
        this.products = new Map;
    }

    addProduct(key,product){

        if(product.quantity == 0){
            this.products.delete(key);
        }else{
            this.products.set(key, product);
        }

        
       
    }

    obtainCollection(){
        return this.products;
    }

    

}