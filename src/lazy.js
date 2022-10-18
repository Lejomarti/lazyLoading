let loadedImg = 0



const isIntersecting = (entry) => {
  return entry.isIntersecting; //true dentro de la pantalla
};

const loadImage = (entry) => {
  const container = entry.target; //container
  const imagen = container.firstChild
  const url = imagen.dataset.src
  imagen.src = url
  //console.log(container.nodeName)

  //como ya se ejecuto, se debe dejar de hacer, para que no registre varias veces la misma cosa
  observer.unobserve(container);
  // debugger
  console.log("Total de Imagenes cargadas: " + document.querySelectorAll(".p-4").length);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

//
export const registerImage = (imagen) => {
  //intersectionsObserver -> observa(imagen)
  observer.observe(imagen);
  loadedImg++
};
