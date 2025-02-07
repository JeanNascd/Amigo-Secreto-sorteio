
let amigos = [];
var lista = document.getElementById('listaAmigos');

function adicionarAmigo(){
	var ListaAmigos = document.getElementById('amigo').value;
	if (ListaAmigos === "") {
		alert('Por favor, insira um nome.')
		return
	}
	else {
		amigos.push(ListaAmigos)

		document.getElementById('amigo').value = '';

		var nomeInserido = document.createElement('li');
		nomeInserido.innerHTML = ListaAmigos;

		lista.appendChild(nomeInserido);

		console.log(amigos)
	}
}

function atualizarAmigos() {
	
	lista.innerHTML = '';
}