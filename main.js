// Sebastian Videla Holtz
// Función para convertir USD a ARS

function convertirUSDaARS(cantidadUSD, tipoCambio, precioDolar) {
    precioDolar=470
    tipoCambio="Peso argentino".toLowerCase()
    return cantidadUSD * precioDolar;
  }
  
  // Solicitar al usuario la cantidad de USD a convertir y el tipo de cambio actual
  let cantidadUSD = parseFloat(prompt("Ingrese la cantidad de USD a convertir en pesos argentinos:"));
  let tipoCambio = prompt("Ingrese el tipo de cambio actual:".toLowerCase());
  
  // Validar que las entradas sean números válidos
  while (isNaN(cantidadUSD)) {
    cantidadUSD = parseFloat(prompt("Ingrese una cantidad de USD válida:"));
  }
  
  // Convertir USD a ARS
  let cantidadARS = convertirUSDaARS(cantidadUSD, tipoCambio);
  
  // Mostrar el resultado
//   console.log("$" + cantidadUSD + " USD equivale a " + cantidadARS + " ARS")
  alert("$" + cantidadUSD + " USD equivale a " + cantidadARS + " ARS")
  










