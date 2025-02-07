
let amigos = [];
var lista = document.getElementById('listaAmigos');

function adicionarAmigo(){
	var ListaAmigos = document.getElementById('amigo').value;
	if (ListaAmigos === "") {
		alert('Por favor, insira um nome.')
		return
	}
		amigos.push(ListaAmigos)
		document.getElementById('amigo').value = '';

		atualizarAmigos();
}

function atualizarAmigos() {
	lista.innerHTML = '';

	for (let i = 0; i < amigos.length; i++) {
		var nomeInserido = document.createElement('li');
		nomeInserido.innerHTML = amigos[i];
		lista.appendChild(nomeInserido);
	}
}