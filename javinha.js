
function importarChat(mensagem){

    console.log("estou importando o chat");
    const linhaMensagem = document.querySelector(".caixa-batepapo")
   

    for (let i = 0; i < mensagem.data.length; i++){
  
    linhaMensagem.innerHTML += 
    `
    <ul class="mensagem ${mensagem.data[i].type}">

    <horario>${mensagem.data[i].time}</horario>
    <usuario>${mensagem.data[i].from}</usuario>
    <span>para</span>
    <usuario>${mensagem.data[i].to}:</usuario>
    <mensagem>${mensagem.data[i].text}</mensagem>

    </ul>`   
    }
}
function importandoMensagemAPI(){
    
    const teste = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    teste.then(importarChat)
}

function fTeste(resposta){
    console.log(resposta.data.length)
}

importandoMensagemAPI()
/*
let objeto1 = {info1: 1, info2:2, info3:3}
let objeto2 = {info1: 10, info2:20, info3:30}
let listaObjetos = [objeto1, objeto2]

		from: "João",
		to: "Todos",
		text: "entra na sala...",
		type: "status",
		time: "08:01:17"
*/
