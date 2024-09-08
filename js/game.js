/* VARIAVEIS DE CONTROLE DO NOSSO JOGO */
const perguntasFeitas = [];

//PERGUNTAS DO JOGO
const pergunta = [
    //PERTUNTA 0
    {
        pergunta: "Qual dessas linguagens não é considerada uma linguagem de programação?", 
        respostas: ["HTML", "Java", "Python", "C++"],
        correta: "resp0"
    },
    //PERGUNTA 1
    {
        pergunta: "Em que ano o Brasil foi descoberto?", 
        respostas: ["1498", "1500", "1375", "1828"],
        correta: "resp1"
    },
    //PERGUNTA 2
    {
        pergunta: "O que significa a sigla HTML?", 
        respostas: ["Hyper Tonto Maluco Legal", "Hyper Text Markup Language", "Hyper Text Markup Linguagem", "Hyper Text Markup Largado"],
        correta: "resp1"
    },
    //PERGUNTA 3
    {
        pergunta: "Qual dessas liinguagens é considerada uma linguagem de marcação?", 
        respostas: ["Java", "Python", "HTML", "Javascript"],
        correta: "resp2"
    }
]

var qtdPerguntas = pergunta.length -1;
sortearPergunta(qtdPerguntas);

function sortearPergunta(maxPerguntas){
    //GERAR UM NÚMERO ALEATÓRIO
    let aleatorio = (Math.random() * maxPerguntas).toFixed();
    //CONVERTER PARA NÚMERO
    aleatorio = Number(aleatorio);
    //MOSTRAR NO CONSOLE QUAL FOI A PERGUNTA SORTEADA
    console.log('A pergunta sorteada foi a: ' + aleatorio);

    //VERIFICAR SE A PERGUNTA SORTEADA JÁ FOI FEITA
    if(!perguntasFeitas.includes(aleatorio)) {
            //COLOCAR COMO PERGUNTA FEITA
            perguntasFeitas.push(aleatorio);

            //PREENCHER O HTML COM OS DADOS DA QUESTAO SORTEADA
            var p_selecionada = pergunta[aleatorio].pergunta;
            console.log(p_selecionada);

            //ALIMENTAR A PERGUNTA VINDA DO SORTEIO
            $('#pergunta').html(p_selecionada);

            //ALIMENTAR AS RESPOSTAS VINDAS DO SORTEIO
            for(var i =0 ; i < 4; i++){
                $('#resp' + i).html(pergunta[aleatorio].respostas[i]);
            }

    //EMBARALHAR AS RESPOSTAS
    var pai = $('#respostas');
    var botoes = pai.children();

    for (var i = 1; i < botoes.length; i++){
        pai.append(botoes.eq(Math.floor(Math.random() * botoes.length)));
    }
}else{
    //SE A PERGUNTA JÁ FOI FEITA, CHAMAR A FUNÇÃO NOVAMENTE
    console.log('Pergunta já foi feita. Sorteando novamente...');
    if(perguntasFeitas.length <= maxPerguntas +1){
        return sortearPergunta(maxPerguntas);
    }else{
        console.log('Todas as perguntas já foram feitas');
    }
    }
}

$('.resposta').click(function(){
    //PERCORRER TODAS AS RESPOSTAS E DESMARCAR A CLASSE SELECIONADA
    $('.resposta').each(function(){
        if($(this).hasClass('selecionada')){
            $(this).removeClass('selecionada');
        }
    })
    //ADICIONAR A CLASSE SELECIONADA
    $(this).addClass('selecionada');
});