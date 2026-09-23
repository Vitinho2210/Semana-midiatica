// ==============================
// PERGUNTAS DO QUIZ
// ==============================

const perguntas = [

    {
        pergunta: "O que significa IoT?",
        alternativas: [
            "Internet of Things",
            "Information of Technology",
            "Internet of Technology",
            "Integration of Things"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual é o principal objetivo do Green IoT?",
        alternativas: [
            "Aumentar o consumo de energia dos dispositivos",
            "Unir IoT e sustentabilidade para reduzir impactos ambientais",
            "Criar redes sociais sustentáveis",
            "Substituir completamente a energia elétrica"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual destas fontes é considerada uma fonte de energia renovável?",
        alternativas: [
            "Carvão mineral",
            "Petróleo",
            "Energia solar",
            "Gás natural"
        ],
        resposta: 2
    },

    {
        pergunta: "Como sensores podem contribuir para a sustentabilidade?",
        alternativas: [
            "Aumentando o desperdício de recursos",
            "Monitorando e otimizando o uso de recursos",
            "Impedindo a coleta de dados",
            "Eliminando a necessidade de tecnologia"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual recurso pode ser economizado utilizando IoT em sistemas inteligentes?",
        alternativas: [
            "Água",
            "Energia",
            "Combustível",
            "Todas as alternativas"
        ],
        resposta: 3
    },

    {
        pergunta: "O que caracteriza uma tecnologia sustentável?",
        alternativas: [
            "Alto consumo de recursos",
            "Redução dos impactos ambientais",
            "Uso obrigatório de combustíveis fósseis",
            "Descarte constante de equipamentos"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual exemplo representa o uso de Green IoT em uma residência?",
        alternativas: [
            "Luzes inteligentes que desligam quando não há ninguém no ambiente",
            "Manter todas as luzes ligadas durante o dia",
            "Aumentar o consumo de energia",
            "Desativar sensores de presença"
        ],
        resposta: 0
    },

    {
        pergunta: "Como a IoT pode ajudar na agricultura sustentável?",
        alternativas: [
            "Aumentando o desperdício de água",
            "Monitorando condições do solo e controlando a irrigação",
            "Eliminando sensores das plantações",
            "Aumentando o uso de recursos sem controle"
        ],
        resposta: 1
    },

    {
        pergunta: "O que é eficiência energética?",
        alternativas: [
            "Usar mais energia para realizar uma tarefa",
            "Usar energia de forma mais eficiente, evitando desperdícios",
            "Eliminar completamente o uso de energia",
            "Utilizar somente combustíveis fósseis"
        ],
        resposta: 1
    },

    {
        pergunta: "Qual tecnologia pode ser utilizada para monitorar o consumo de energia?",
        alternativas: [
            "Sensores inteligentes",
            "Máquinas de escrever",
            "Rádio analógico",
            "Equipamentos sem conexão"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual destes ambientes pode utilizar soluções de Green IoT?",
        alternativas: [
            "Cidades",
            "Indústrias",
            "Residências",
            "Todos os anteriores"
        ],
        resposta: 3
    },

    {
        pergunta: "Como o Green IoT pode contribuir para cidades inteligentes?",
        alternativas: [
            "Otimizando iluminação, trânsito e consumo de recursos",
            "Aumentando o desperdício",
            "Eliminando sistemas de monitoramento",
            "Aumentando o consumo de energia"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual é uma vantagem do monitoramento em tempo real proporcionado pela IoT?",
        alternativas: [
            "Dificulta a tomada de decisões",
            "Permite identificar desperdícios e problemas rapidamente",
            "Impede a coleta de informações",
            "Aumenta obrigatoriamente o consumo"
        ],
        resposta: 1
    },

    {
        pergunta: "O que pode acontecer quando dispositivos IoT são projetados para consumir menos energia?",
        alternativas: [
            "A eficiência energética pode aumentar",
            "O desperdício sempre aumenta",
            "Os dispositivos deixam de funcionar automaticamente",
            "A sustentabilidade deixa de ser possível"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual destas opções representa uma aplicação ambiental da IoT?",
        alternativas: [
            "Monitoramento da qualidade do ar",
            "Aumento da poluição",
            "Descarte de sensores em rios",
            "Desperdício de água"
        ],
        resposta: 0
    },

    {
        pergunta: "Por que os dados são importantes no Green IoT?",
        alternativas: [
            "Porque ajudam a identificar padrões e melhorar o uso de recursos",
            "Porque aumentam obrigatoriamente o desperdício",
            "Porque substituem todas as fontes de energia",
            "Porque eliminam a necessidade de sensores"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual prática contribui para reduzir o impacto ambiental de dispositivos eletrônicos?",
        alternativas: [
            "Descarte incorreto",
            "Aumentar o desperdício eletrônico",
            "Reciclagem e descarte adequado",
            "Trocar dispositivos sem necessidade"
        ],
        resposta: 2
    },

    {
        pergunta: "Qual é a relação entre IoT e sustentabilidade?",
        alternativas: [
            "A IoT pode utilizar dados e automação para tornar processos mais eficientes",
            "A IoT impede qualquer economia de recursos",
            "A sustentabilidade elimina a necessidade de tecnologia",
            "Não existe relação entre as duas áreas"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual destas opções é um exemplo de automação sustentável?",
        alternativas: [
            "Sistema de irrigação que libera água somente quando necessário",
            "Irrigação contínua sem sensores",
            "Luzes ligadas 24 horas por dia",
            "Uso de energia sem monitoramento"
        ],
        resposta: 0
    },

    {
        pergunta: "Qual é uma das principais contribuições do Green IoT para o futuro?",
        alternativas: [
            "Promover o uso mais eficiente dos recursos e reduzir impactos ambientais",
            "Aumentar o desperdício de recursos",
            "Eliminar todas as tecnologias conectadas",
            "Aumentar o consumo de energia"
        ],
        resposta: 0
    }

];


// ==============================
// VARIÁVEIS
// ==============================

let perguntaAtual = 0;
let acertos = 0;


// ==============================
// ELEMENTOS DO HTML
// ==============================

const contador = document.getElementById("contador");
const pontuacao = document.getElementById("pontuacao");
const progresso = document.getElementById("progresso");

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");

const botaoProxima = document.getElementById("proxima");

const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const acertosFinal = document.getElementById("acertos-final");
const porcentagem = document.getElementById("porcentagem");

const botaoReiniciar = document.getElementById("reiniciar");


// ==============================
// MOSTRAR PERGUNTA
// ==============================

function mostrarPergunta() {

    const perguntaAtualObj = perguntas[perguntaAtual];

    pergunta.textContent = perguntaAtualObj.pergunta;

    contador.textContent =
        `Questão ${perguntaAtual + 1} de ${perguntas.length}`;

    pontuacao.textContent =
        `Acertos: ${acertos}`;

    // Atualiza a barra de progresso
    const progressoAtual =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    progresso.style.width = `${progressoAtual}%`;

    // Limpa as alternativas anteriores
    alternativas.innerHTML = "";

    // Desativa o botão de próxima questão
    botaoProxima.disabled = true;

    // Cria as alternativas
    perguntaAtualObj.alternativas.forEach((alternativa, index) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.classList.add("alternativa");

        botao.addEventListener("click", () => {

            verificarResposta(index);

        });

        alternativas.appendChild(botao);

    });

}


// ==============================
// VERIFICAR RESPOSTA
// ==============================

function verificarResposta(indiceSelecionado) {

    const respostaCorreta =
        perguntas[perguntaAtual].resposta;

    const botoes =
        document.querySelectorAll(".alternativa");

    // Impede que o usuário responda novamente
    botoes.forEach(botao => {

        botao.disabled = true;

    });


    if (indiceSelecionado === respostaCorreta) {

        acertos++;

        botoes[indiceSelecionado].classList.add("correta");

    } else {

        botoes[indiceSelecionado].classList.add("errada");

        botoes[respostaCorreta].classList.add("correta");

    }


    pontuacao.textContent =
        `Acertos: ${acertos}`;

    botaoProxima.disabled = false;

}


// ==============================
// PRÓXIMA PERGUNTA
// ==============================

botaoProxima.addEventListener("click", () => {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

});


// ==============================
// RESULTADO FINAL
// ==============================

function mostrarResultado() {

    quiz.classList.add("hidden");

    resultado.classList.remove("hidden");

    const porcentagemFinal =
        (acertos / perguntas.length) * 100;

    acertosFinal.textContent = acertos;

    porcentagem.textContent =
        `${porcentagemFinal}%`;

}


// ==============================
// REINICIAR QUIZ
// ==============================

botaoReiniciar.addEventListener("click", () => {

    perguntaAtual = 0;

    acertos = 0;

    resultado.classList.add("hidden");

    quiz.classList.remove("hidden");

    mostrarPergunta();

});


// ==============================
// INICIAR QUIZ
// ==============================

mostrarPergunta();