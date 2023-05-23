// Sebastian Videla Holtz
// Función para convertir USD a ARS

function convertirUSDaARS(cantidadUSD) {
  const precioDolar = 470;
  return cantidadUSD * precioDolar;
}

// Solicitar al usuario la cantidad de USD a convertir
function solicitarCantidadUSD() {
  let cantidadUSD = parseFloat(
    prompt('Ingrese la cantidad de USD a convertir en pesos argentinos:')
  );

  while (isNaN(cantidadUSD)) {
    cantidadUSD = parseFloat(prompt('Ingrese una cantidad de USD válida:'));
  }

  return cantidadUSD;
}

// Convertir USD a ARS y mostrar el resultado
function convertirYMostrarResultado(cantidadUSD) {
  const cantidadARS = convertirUSDaARS(cantidadUSD);
  alert('$' + cantidadUSD + ' USD equivale a ' + cantidadARS + ' ARS');
}

// Ejecutar el programa
const cantidadUSD = solicitarCantidadUSD();
convertirYMostrarResultado(cantidadUSD);




