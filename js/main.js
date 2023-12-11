let nombre;
let menu;
let menuProductos;
let precio;
const descuento = 5000;

const juego = {
    id: 1,
    nombre: 'Resident Evil 2 Remake Standard Edition Capcom PS4 Físico',
    precio: 35500
};

const consola = {
    id: 2,
    nombre: 'Consola Playstation Ps4 1tb ',
    precio: 76260
};

const accesorio = {
    id: 3,
    nombre: 'Combo Soportes Pared Ps4 + Joysticks +organizador +auricular',
    precio: 6600
};

const componente = {
    id: 4,
    nombre: 'Placa de video Nvidia Gigabyte GeForce 10 Series GT 1030 ',
    precio: 51700
};

do {
    nombre = prompt('Bienvenido a SawFish Gaming, ¿Cuál es tu nombre?');
} while (!nombre);

alert('Bienvenido ' + nombre);

do {
    menu = prompt('¿Qué deseas hacer ' + nombre + ' ?\n\n1.- Añadir productos\n2.- Salir del carrito de compra');

    if (menu === '1') {
        menuProductos = prompt('Selecciona el número del producto que deseas agregar al carrito\n\n1. ' + juego.nombre + '\n2. ' + consola.nombre + '\n3. ' + accesorio.nombre + '\n4. ' + componente.nombre);
        menuProductos = parseInt(menuProductos);

        if (menuProductos >= 1 && menuProductos <= 4) {
            switch (menuProductos) {
                case 1:
                    precio = juego.precio;
                    break;
                case 2:
                    precio = consola.precio;
                    break;
                case 3:
                    precio = accesorio.precio;
                    break;
                case 4:
                    precio = componente.precio;
                    break;
            }

            alert('El precio a pagar es de: $ ' + precio + ' Pesos');

             let promo = prompt('¿Deseas aplicar el descuento por compra online?\n1.- Sí\n2.- No');

            if (promo === '1') {
                function aplicarDescuento() {
                    let descuentoFinal = precio - descuento;
                    alert('El descuento es de ' + descuento + ' pesos\nTotal a pagar: ' + descuentoFinal);
                }
                aplicarDescuento();
                alert("Gracias, vuelva pronto")
                break;
            } else {
                break;
            }
        } else {
            alert('Por favor, selecciona una opción válida');
        }
    } else if (menu === '2') {
        alert("Gracias, vuelva pronto");
        break;
    } else {
        alert('Por favor, selecciona una opción válida');
    }
} while (true);