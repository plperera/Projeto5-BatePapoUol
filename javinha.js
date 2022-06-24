let from = "zezin doido";
let to = "Todos";
let type;
let time;

function importarChat(mensagem){

    console.log("estou importando o chat");
    console.log(mensagem.data)

    const linhaMensagem = document.querySelector(".caixa-batepapo")
    linhaMensagem.innerHTML = ""

    for (let i = 0; i < mensagem.data.length; i++){

        if (mensagem.data[i].text === "sai da sala..." || mensagem.data[i].text === "entra na sala..." ||  mensagem.data[i].text === "entrou na sala..." ){

            ///mensagem de status, usar horario + usuario + textoStatus

                linhaMensagem.innerHTML += 
                `
                <ul class="mensagem ${mensagem.data[i].type}">
            
                <horario> (${mensagem.data[i].time})</horario>
                <usuario>${mensagem.data[i].from}</usuario>
                <mensagem>${mensagem.data[i].text}</mensagem>
            
                </ul>`  

        } else if (mensagem.data[i].type === "private_message"){

            //mensagem privada, mudar o "to" para "reservadamente para"

                linhaMensagem.innerHTML += 
                `
                <ul class="mensagem ${mensagem.data[i].type}">
            
                <horario> (${mensagem.data[i].time})</horario>
                <usuario>${mensagem.data[i].from}</usuario>
                <span> reservadamente para </span>
                <usuario>${mensagem.data[i].to}:</usuario>
                <mensagem>${mensagem.data[i].text}</mensagem>
            
                </ul>`  

        } else {

            //mensagem para alguem especifico, mas nao privada o "alvo"

                linhaMensagem.innerHTML += 
                `
                <ul class="mensagem ${mensagem.data[i].type}">
            
                <horario> (${mensagem.data[i].time})</horario>
                <usuario>${mensagem.data[i].from}</usuario>
                <span> para </span>
                <usuario>${mensagem.data[i].to}:</usuario>
                <mensagem>${mensagem.data[i].text}</mensagem>
            
                </ul>`  
        }
    }
}
function importandoMensagemAPI(){
    
    const teste = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    teste.then(importarChat)
}
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
function enviarTexto(){
    
    if(document.querySelector("input").value !== ""){

    let textoTotal= { 
        from:from,
        to:"Todos",
        text: document.querySelector("input").value,
        type:"message",
    }

    const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', textoTotal);

    promessa.then(quandoSucesso);
    promessa.catch(quandoErro);

    text: document.querySelector("input").value = ""
  
    }   
}
function pegaNome(){
    from = prompt("Para entrar no chat precisaremos do seu nome ou numero do cartão");
    const testeee = {
        name:from
    }

    let promise = axios.post(
        "https://mock-api.driven.com.br/api/v6/uol/participants",
        testeee
      );

      promise.then(quandoSucesso);

      promise.catch(quandoErro);

      
}
function quandoSucesso(){
   console.log("deu")
}
function quandoErro(){
    alert("Algo de errado não está certo !?!")
    pegaNome()
 }
 pegaNome()

 setInterval( importandoMensagemAPI, 1000);
 setInterval( toLigado, 5000);
 function toLigado(){
    const testeee = {
        name:from
    }
    let promise = axios.post(
        "https://mock-api.driven.com.br/api/v6/uol/status",
        testeee
      );

      promise.catch(quandoErro);
 }