const API_URL = "https://swapi.co/api/";
const PEPLE_URL = "people/:id";

const searchUrl = `${API_URL}${PEPLE_URL.replace(":id", 1)}`;
const options = { crossDomain: true };

const obtenerPersonaje = (id, callback) => {
  const url = `${API_URL}${PEPLE_URL.replace(":id", id)}`;
  $.get(url, options, data => {
    
    if (callback) {
      callback();
    }
  });
};

obtenerPersonaje(1, () => {
  console.log(`Hola yo soy ${data.name}`);

  obtenerPersonaje(2, () => {
    console.log(`Hola yo soy ${data.name}`);

    obtenerPersonaje(3, () => {
      console.log(`Hola yo soy ${data.name}`);
      
      obtenerPersonaje(4);
    });
  });
});
