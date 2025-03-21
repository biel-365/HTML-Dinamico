// Criando a função de flecha com frases aleatórias
const falar = () => {
    //Criando o vetor de frases
    const frases = [
        "Eu nar aguento mais... Quero sexta-feira as 17:50!",
        "Conserta meu estômago",
        "Pegou a quest?",
        "Só tem um jeito de descobrir...",
    ];


// Criando uma variável pra armazenar a div com id "tagarela"

let tagarela = document.getElementById("tagarela");

//Criando variável de controle (0) para uma frase exibida
let indice = 0


// Criando variável para número aleatório entre 0 e 1 (lembrando que o 1 não entra na conta)
let numero = Math.random()

// Configurando o número para a frase selecionada
if(numero>0.75)
    indice = 3;
else if(numero>0.50)
    indice = 2;
else if(numero>0.25)
    indice = 1;

// Mostrando as frases para o usuário
tagarela.innerHTML = frases[indice];

}