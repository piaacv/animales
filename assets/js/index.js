import Tipos from "./clases/Tipos.js";
import data from "./data.js";

let animals = [];
let imgSrc;
let sonidoSrc;

const cardCreate = () => {
  try {
    const template = document.getElementById("Animales");
    template.innerHTML = ``;
    animals.forEach((animal, i) => {
      template.innerHTML += `
            <div class="px-3 pb-2">
            <div class="bg-dark text-white d-flex-column">
            <img height="200" src="./assets/imgs/${animal.imagen}" class="card-img-top" alt="foto animal" data-bs-toggle="modal"  
            data-bs-target="#exampleModal" onclick="modalDetails('${i}')"/>
            <div>
            <button onclick="playSound('${animal.sonido}')" class="btn btn-secondary w-100"> <img height="30" src="./assets/imgs/audio.svg" /> </button>
            </div>
            </div>
            </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
};


window.playSound = (sonido) =>{
    try{
        let musica = new Audio(`./assets/sounds/${sonido}`);
        musica.play();
    }catch (error){
        console.log(error)
    }
}

window.modalDetails = (i) =>{
    try{
     const modalBody = document.getElementsByClassName("modal-body")[0];
     const animalDetails = animals[i];
        modalBody.innerHTML = `
        <div class="px-3 pb-2">
        <div class="card w-80 mx-auto bg-dark text-white border-0">
          <img
            src="./assets/imgs/${animalDetails.imagen}"
            class="d-block m-auto w-100"
          />
          <div class="card-body text-center">
            <h6 class="card-text ">${animalDetails.edad}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${animalDetails.comentario}</p>
          </div>
        </div>
        </div>
        `
        $("#exampleModal").modal("show")
    console.log(modalBody)
    }catch (error){
        console.log(error)
    }
}

document.getElementById("animal").addEventListener("change", async (e) => {
  try {
    const animalSelected = e.target.value;
    const animales = await data.getData()
    const animalData = await animales.find((nombreAnimal) => {
      return nombreAnimal.name === animalSelected;
    });
    imgSrc = `${animalData.imagen}`;
    sonidoSrc = `${animalData.sonido}`;
    const previewImgAnimal = document.getElementById("preview");
    previewImgAnimal.style.backgroundImage = `url("./assets/imgs/${imgSrc}")`;
  } catch (error) {
    console.log(error);
  }
});

document.getElementById("btnRegistrar").addEventListener("click", (e) => {
  try {
    const name = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentario = document.getElementById("comentarios").value;
    if (name && edad && comentario) {
      let animal = new Tipos(name, edad, comentario, imgSrc, sonidoSrc);
      animals.push(animal);
      cardCreate();
    } else {
      alert("Debes completar todos los campos");
    }
    console.log(name);
    console.log(edad);
    console.log(comentario);
  } catch (error) {
    console.log(error);
  }
});


