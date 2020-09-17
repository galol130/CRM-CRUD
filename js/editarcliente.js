import {
    updateCliente,
    getCliente
} from './API.js';
import {
    validarFormulario
} from './funciones.js';

(function () {
    //Obtengo el id que se envía en la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    const id = parseInt(parametrosURL.get('id'));

    //Primero cargo los datos del cliente a editar
    document.addEventListener('DOMContentLoaded', async () => {
        const clienteActual = await getCliente(id);
        const {
            nombre,
            email,
            telefono,
            empresa
        } = clienteActual;

        document.querySelector('#nombre').value = nombre;
        document.querySelector('#email').value = email;
        document.querySelector('#telefono').value = telefono;
        document.querySelector('#empresa').value = empresa;
        document.querySelector('#id').value = id;
    })

    //Valido y guardo los cambios
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', async(e) => {
        e.preventDefault();
        const clienteModificado = validarFormulario();
        console.log(clienteModificado);
        if (clienteModificado != null) {
            try {
                await updateCliente(id, clienteModificado);
            } catch (error) {
                console.log(error);
            }
        }
        else{
            return;
        }
    })

})();