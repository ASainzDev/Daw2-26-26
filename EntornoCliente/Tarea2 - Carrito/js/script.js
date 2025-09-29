const tablaDeProductos = document.getElementsByClassName("articles-table");


const productosMostrar = [];

class Producto{
    constructor(nombre, referencia, precioUnidad){
        this.nombre = nombre;
        this.referencia = referencia;
        this.precioUnidad = precioUnidad;
    }
}

const producto1 = new Producto();
const producto2 = new Producto();
const producto3 = new Producto();


producto1.nombre ="Telefono2";
producto1.referencia = "123456";
producto1.precioUnidad = 200;
productosMostrar.push(producto1);

producto2.nombre ="Telefono3";
producto2.referencia = "654321";
producto2.precioUnidad = 300;
productosMostrar.push(producto2);

initializeTableProductos();

function initializeTableProductos(){
    productosMostrar.forEach(producto => {
        console.log(producto);
    });

    productosMostrar.forEach(producto => {
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
        productName.textContent = producto.nombre;
        cell.appendChild(productName);

        let productReference = document.createElement("p");
        productReference.textContent = producto.referencia;
        cell.appendChild(productReference);

        cell.classList.add("product-name");
}

function modifyQuantityCell(cell){
    let buttonMinus = document.createElement("button");
    buttonMinus.textContent = "-";
    buttonMinus.classList.add("quantity-button");
    cell.appendChild(buttonMinus);

    let quantity = document.createElement("span");
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
    unitPrice.textContent = producto.precioUnidad;
    cell.appendChild(unitPrice);
    cell.classList.add("unit-price");
    let euros = document.createElement("span");
    euros.textContent = "€";
    cell.appendChild(euros);
}

function modifyTotalCell(cell){
    let total = document.createElement("span");
    total.textContent = 0;
    cell.appendChild(total);
    cell.classList.add("total");
    let euros = document.createElement("span");
    euros.textContent = "€";
    cell.appendChild(euros);
}



