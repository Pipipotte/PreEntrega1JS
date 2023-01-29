
const branding = 1000;
const frontend = 1000;
const UXUI = 1000;
const descuentoNum = 0.8;

let carrito = 0;

function brandingItem(carrito){
    carrito = carrito + branding;
    return carrito;
}
function frontendItem(carrito){
    carrito = carrito + frontend;
    return carrito;
} 
function uxuiItem(carrito){
    carrito = carrito + UXUI;
    return carrito;
} 

function descuento(carrito, descuentoNum,){
    carrito = carrito * descuentoNum;
    return carrito;
}

function compraItem(){
    let compra = prompt("¿Qué servicio desea adquirir? ☛ Branding, frontend, UX/UI, ");
    switch (compra) {
        case "branding":
            if (compra == "branding"){
                console.log("Usted está por comprar branding");
                carrito = brandingItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra);
                seguirComprando(carrito);
                return carrito;
            }
            break;
        case "frontend":
            if (compra == "frontend"){
                console.log("Usted está por comprar frontend");
                carrito = frontendItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra);
                seguirComprando(carrito);
                return carrito;
            }
            break;
        case "ux/ui":
            if (compra == "ux/ui"){
                console.log("Usted está por comprar ux/ui");
                carrito = uxuiItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra)
                seguirComprando(carrito);
                return carrito
            }
            break
        case "uxui":
            if (compra == "uxui"){
                console.log("Usted compró uxui");
                carrito = uxuiItem(carrito);
                console.log("Total a pagar: $",carrito);
                descuentoPreg(carrito,compra)
                seguirComprando(carrito);
                return carrito
            }
            break;
        default:
            alert(`No ingresó un servicio del listado, intente de nuevo`);
            compraItem();
    } 
}

function seguirComprando(carrito){
    if (prompt(`Desea adquirir otro servicio? (s/n)`) == "s"){
        compraItem();
    } else {
        alert(`Ni nos vimos`);
    }
}


function descuentoPreg(carrito,compra){
    if (prompt(`Está por adquirir el servicio ${compra}, ingrese código de descuento, de no disponer de uno deje en blanco (cod: 1234)`) == 1234){
        carrito = descuento(carrito,descuentoNum);
        alert(`Descuento aplicado, total a pagar: $${carrito}`);
        console.log(`Descuento aplicado, total a pagar: $${carrito}`);
    } else {
        alert(`Total a pagar: $${carrito}`);
        console.log(`No se aplicó el descuento, total a pagar: $${carrito}`);
    }
}

compraItem(carrito);





