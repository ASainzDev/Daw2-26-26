import Carrito from "./Carrito.js";

//Declaro lo primero un mapa, es en el que voy a almacenar los artículos. Luego como en este mapa solo voy a almacenar los artículos tengo que crear una variable para la moneda
const productMap = new Map();
let moneda = "";

//Cargamos el evento DomContentLoaded, dentro de el realizamos el fetch
document.addEventListener("DOMContentLoaded",() => {
    fetch('http://localhost:8080/api/carrito')
    .then(response => response.json())
    .then(data => {
        //Almacenamos los datos de currency en la variable y el array de productos en nuestro propio mapa.
        moneda = data.currency;
        data.products.forEach(product => {
            productMap.set(product.sku, product);
        });
        console.log(moneda);
        initializeTableProductos();
    }).catch(console.log('Error al cargar los datos desde el servidor de datos'));
});

    //Genero las diferentes variables que necesito para los diferentes elementos de mi código html, sólo aquellos que realmente voy a necesitar aqui
    const tablaDeProductos = document.getElementsByClassName("articles-table");

    const precioFinal = document.getElementById("precio-total");

    const carrito = new Carrito();

    //Defino la funcion initializeTableProductos que es la que gestiona lo que se hace en la página al cargar los productos desde el back.
    function initializeTableProductos() {

        productMap.forEach((producto, sku) => {

            const row = document.createElement("tr");
            const cell1 = document.createElement("td");
            const cell2 = document.createElement("td");
            const cell3 = document.createElement("td");
            const cell4 = document.createElement("td");
        
            //A partir de aquí voy agregando los elementos. Primero el nombre y la referencia del producto

            //Voy creando los diferentes elementos. Les doy una clase aunque normalmente no me hace falta
            const productName = document.createElement("p");
            productName.classList.add("product-name");
            productName.textContent = producto.title;
            cell1.append(productName);

            const productReference = document.createElement("p");
            productReference.classList.add("product-reference");
            productReference.textContent = sku;
            cell1.append(productReference);


            //Añado el precio unitario de cada producto. También la moneda

            const unitPrice = document.createElement("input");
            cartInputStyle(unitPrice);
            unitPrice.value = producto.price;
            unitPrice.classList.add("price");

            const euros = document.createElement("span");
            euros.textContent = moneda;
            cell3.append(unitPrice, euros);

            //Añado ahora el campo de la celda precio total

            const total = document.createElement("input");
            cartInputStyle(total);
            cell4.append(total);
            total.classList.add("price");
            cell4.append(euros);

            //Por ultimo añado el cuadro de la cantidad y los botones para aumentar y disminuir los productos
            const quantity = document.createElement("input");
            quantity.readOnly = true;
            quantity.min = 0;
            quantity.defaultValue = 0;
            quantity.type = "number";
            quantity.classList.add("quantity");

            /*Añadimos un eventlistener a los botones a la vez que los creamos para que desempeñen la función que queremos. Estas funciones son las de actualizar los elementos en pantalla y añadir esos elementos a nuestro carrito */

            const buttonMinus = document.createElement("button");
            buttonMinus.textContent = "-";
            buttonMinus.classList.add("quantity-button");
            buttonMinus.addEventListener('click', ()=>{
                if(quantity.value == 0){
                    buttonMinus.disable = true;
                }else{
                    buttonMinus.disable = false;
                    quantity.value--;

                    /*Después de actualizar el valor del campo quantity lo que hacemos es definir un objeto con los valores que queramos.
                    Luego después, le añadiremos un nuevo atributo que será el valor de quantity.*/
                    const product = {
                        sku : "",
                        title : "",
                        price : 0
                    }

                    //Actualizamos los valores de los atributos de nuestro objeto

                    product.sku = productReference.textContent;
                    product.title = productName.textContent;
                    product.price = unitPrice.valueAsNumber;
                    product.quantity = quantity.valueAsNumber;

                    //Lamamos a nuestra función para añadir elementos a nuestro carrito
                    carrito.addProduct(product.sku, product);

                    //Llamamos a la función que nos actualiza y nos crea los elementos de carrito
                    renderCart(carrito.products);

                    //Actualizamos el valor de nuestro campo total
                    total.valueAsNumber = quantity.valueAsNumber * unitPrice.valueAsNumber;

                    //Esto lo hice en su momento para no permitir ciertas operaciones con los botones. En principio no lo toco ni lo quito
                    buttonPlus.disabled = false;
                }
                
            });

            
            //A partir de aquí es lo mismo que para el boton menos
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

            tablaDeProductos.item(0).append(row);

        });
    }


    //Definimos la función que renderiza el carrito.
    function renderCart(productsMap){

        const containerCart = document.getElementsByClassName("cart");
        containerCart.item(0).innerHTML = "";

        let valorTotal = 0;

        productsMap.forEach((elemento,sku) => {

            console.log(elemento);

            const elementDisplay = document.createElement("div");
            elementDisplay.classList.add("element-display");

            const productTitle = document.createElement("p");
            productTitle.style.display = "table-cell";

            const productQuantity = document.createElement("input");
            cartInputStyle(productQuantity);
            productQuantity.style.display = "table-cell";
            
            
            const totalProductPrice = document.createElement("input");
            totalProductPrice.style.display = "table-cell";
            totalProductPrice.readOnly = true;
            cartInputStyle(totalProductPrice);

            productTitle.textContent = elemento.title;
            productQuantity.value = elemento.quantity;
            totalProductPrice.value = (elemento.price * elemento.quantity).toFixed(2);
            valorTotal += elemento.price * elemento.quantity;

            elementDisplay.append(productTitle, productQuantity, totalProductPrice);
            containerCart.item(0).append(elementDisplay);


        });

        precioFinal.textContent = valorTotal.toFixed(2);

    }

    function cartInputStyle(input){
        input.type = "number";
        input.classList.add("inputs");
        input.contentEditable = false;
        input.defaultValue = 0;
        
    }


