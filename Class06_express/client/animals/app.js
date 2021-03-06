const animalsContainer = document.querySelector(".row");

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
    });

    document
      .querySelector("#delete__8098f0a1-9cdf-46fa-af32-95b6ce8f03b0")
      .addEventListener("click", () => {
        fetch(`http://localhost:3000/animals/8098f0a1-9cdf-46fa-af32-95b6ce8f03b0`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(res => console.log(res));
      });
  });
