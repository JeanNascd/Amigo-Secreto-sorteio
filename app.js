
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

function sortearAmigo() {
	if (amigos.length === 0) {
		alert('Por favor, insira amigos para sortear')
		return
	}
    let indice = Math.floor(Math.random() * amigos.length)
	
	let amigoSorteado = amigos[indice];

	resultado.innerHTML = '';
	var li = document.createElement('li');
	li.innerHTML = `${amigoSorteado}`;
	resultado.appendChild(li);

	console.log(amigoSorteado);
}