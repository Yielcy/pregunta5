import axios from 'axios';

function cargarDatos() {
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then(response => {
        const contenedorDiv = document.getElementById('contenedorDiv');
        const elemento = document.createElement('li');
    })
    .catch(e => {
        // Capturamos los errores
    })
    
}