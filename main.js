const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((date) => (rederApiResult.textContent = JSON.stringify(date)))
    .catch((erro) => console.error(erro));
}

function getUser() {
  fetch(`${url}/1`)
    .then((response) => response.json())
    .then((date) => {
      oi.textContent = date.name;
      ola.textContent = date.city;
      re.src = date.avatar;
    })
    .catch((erro) => console.error(erro));
}

getUsers();
getUser();
