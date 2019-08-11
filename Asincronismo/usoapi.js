const API_URL = "https://swapi.co/api/";
const PEPLE_URL = "people/:id";


const searchUrl = `${API_URL}${PEPLE_URL.replace(":id", 1)}`; 
const options = { crossDomain: true }

const onResponse = (data) =>{
    console.log(`Hola yo soy ${data.name}`);
};

const obtenerPersonaje = (id) => {
    const url = `${API_URL}${PEPLE_URL.replace(":id", id)}`;
    $.get(url, options, onResponse);
}

obtenerPersonaje(1);

obtenerPersonaje(2);

obtenerPersonaje(3);

obtenerPersonaje(4);
