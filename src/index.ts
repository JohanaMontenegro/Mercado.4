
let prodUno: string = "";
let prodDos: String = "";
let prodTres: String = "";
let stockUno: number = 0;
let stockDos: number = 0;
let stockTres: number = 0;
let precioUno: number = 0;
let precioDos: number = 0;
let precioTres: number = 0;
let compra: string = "";
let cantidad: number = 0;
//prodUno = String(prompt("ingrese el producto uno"));
//1prodDos = String(prompt("ingrese el producto dos"));
//prodTres = String(prompt("ingrese el producto tres"));
//stockUno = Number(prompt("ingrese el stock de " + prodUno));
//stockDos = Number(prompt("ingrese el stock de " + prodDos));
//stockTres = Number(prompt("ingrese el stock de " + prodTres));
//precioUno = Number(prompt("ingrese el precio de " + prodUno));
//precioDos = Number(prompt("ingrese el precio de " + prodDos));
//precioTres = Number(prompt("ingrese el precio de " + prodTres)); 
console.log("Bienvenido al Super");
console.log( "los productos son: " + prodUno + " $" + precioUno + "," + prodDos + " $" + precioDos + ", " + prodTres + " $" + precioTres); 
//compra = String(prompt("que producto desea comprar?"));
//cantidad = Number(prompt("que cantidad desea comprar?")); 
if (cantidad > 0) { 
  if (compra === prodUno && cantidad <= stockUno) { 
    if (stockUno > 0 && precioUno > 0) { stockUno = stockUno - 1; 
console.log( "el precio de " + compra + "es de $" + precioUno + " y el stock es de " + stockUno );
 } else{
  console.log("el stock o precio ingresados son menores o igual a cero"); 
} 
} else if (compra === prodDos && cantidad <= stockDos) {
   if (stockDos > 0 && precioDos > 0) { 
     stockDos = stockDos - 1;
8 console.log( "el precio de " + compra + " es de $" + precioDos + " y el stock es de " + stockDos ); 
} else {
 console.log("el stock o precio ingresados son menores o igual a cero");
 }
 } else if (compra === prodTres && cantidad <= stockTres) {
    if (stockTres > 0 && precioTres > 0) {
       stockTres = stockTres - 1; 
       console.log( "el precio de " + compra + " es de $" + precioTres + " y el stock es de " + stockTres ); } else { console.log("el stock o precio ingresados son menores o igual a cero"); } } else { console.log("no tenemos ese producto"); }} else { console.log("usted no esta comprando ningun producto");}


