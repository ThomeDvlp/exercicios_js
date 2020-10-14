/* Como chamar os comandos do html*/
var texto = document.querySelector("#gameText");
var botao1 = document.querySelector("#btn-1");
var botao2 = document.querySelector("#btn-2");


function iniciarJogo () {
    
    botao1.onclick = Start;
}

function Start() {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Depois de uma noite de sonhos muito estranhos vc desperta  muito assustado, mas abrir os olhos repara que está em uma caverna completametne escura. O QUE VOCÊ IRÁ FAZER?    ";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "inline-block";

   
    /* O texto no corpo dos botões. */
    botao1.innerText = "Acordo, levanto e tento examinar o espaço";
    botao2.innerText = "Continuo deitado e volto a dormir pois ainda estou sonhando";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = levanto;
    botao2.onclick = deitado;
}
function levanto(){
    texto.textContent = "A caverna está completamente escura, e vc percebe que estava deitado dentro de um saco de dormir. Enquanto se laventa encontra um telefone celular que está com a carga completa. O que vc faz?"
    botao1.innerText = "Mantenho ela desligada pra economizar bateria";
    botao2.innerText = "Ligo o celular e uso como lanterna";

    botao1.onclick  = desligado;
    botao2.onclick = ligado;
}
function deitado(){
    texto.textContent = "Você não estava sonhando... Uma Python gigante te achou, te devorou, já era volte pro começo do seu sonho-pesadelo na Caverna Escura"
    botao1.innerText = "Reset";    
    botao2.innerText = "none";
   
    botao1.onclick  = iniciarJogo;
    
}
function ligado(){
    texto.textContent = "Ao ligar a lanterna revela-se uma câmara com a altura de 7 metros, cheia de estalagmites e estalactites, ela é um hub central de um conjunto de galerias e você percebe umas inscrições diabólicas em um dos cantos onde se prepara um altar de sacrifícios todo sujo de sangue seco. Você entra em pânico e sai correndo desesperado. A Python Gigante te encontra e te devora. Volte ao seu sonho-pesadelo na Caverna Escura."
    botao1.innerText = "Reset";    
    botao2.style.display = "none";

    botao1.onclick = iniciarJogo;
}
function desligado(){
    texto.textContent = "Apesar de toda  escuridão, seus olhos se acostumam com o breu e seus sentidos vão se aguçando.Você consegue sentir uma corrente de ar fresco e um barulho de água escorrendo. Com passos cuidadosos você vai tateando um caminho em direção a entrada da brisa fresca?"
    botao1.innerText = "Ir para o lado oposta da brisa";    
    botao2.innerText = "Andar em direção ao barulho da água";

    botao1.onclick = caminha;
    botao2.onclick = segue;
}

function segue(){
    texto.textContent = "Ao seguir seus instintos primordiais em direção a brisa e o som da água. Lentamente vc observa que ao fundo desse caminho tem  uma entrada de luz. Vai seguindo em direção e tudo vai ficando mais claro. De repente você encontra uma câmara com abertura total do teto, e o telefone toca. Você atende e é uma equipe de resgate te informando que vc será içado Você está salvo!!!!"
    botao1.innerText = "PARABÉNS! VOCÊ SOBREVIVEU!!!"; 
    

    botao1.onclick = iniciarJogo;
    botao2.onclick = none;
}
function caminha(){
    texto.textContent = "Você andou pro lado oposto da saída, e enconotrou a Pyhton Gigantee que te deva! Volte ao seu sonho-pesadelo na Caverna Escura!!!"
    botao1.innerText = "Reset"; 
    botao2.innerText = "none";

    botao1.onclick = iniciarJogo;
   
}

iniciarJogo();