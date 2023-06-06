// Sebastian Videla Holtz
// Definimos objetos de divisas con nombre y precio
const divisas = [
  { nombre: 'Dolar', precio: 485 },
  { nombre: 'Yuan', precio: 35 },
  { nombre: 'Yen', precio: 1.80 }
];

// Función para convertir una cantidad de USD a pesos argentinos
function convertirUSDaARS(cantidadUSD) {
  const precioDolar = divisas.find(d => d.nombre === 'Dolar')?.precio;
  return precioDolar ? cantidadUSD * precioDolar : null;
}

// Función para convertir una cantidad de divisa (Yen o Yuan) a pesos argentinos
function convertirDivisaAARS(divisa, cantidadDivisa) {
  const precioDivisa = divisas.find(d => d.nombre === divisa)?.precio;
  return precioDivisa ? cantidadDivisa * precioDivisa : null;
}

// Solicitar al usuario la cantidad de USD a convertir
function solicitarCantidadUSD() {
  let cantidadUSD = parseFloat(prompt('Ingrese la cantidad de USD a convertir:'));

  while (isNaN(cantidadUSD)) {
    cantidadUSD = parseFloat(prompt('Ingrese una cantidad de USD válida:'));
  }

  return cantidadUSD;
}

// Solicitar al usuario la cantidad de divisa a convertir
function solicitarCantidadDivisa(divisa) {
  let cantidadDivisa = parseFloat(prompt(`Ingrese la cantidad de ${divisa} a convertir:`));

  while (isNaN(cantidadDivisa)) {
    cantidadDivisa = parseFloat(prompt(`Ingrese una cantidad de ${divisa} válida:`));
  }

  return cantidadDivisa;
}

// Función de orden superior para convertir y mostrar el resultado
function convertirYMostrarResultado(divisa) {
  return function(cantidad) {
    const cantidadARS = convertirDivisaAARS(divisa, cantidad);
    if (cantidadARS) {
      alert(`${cantidad} ${divisa} equivale a ${cantidadARS} ARS`);
    } else {
      alert(`La cantidad de ${divisa} ingresada no es válida`);
    }
  };
}

// Ejecutar el programa
const cantidadUSD = solicitarCantidadUSD();
const seleccionarDivisa = prompt('Seleccione una divisa: Dolar, Yuan o Yen').trim();
const divisaEncontrada = divisas.find(d => d.nombre.toLowerCase() === seleccionarDivisa.toLowerCase());

if (divisaEncontrada) {
  const convertirDivisa = convertirYMostrarResultado(divisaEncontrada.nombre);
  convertirDivisa(cantidadUSD);
} else {
  alert('La divisa seleccionada no es válida');
}