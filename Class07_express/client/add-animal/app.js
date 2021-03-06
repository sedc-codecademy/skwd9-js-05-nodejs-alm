const formValues = () => {
  return {
    animalName: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    imgSrc: document.querySelector("#imgSrc").value,
  };
};

let id = null;

document.querySelector("#submit").addEventListener("click", () => {
  const animal = formValues();
  if (id) {
    animal.id = id
  }

  fetch(`http://localhost:3000/animals/${id || ''}`, {
    method: !id ? "POST" : "PUT",
    body: JSON.stringify(animal),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(animal => {
      setTimeout(() => {
        window.location.href =
        "file:///Users/ivokostovski/Desktop/skwd9-js-05-nodejs-alm/Class07/client/animals/index.html";
      })
    });
});

(() => {
  let queryParams = window.location.search;

  if (queryParams) {
    id = queryParams.split("=")[1];

    fetch(`http://localhost:3000/animals/${id}`)
      .then(res => res.json())
      .then(animal => {
        document.querySelector("#name").value = animal.animalName;
        document.querySelector("#description").value = animal.description;
        document.querySelector("#imgSrc").value = animal.imgSrc;
        id = animal.id;
      });
  }
})();
