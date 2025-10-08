import { dato } from "./datos.js";
import Carrito from "./Carrito.js";

document.addEventListener("DOMContentLoaded",(event)); {



    const tablaDeProductos = document.getElementsByClassName("articles-table");
    const containerTotal = document.getElementsByClassName("total-price");

    const precioFinal = document.getElementById("precio-total");

    const carrito = new Carrito();

    const productMap = new Map();

    fetch('https://68e53fab21dd31f22cc120de.mockapi.io/carrito/api/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(product => {
            productMap.set(product.SKU, product);
        });
        initializeTableProductos();
    });

        

    function initializeTableProductos() {

        productMap.forEach((producto, sku) => {

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

                    const product = {
                        sku : "",
                        title : "",
                        price : 0
                    }

                    product.sku = productReference.textContent;
                    product.title = productName.textContent;
                    product.price = unitPrice.valueAsNumber;
                    product.quantity = quantity.valueAsNumber;

                    carrito.addProduct(product.sku, product);

                    renderCart(carrito.products);

                    total.valueAsNumber = quantity.valueAsNumber * unitPrice.valueAsNumber;

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
                    quantity.value++;

                    const product = {
                        sku : "",
                        title : "",
                        price : 0
                    }

                    product.sku = productReference.textContent;
                    product.title = productName.textContent;
                    product.price = unitPrice.valueAsNumber;
                    product.quantity = quantity.valueAsNumber;

                    carrito.addProduct(product.sku, product);

                    renderCart(carrito.products);
                    

                    buttonPlus.disabled = false;
                    
                    total.valueAsNumber = quantity.valueAsNumber * unitPrice.valueAsNumber;
                    buttonMinus.disabled = false;
                }
                
            });

            cell2.append(buttonMinus, quantity, buttonPlus);


            row.append(cell1, cell2, cell3, cell4);

            tablaDeProductos.item(0).appendChild(row);

        });
    }


    function renderCart(productsMap){

        const containerCart = document.getElementsByClassName("cart");
        containerCart.item(0).innerHTML = "";

        let valorTotal = 0;

        productsMap.forEach((elemento,sku) => {

            console.log(elemento);

            const elementDisplay = document.createElement("div");
            elementDisplay.classList.add("element-display");
            const productTitle = document.createElement("p");
            const productQuantity = document.createElement("input");
            productQuantity.type = "number";
            productQuantity.readOnly = true;
            productQuantity.classList.add("price");
            const totalProductPrice = document.createElement("input");
            totalProductPrice.readOnly = true;
            totalProductPrice.classList.add("price");
            const divQuantityControls = document.createElement("div");
            divQuantityControls.classList.add("quantity-controls");
            const buttonMinus = document.createElement("button");
            buttonMinus.textContent = "-";
            buttonMinus.classList.add("quantity-button");
            buttonMinus.addEventListener('click', ()=>{
                
                if(productQuantity.value == 0){
                    buttonMinus.disabled = true;
                }else {
                    productQuantity.value--;

                    const product = {
                        sku : "",
                        title : "",
                        price : 0
                    }

                    product.sku = sku;
                    product.title = elemento.title;
                    product.price = elemento.price;
                    product.quantity = productQuantity.valueAsNumber;

                    carrito.addProduct(product.sku, product);

                    renderCart(carrito.products);
                    

                    buttonPlus.disabled = false;
                
                    buttonMinus.disabled = false;
                }
                
            });



            const buttonPlus = document.createElement("button");
            buttonPlus.textContent = "+";
            buttonPlus.classList.add("quantity-button");
            buttonPlus.addEventListener('click', ()=>{
                
                if(productQuantity.value == 25){
                    buttonPlus.disabled = true;
                    alert("No te vamos a dejar comprar más de 25. Pida presupuesto");
                }else {
                    productQuantity.value++;

                    const product = {
                        sku : "",
                        title : "",
                        price : 0
                    }

                    product.sku = sku;
                    product.title = elemento.title;
                    product.price = elemento.price;
                    product.quantity = productQuantity.valueAsNumber;

                    carrito.addProduct(product.sku, product);

                    renderCart(carrito.products);
                    

                    buttonPlus.disabled = false;
                
                    buttonMinus.disabled = false;
                }
                
            });
            divQuantityControls.append(buttonPlus, buttonMinus);

            productTitle.textContent = elemento.title;
            productQuantity.value = elemento.quantity;
            totalProductPrice.value = (elemento.price * elemento.quantity).toFixed(2) + " " + dato.currency;
            valorTotal += elemento.price * elemento.quantity;

            elementDisplay.append(productTitle, productQuantity, totalProductPrice, divQuantityControls);
            containerCart.item(0).append(elementDisplay);


        });

        precioFinal.textContent = valorTotal.toFixed(2);

    }

}
