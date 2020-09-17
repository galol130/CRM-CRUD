const url = 'http://localhost:2000/clientes';

//Create elemento en la BD
export const createCliente = async (objeto) => {
    console.log(objeto);
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(objeto),
            headers: {
                'Content-type': 'application/json'
            }
        })
        window.location.href = 'index.html';
        window.alert('Cliente cargado a la BD');
    } catch (error) {
        console.log(error);
    }

}

//Read todos elementos de la BD
export const listarClientes = async () => {
    try {
        let response = await fetch(url);
        let respuesta = await response.json();
        return respuesta;

    } catch (error) {
        console.log(error);
    }
}

//Delete elemento de la BD con un id
export const deleteCliente = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}

//Read un solo elemento de la BD
export const getCliente = async (id) => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const cliente = await respuesta.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//Update elemento de la BD con un id
export const updateCliente = async (id, objeto) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(objeto),
            headers: {
                'Content-type': 'application/json'
            }
        })
        window.location.href = 'index.html';
        window.alert('Cliente actualziado');
    } catch (error) {
        console.log(error);
    }
}