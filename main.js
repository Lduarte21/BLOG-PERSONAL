function redirigir(url) {
  window.location.href = url;
}

// Imagen de Marcos
const imgMarcos = document.getElementById("img-marcos");
imgMarcos.addEventListener("mouseover", () => {
  imgMarcos.src = "marcos.jpg"; // imagen al hacer hover
});
imgMarcos.addEventListener("mouseout", () => {
  imgMarcos.src = "viajar.jpg"; // imagen original
});

// Imagen de Lucía (opcional, ejemplo)
const imgLucia = document.getElementById("img-lucia");
imgLucia.addEventListener("mouseover", () => {
  imgLucia.src = "lu futbol.jpg";
});
imgLucia.addEventListener("mouseout", () => {
  imgLucia.src = "lu cancha.jpg";
});
function actualizarReloj() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');
  const horaFormateada = `${horas}:${minutos}:${segundos}`;
  document.getElementById('reloj').textContent = horaFormateada;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();