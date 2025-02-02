//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let tipoFunção = "add";
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == ""){
        alert("Por favor, insira um nome!");
    }else{
        amigos.push(nomeAmigo);
        document.querySelector('input').value = "";
        alert(amigos);
        alert(amigos.length);        
    }criarLista();
}

function criarLista() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let novoItem = document.createElement('li');
        novoItem.textContent = amigos[i];
        lista.appendChild(novoItem);
    }
}

function sortearAmigo (){
    let sorteado = parseInt(Math.random()*amigos.length);
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 
    let novoItem = document.createElement('li');
    novoItem.textContent = amigos[sorteado];
    lista.appendChild(novoItem);
}