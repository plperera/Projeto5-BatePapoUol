
function importarChat(){

    console.log("estou importando o chat");
    const linhaMensagem = document.querySelector(".caixa-batepapo")

    linhaMensagem.innerHTML += 
    `
    <ul class="mensagem">
    <horario>(09:22:28)</horario>
    <usuario>João</usuario>
    <span>para</span>
    <usuario>Todos:</usuario>
    <mensagem>Bom dia</mensagem>
    </ul>
    `   
}

