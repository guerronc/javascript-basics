const API_URL = "https://swapi.co/api/";
const PEPLE_URL = "people/:id";

const searchUrl = `${API_URL}${PEPLE_URL.replace(":id", 1)}`;
const options = { crossDomain: true };

const obtenerPersonaje = id => {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEPLE_URL.replace(":id", id)}`;
    $.get(url, options, data => {
      resolve(data);
    }).fail(() => {
      reject(id);
    });
  });
};

function onError(id) {
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8];

var promesas = ids.map(id => {
  return obtenerPersonaje(id);
});

Promise
.all(promesas)
.then(personajes => console.log(personajes))
.catch(onerror)

