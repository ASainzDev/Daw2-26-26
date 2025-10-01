import { dato } from "./datos.js";

document.addEventListener("DOMContentLoaded",(event)); {



    const tablaDeProductos = document.getElementsByClassName("articles-table");

    initializeTableProductos();

    function initializeTableProductos() {

        dato.products.forEach(producto => {

            const row = document.createElement("tr");
            const cell1 = document.createElement("td");
            const cell2 = document.createElement("td");
            const cell3 = document.createElement("td");
            const cell4 = document.createElement("td");

            modifyProductCell(cell1, producto);

            modifyQuantityCell(cell2);

            modifyUnitPriceCell(cell3, producto);

            modifyTotalCell(cell4);

            row.append(cell1, cell2, cell3, cell4);

            tablaDeProductos.item(0).appendChild(row);

        });
    }

    function modifyProductCell(cell, producto) {
        const productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.textContent = producto.title;
        cell.appendChild(productName);

        const productReference = document.createElement("p");
        productReference.classList.add("product-reference");
        productReference.textContent = producto.SKU;
        cell.appendChild(productReference);

        cell.classList.add("product-cell");
    }

    function modifyQuantityCell(cell) {
        const buttonMinus = document.createElement("button");
        buttonMinus.textContent = "-";
        buttonMinus.classList.add("quantity-button");
        buttonMinus.addEventListener('click', ()=>{
            if(quantity.value == 0){
                buttonMinus.disabled = true;
            }else{
                quantity.value--;
            }
            
        });
        cell.appendChild(buttonMinus);

        const quantity = document.createElement("input");
        quantity.min = 0;
        quantity.max = 10;
        quantity.defaultValue = 0;
        quantity.type = "number";
        quantity.textContent = 0;
        quantity.classList.add("quantity");
        cell.appendChild(quantity);

        const buttonPlus = document.createElement("button");
        buttonPlus.textContent = "+";
        buttonPlus.classList.add("quantity-button");
        buttonPlus.addEventListener('click', ()=>{
            if(quantity.value == 10){
                buttonPlus.diabled = true;
            }else{
                quantity.value++;
                recalcularPrecioTotalProducto(quantity);
            }
            
        });
        cell.appendChild(buttonPlus);

    }

    function modifyUnitPriceCell(cell, producto) {
        const unitPrice = document.createElement("span");
        unitPrice.textContent = producto.price;
        cell.appendChild(unitPrice);
        cell.classList.add("unit-price");
        const euros = document.createElement("span");
        euros.textContent = dato.currency;
        cell.appendChild(euros);
    }

    function modifyTotalCell(cell) {
        const total = document.createElement("span");
        total.textContent = 0;
        cell.appendChild(total);
        cell.classList.add("total");
        const euros = document.createElement("span");
        euros.textContent = dato.currency;
        cell.appendChild(euros);
    }

    

}
