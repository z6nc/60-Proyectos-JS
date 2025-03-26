const $ = (selector) => document.querySelector(selector) ;
let  colorGenerado  = localStorage.getItem("GeneradorColor")|| "#fff212";
const color  = $("#color");
const  contenedor = $("#contenedorColor");

color.textContent=colorGenerado
contenedor.style.backgroundColor = colorGenerado;

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

  function GenerarColor() {
      let GeneradorColor = getRandomHexColor();
      contenedor.style.backgroundColor = GeneradorColor;
      color.textContent = GeneradorColor ;
      localStorage.setItem("GeneradorColor" , GeneradorColor);
  }

