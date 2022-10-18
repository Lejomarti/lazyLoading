import { registerImage } from "./lazy";

let totalImg = 1;


//crear (1) imagen

const min = 1;
const max = 123;
const random = () => Math.floor(Math.random() * (max - min)) + 1;

const crearImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";
  const imagen = document.createElement("img");
  imagen.className = "mx-auto container";
  imagen.width = "320";
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);
  return container;
};
const mountNode = document.getElementById("images");

const addImage = () => {
  const newImage = crearImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
  //console.log("Total de imagenes: " + document.querySelectorAll(".p-4").length);
  console.log(`⚪ Se han agregado ${totalImg} imágenes`)
  totalImg++
};

//Borrador de imagenes
const eraseAll = () => {
  const aBorrar = document.querySelectorAll(".p-4");
  if (aBorrar.length > 0) {
    for (const elem of aBorrar) {
      elem.remove();
    }
  } else {
    console.log("no hay nada que borrar");
  }
  console.log(`se borraron las imagenes`);
  totalImg = 0
};
/////////////////

const addButton = document.querySelector("button");
addButton.addEventListener("click", addImage);

const eraseButton = document.querySelector("#erase");
eraseButton.addEventListener("click", eraseAll);
