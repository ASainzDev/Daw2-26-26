import { dato } from "./datos.js";
import Carrito from "./Carrito.js";

document.addEventListener("DOMContentLoaded",(event)); {



    const tablaDeProductos = document.getElementsByClassName("articles-table");

    let precioTotalProductos = 0;

    const precioFinal = document.getElementById("precio-total");

    initializeTableProductos();

    const product = {
        sku : "",
        title : "",
        price : 0
    }

    const carrito = new Carrito(product);

    

    function initializeTableProductos() {

        dato.products.forEach(producto => {

            const row = document.createElement("tr");
            const cell1 = document.createElement("td");
            const cell2 = document.createElement("td");
            const cell3 = document.createElement("td");
            const cell4 = document.createElement("td");
        
            //A partir de aquí voy agregando los elementos. Primero el nombre y la referencia del producto

            const productName = document.createElement("p");
            productName.classList.add("product-name");
            productName.textContent = producto.title;
            cell1.appendChild(productName);

            const productReference = document.createElement("p");
            productReference.classList.add("product-reference");
            productReference.textContent = producto.SKU;
            cell1.appendChild(productReference);

            cell1.classList.add("product-cell");

            //Añado el precio unitario de cada producto. También la moneda

            const unitPrice = document.createElement("input");
            unitPrice.type = "number"
            unitPrice.contentEditable = false;
            unitPrice.readOnly = true;
            unitPrice.value = producto.price;
            unitPrice.classList.add("price");

            const euros = document.createElement("span");
            euros.textContent = dato.currency;
            cell3.append(unitPrice, euros);

            //Añado ahora el campo de la celda precio total

            const total = document.createElement("input");
            total.type = "number";
            total.readOnly = true;
            total.defaultValue = 0;
            cell4.appendChild(total);
            total.classList.add("price");
            cell4.appendChild(euros);


            //Por ultimo añado el cuadro de la cantidad y los botones para aumentar y disminuir los productos


            const quantity = document.createElement("input");
            quantity.readOnly = true;
            quantity.min = 0;
            quantity.max = 10;
            quantity.defaultValue = 0;
            quantity.type = "number";
            quantity.classList.add("quantity");

            

            const buttonMinus = document.createElement("button");
            buttonMinus.textContent = "-";
            buttonMinus.classList.add("quantity-button");
            buttonMinus.addEventListener('click', ()=>{
                if(quantity.value == 0){
                    buttonMinus.disable = true;
                }else{
                    buttonMinus.disable = false;
                    quantity.value--;
                    total.valueAsNumber = quantity.valueAsNumber * unitPrice.valueAsNumber;
                    precioTotalProductos -= unitPrice.valueAsNumber;
                    precioFinal.textContent = precioTotalProductos.toFixed(2);
                    buttonPlus.disabled = false;
                }
                
            });

            

            const buttonPlus = document.createElement("button");
            buttonPlus.textContent = "+";
            buttonPlus.classList.add("quantity-button");
            buttonPlus.addEventListener('click', ()=>{
                
                if(quantity.value == 25){
                    buttonPlus.disabled = true;
                    alert("No te vamos a dejar comprar más de 25. Pida presupuesto");
                }else {

                    product.sku = productReference;
                    product.title = productName;
                    product.price = unitPrice.valueAsNumber;

                    carrito.addProduct(product);
                    

                    buttonPlus.disabled = false;
                    quantity.value++;
                    total.valueAsNumber = quantity.valueAsNumber * unitPrice.valueAsNumber;
                    precioTotalProductos += unitPrice.valueAsNumber;
                    precioFinal.textContent = precioTotalProductos.toFixed(2);
                    buttonMinus.disabled = false;
                }
                
            });

            cell2.append(buttonMinus, quantity, buttonPlus);


            row.append(cell1, cell2, cell3, cell4);

            tablaDeProductos.item(0).appendChild(row);

        });
    }


    

}
