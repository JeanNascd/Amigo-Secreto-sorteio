
let amigos = [];

function adicionarAmigo(){
	var ListaAmigos = document.getElementById('amigo').value;
	if (ListaAmigos === "") {
		alert('Por favor, insira um nome.')
		return
	}
	else {
		amigos.push(ListaAmigos)
		console.log(amigos)
	}
}