let listaAmigos = [];
let amigosSorteados = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validación de campo vacío
    if (nombre === '') {
        alert('Porfavor ingrese un nombre valido');
        return;
    }
    
    // Agrega el nombre a la lista
    listaAmigos.push(nombre);
    
    // Limpia el input
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}
