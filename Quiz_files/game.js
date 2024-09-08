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
    console.log(aleatorio);
}