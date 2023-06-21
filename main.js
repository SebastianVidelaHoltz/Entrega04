// Obtener referencias a los elementos del DOM
const btnConvertir = document.getElementById('btnConvertir');
const resultado = document.getElementById('resultado');
const montoInput = document.getElementById('monto');
const monedaOrigenSelect = document.getElementById('monedaOrigen');

// Definir objetos de divisas con nombre y precio
const divisas = [
  { nombre: 'USD', precio: 485 },
  { nombre: 'YUAN', precio: 35 },
  { nombre: 'YEN', precio: 1.80 }
];

// Función para convertir una cantidad de divisa a pesos argentinos
function convertirDivisaAARS(divisa, cantidadDivisa) {
  const divisaObj = divisas.find(d => d.nombre === divisa);
  return cantidadDivisa * divisaObj.precio;
}

// Función para mostrar el resultado de la conversión
function mostrarResultado(resultadoConversión) {
  resultado.textContent = 'El resultado de la conversión es: ARS ' + resultadoConversión;
}

// Evento click del botón de conversión
btnConvertir.addEventListener('click', function() {
  const monto = parseFloat(montoInput?.value);
  const monedaOrigen = monedaOrigenSelect.value;
  
  // Realizar la conversión 
  const resultadoConversión = convertirDivisaAARS(monedaOrigen, monto);
  
  // Mostrar el resultado de la conversión en el elemento <span>
  mostrarResultado(resultadoConversión);
});
// Funciones para localeStorage y JSON
const divisasJSON = JSON.stringify(divisas);
localStorage.setItem('divisasData', divisasJSON);
const divisasConvertidas = localStorage.getItem(divisas)