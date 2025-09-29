import {dato} from "./datos.js";

const tablaDeProductos = document.getElementsByClassName("articles-table");

console.log(dato);

const productosMostrar =  [];


initializeTableProductos();

function initializeTableProductos(){

    dato.products.forEach(producto => {
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        let cell4 = document.createElement("td");

        modifyProductCell(cell1,producto);

        modifyQuantityCell(cell2);

        modifyUnitPriceCell(cell3,producto);

        modifyTotalCell(cell4);

        row.appendChild(cell1);

        row.appendChild(cell2);

        row.appendChild(cell3);

        row.appendChild(cell4);

        row.classList.add("product-row");

        tablaDeProductos.item(0).appendChild(row);

    }) ;   
}

function modifyProductCell(cell,producto){
    let productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.textContent = producto.title;
        cell.appendChild(productName);

        let productReference = document.createElement("p");
        productReference.classList.add("product-reference");
        productReference.textContent = producto.SKU;
        cell.appendChild(productReference);

        cell.classList.add("product-cell");
}

function modifyQuantityCell(cell){
    let buttonMinus = document.createElement("button");
    buttonMinus.textContent = "-";
    buttonMinus.classList.add("quantity-button");
    cell.appendChild(buttonMinus);

    let quantity = document.createElement("input");
    quantity.min = 0;
    quantity.max = 10;
    quantity.defaultValue = 0;
    quantity.type = "number";
    quantity.textContent = 0;
    quantity.classList.add("quantity");
    cell.appendChild(quantity);

    let buttonPlus = document.createElement("button");
    buttonPlus.textContent = "+";
    buttonPlus.classList.add("quantity-button");
    cell.appendChild(buttonPlus);
       
}

function modifyUnitPriceCell(cell,producto){
    let unitPrice = document.createElement("span");
    unitPrice.textContent = producto.price;
    cell.appendChild(unitPrice);
    cell.classList.add("unit-price");
    let euros = document.createElement("span");
    euros.textContent = dato.currency;
    cell.appendChild(euros);
}

function modifyTotalCell(cell){
    let total = document.createElement("span");
    total.textContent = 0;
    cell.appendChild(total);
    cell.classList.add("total");
    let euros = document.createElement("span");
    euros.textContent = dato.currency;
    cell.appendChild(euros);
}



