import {
    mostrarAlerta, validarFormulario
} from './funciones.js';
import {
    createCliente
} from './API.js';

(function nuevoCliente() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const cliente = validarFormulario();
        if(cliente != null){
            createCliente(cliente);
        }
    });
})();