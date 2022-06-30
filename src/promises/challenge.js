const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

//hacemos las 3 llamadas anidadas con callback.
//1. obtiene todos los personajes
fetchData(API)
    .then(data => {
        console.log(data.info.count);
        //2. obtiene el primer personaje
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        //3. obtiene el origen del personaje
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(error => console.error(error));
