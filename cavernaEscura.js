
var texto = document.getElementById("mensagem");
var botao1 = document.querySelector("#btn-1");
var botao2 = document.querySelector("#btn-2");
var titulo = document.querySelector('.intro');
var restart = document.createElement("div");


function iniciarJogo () {
            
    botao1.onclick = Start;
    botao2.onclick = Start;
    
}

function Start() {
   
    texto.textContent = "Depois de uma noite muito sinistra, e recheada de sonhos bizarros vc desperta na Caverna Escura. O Breu da escuridão é tão denso que vc não consegue enxergar um palmo a frente do seu nariz, seem referência de chã, céu e norte. Não há pistas nenhuma de como você chegou nesse cenário. Descubra se você está sonhando, tendo um pesadelo, ou é a mais pura e tenebrosa realidade. O quê fazer?!?";

       
    
    botao1.innerText = "Enfrenta o medo, o desconforto, e levanta-se em busca de uma luz em sua razão";
    botao2.innerText = "Volta a dormir, afinal isso tudo não passa de um simples e sombrio pesadelo";
        
    
    botao1.onclick = levanto;
    botao2.onclick = deitado;
}
function levanto(){
    texto.textContent = "O ambiente completamente escuro é frio é úmido, escuta-se um gotejar incessante de diversos pontos próximos. Você estava deitado dentro de um saco de dormir que foi devidamente posicionado sobre um isolante térmico. Sua única recordação é de que estava em um cocktal  de boas vindas na empresa em vc tinha acabado de ser contratado:  Google!   Ao sair do saco de dormir vc tateia todo o perímetro que estava em seu entorno e acha um aparelho smartphone que estava bem próximo de onde encontrava-se a sua cabeça enquanto estava deitado. Você consegue liga-lo, é um Pixel 4. Ele está com a bateria completamente carregada, mas não possui nenhum sinal de rede: Como você procede?"
    botao1.innerText = "Desligo ele pra economizar bateria";
    botao2.innerText = "Mantenho ligado celular e uso a luz do flash como lanterna";

    botao1.onclick  = desligado;
    botao2.onclick = ligado;
}
function deitado(){
    document.body.style.backgroundImage = 'url("/imagens_jogo_a20/python.jpg")';
    texto.textContent = "Você não estava sonhando... Uma Python gigante te achou, te devorou, já era volte pro começo do seu sonho-pesadelo na Caverna Escura";
    botao2.remove();
    botao1.remove();
    titulo.remove();
   

    var newLink = document.createElement("a");
    newLink.setAttribute("href", "/");
    // Add some text
    newText = document.createTextNode("Restart");
  
    // document.createElement('a'{})
    
    botao1.innerText = "Reset";    
    botao2.innerText = "Você já era!!!";
   
    botao1.onclick  = iniciarJogo;
    botao2.onclick  = iniciarJogo;
}
function ligado(){
    document.body.style.backgroundImage = 'url("/imagens_jogo_a20/python.jpg")';
    
    texto.textContent = "A fraca luz da lanterna é capaz de revelar a câmara subterrânea que vc está. Aparentemente a altura é de 7 metros, e ela está cheia de estalagmites e estalactites ao lado de onde vc se encontrava deitado. O comprimento dela é mais extenso e você não consegue visualiza-lo ao todo com essa pequena fonte de luz. Você encontra uma trilha de sangue e resolve seguir... A Python Gigante acaba te encontrando e vc foi devorado! volta pro começo do seu 'sonho-pesadelo' dentro do saco de dormir"
    botao2.remove();
    botao1.remove();
    titulo.remove(); 
    botao1.innerText = "Reset";    
    botao2.innerText = "Já era!!!";

    botao1.onclick = iniciarJogo;
    botao2  .onclick = iniciarJogo;
}
function desligado(){
    texto.textContent = "Mesmo sem enxergar onde você realmente está, seus instintos se aguçaram. É possível sentir agora uma corrente de ar fresco vindo de um local da caverna, e por detrás da melodia de gotas que caem constantemente ouve-se o som de água corrente, provavelmente é um rio subterrâneo que não está muito longe. Com passos cautelosos você avança:"
    botao1.innerText = "Em direção ao barulho da água";    
    botao2.innerText = "Em direção a corrente da brisa fresca   ";

    botao1.onclick = segue;
    botao2.onclick = caminha;
}

function segue(){
    document.body.style.backgroundImage = 'url("/imagens_jogo_a20/saidaCaverna.jpg")';
    texto.textContent = "Ao seguir seus instintos primordiais em direção a brisa fresca vacê avança lentamete. Quanto mais você anda você vai percebendo que bem ao fundo desse caminho tem  uma entrada de luz. Ao seguir em direção dela tudo vai ficando cada vez mais claro. De repente você se encontra em uma câmara com abertura total do teto, e o telefone toca. É uma mesagem de texto dizendo:Parabéns Você está salvo! A Equipe de salvamento vai te tirar dessa roubada!!! Você acaba de garantir o grande prêmio =  {Suas próximas férias serão na estação de esqui italiana: Madona di Campiglio}"
    botao2.remove();
    botao1.remove();
    titulo.remove();
    botao1.innerText = "Viva,Viva,Viva!!!"; 
    botao2.innerText = "Viva,Viva,Viva!!! PARABÉNS! VOCÊ SOBREVIVEU";

    botao1.onclick = iniciarJogo;
    botao2.onclick = iniciarJogo;
}
function caminha(){

    document.body.style.backgroundImage = 'url("/imagens_jogo_a20/saidaCaverna.jpg")';
    texto.textContent = "Ao ouvir a sinfonia da voz das águas você enconotrou o rio subterrâneo que te levu até um ponto do sistema de galerias subterrânes onte o teto tinha uma abertura e nesse momento o seu telefone recebe uma mesagem: Parabéns Você está salvo! A Equipe de salvamento vai te tirar dessa roubada!!! Você acaba de garantir o grande prêmio = {Suas próximas férias serão no Thaiti}"
    botao2.remove();
    botao1.remove();
    titulo.remove();
    botao1.innerText = "PARABÉNS! VOCÊ SOBREVIVEU!!!"; 
    botao2.innerText = "PARABÉNS! VOCÊ SOBREVIVEU!!! Viva,Viva,Viva!!!";

    botao1.onclick = iniciarJogo;
    botao2.onclick = iniciarJogo;
   
}

iniciarJogo();