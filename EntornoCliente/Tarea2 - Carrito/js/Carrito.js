export default class Carrito{

    
    
    constructor(products){
        
    }

    updateProductUnits(sku, units){
        this.sellQuantity = units;
    }

    getInfoProduct(sku){
        return {
            this:sku,
            this:this.sellQuantity
        }
    }
}