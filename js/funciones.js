export function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('bg-red-100');

    if (!alerta) {
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'rounded', 'px-4', 'py-3', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
}

export function validarFormulario() {
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    };

    if (validarCampos(cliente)) {
        return cliente;
    } else {
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }
}

function validarCampos(objeto) {
    return Object.values(objeto).every(input => input !== '');
}