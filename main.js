// Obtener referencias a los elementos del DOM
const btnConvertir = document.getElementById('btnConvertir');
const resultado = document.getElementById('resultado');
const montoInput = document.getElementById('monto');
const monedaOrigenSelect = document.getElementById('monedaOrigen');

async function getDivisas() {
  try {
    const response = await fetch("divisas.json");
    const divisas = await response.json();
    return divisas;
  } catch (error) {
    console.error("Error, se realizo la conversion", error);  
  }
}

// Función para convertir una cantidad de divisa a pesos argentinos
async function convertirDivisaAARS(divisa, cantidadDivisa) {
  const data = await getDivisas()
  const divisaObj = data.divisas.find(d => d.nombre === divisa);
  return cantidadDivisa * divisaObj.precio;
}

// Evento click del botón de conversión
btnConvertir.addEventListener('click', async function() {
  const monto = parseFloat(montoInput?.value);
  const monedaOrigen = monedaOrigenSelect.value;
  
// Realizar la conversión 
  const resultadoConversión = await convertirDivisaAARS(monedaOrigen, monto);
  
  Swal.fire(`El resultado de la conversión es: ARS ${resultadoConversión}`)

});
// Funciones para localeStorage y JSON
const divisasJSON = JSON.stringify(getDivisas());
localStorage.setItem('divisasData', divisasJSON);
const divisasConvertidas = localStorage.getItem('divisasData')