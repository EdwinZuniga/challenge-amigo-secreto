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

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Se necesitan al menos 2 participantes para realizar el sorteo');
        return;
    }

    // Si ya sorteamos todos los amigos, reiniciamos la lista
    if (amigosSorteados.length === listaAmigos.length) {
        amigosSorteados = [];
    }

    // Filtra los amigos que aún no han sido sorteados
    let amigosDisponibles = listaAmigos.filter(amigo => !amigosSorteados.includes(amigo));
    
    // Obtiene un amigo aleatorio de los disponibles
    let amigoSorteado = amigosDisponibles[Math.floor(Math.random() * amigosDisponibles.length)];
    
    // Agrega el amigo sorteado a la lista de sorteados
    amigosSorteados.push(amigoSorteado);

    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
