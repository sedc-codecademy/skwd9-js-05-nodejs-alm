const statusMsg = document.querySelector("h1");
const loginBtn = document.querySelector("#login-btn");
const getAnimalsBtn = document.querySelector("#get-animals");
const animalsResult = document.querySelector("#animals-result");

let accessToken = null;
let refreshToken = null;

loginBtn.addEventListener("click", async () => {
  const values = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  const loginResponse = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await loginResponse.json();
  accessToken = data.accessToken;
  refreshToken = data.refreshToken;
  statusMsg.innerText = data.message;
});

getAnimalsBtn.addEventListener("click", () => {
  getAnimals();
});

const getAnimals = async () => {
  const response = await fetch("http://localhost:3000/api/animals", {
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  if (response.status === 403) {
    const refreshResponse = await fetch(
      "http://localhost:3000/api/auth/token",
      {
        method: "POST",
        body: JSON.stringify({ token: refreshToken }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (refreshResponse.ok) {
      const data = await refreshResponse.json();
      accessToken = data.accessToken;
      statusMsg.innerText = data.message;
      getAnimals();
    }
  }
  const animals = await response.json();

  if (animals?.message) {
    statusMsg.innerText = animals.message;
  } else {
    animalsResult.innerText = animals;
  }
};
