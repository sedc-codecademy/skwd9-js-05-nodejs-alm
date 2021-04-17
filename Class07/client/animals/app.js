const animalsContainer = document.querySelector(".row");

let deleteButtons = [];
let editButtons = [];

const animalCard = (id, imgSrc, animalName, description) => {
  return `
        <div class="col-md-6">
            <div class="card" style="width: 18rem;">
                <img src="${imgSrc}" class="card-img-top" alt="${animalName}">
                <div class="card-body">
                <h5 class="card-title">${animalName}</h5>
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-danger" id="delete__${id}">Delete</a>
                <a href="#" class="btn btn-warning" id="edit__${id}">Edit</a>
                </div>
            </div>
        </div>
    `;
};

//href="../add-animal/index.html?id=${id}"

fetch("http://localhost:3000/animals")
  .then(res => res.json())
  .then(animals => {
    animalsContainer.innerHTML = "";

    animals.forEach(animal => {
      const { id, imgSrc, animalName, description } = animal;
      animalsContainer.innerHTML += animalCard(
        id,
        imgSrc,
        animalName,
        description
      );

      deleteButtons.push(document.querySelector(`#delete__${id}`));
      editButtons.push(document.querySelector(`#edit__${id}`));
    });

    deleteButtons.forEach(button => {
      button.addEventListener('click', e => {
        deleteAnimal(e.target.id.split('__')[1])
      })
    })

    editButtons.forEach(button => {
      button.addEventListener('click', e => {
        editAnimal(e.target.id.split('__')[1]);
      })
    })
    
  });

const deleteAnimal = id => {
  fetch(`http://localhost:3000/animals/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err))
};

// Programmatically navigating to a route
const editAnimal = id => {
  // http://animalshelter/animals
  window.location.href = `file:///Users/ivokostovski/Desktop/skwd9-js-05-nodejs-alm/Class07/client/add-animal/index.html?id=${id}`
}
