const formValues = () => {
    return {
        animalName: document.querySelector('#name').value,
        description: document.querySelector('#description').value,
        imgSrc: document.querySelector('#imgSrc').value,
    }
}

document.querySelector("#submit").addEventListener("click", () => {
    const animal = formValues();

    fetch('http://localhost:3000/animals', {
        method: "POST",
        body: JSON.stringify(animal),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(animal => {
        console.log(animal)
    })
});
