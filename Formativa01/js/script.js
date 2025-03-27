console.log("----------Atividade 1----------");

const exercicio1 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = " | ";
  for (let i = 1; i <= 10; i++) {
    resultado += i + " | ";
  }

  resposta.innerHTML = resultado;
};

console.log("----------Atividade 2----------");
const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "";
    erro.innerHTML = "";

    for (let i = 0; i <= numero; i += 2) {
      resultado.innerHTML += i + " ";
    }
  }
};

console.log("----------Atividade 3----------");

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  }

  let Primo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      Primo = false;
    }
  }

  if (Primo == true) {
    resultado.innerHTML = numero + " é um número primo";
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = numero + " não é um número primo";
    erro.innerHTML = "";
  }
};

console.log("----------Atividade 4----------");
const exercicio4 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  resultado.innerHTML = "";

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
  }
  erro.innerHTML = "";
};

console.log("----------Atividade 5----------");
const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    let i = 1;
    let resultadoTexto = "";

    while (i <= numero) {
      resultadoTexto += i + " ";
      i += 2;
    }
    resultado.innerHTML = resultadoTexto;
  }
};

console.log("----------Atividade 6----------");
const exercicio6 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    erro.innerHTML = "";
    let soma = 0;
    let i = 0;

    while (i <= numero) {
      soma += i;
      i += 2;
    }
    resultado.innerHTML = "Soma: " + soma;
  }
};

console.log("----------Atividade 7----------");
const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let resultado = " | ";
  let contador = 10;

  while (contador >= 1) {
    resultado += contador + " | ";
    contador--;
  }
  resposta.innerHTML = "<h2>Resposta da Atividade</h2><p>" + resultado + "</p>";
};

const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  resultado.innerHTML = "";
  erro.innerHTML = "";

  let palavraInvertida = "";

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  resultado.innerHTML = `A palavra invertida é: ${palavraInvertida}`;

  if (palavra == palavraInvertida) {
    resultado.innerHTML += "<br>A palavra é um palíndromo";
  } else {
    resultado.innerHTML += "<br>A palavra não é um palíndromo";
  }
};

console.log("----------Atividade 9----------");
const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let soma = 0;

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }

  resposta.innerHTML = `A soma dos números de 1 a 100 é: ${soma}`;
};

console.log("----------Atividade 10----------");
let soma = 0;
let contador = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  if (numero >= 0) {
    soma += parseInt(numero);
    contador++;
  }
  resultado.innerHTML = `Média: ${soma / contador}`;
  erro.innerHTML = "";
};

console.log("-----------Atividade 11-----------");
const exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  let textoResultado = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      textoResultado += i + " ";
    }
  }

  resposta.innerHTML = "Múltiplos de 3 de 1 a 100: " + textoResultado;
};

console.log("----------Atividade 12----------");
const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let soma = 0;

  if (numero < 0) {
    erro.innerHTML = "Coloque um número positivo!";
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "";
    for (let i = 0; i < numero.length; i++) {
      soma += parseInt(numero[i]);
    }
    resultado.innerHTML = `Soma dos números digitados ${numero} é ${soma}`;
  }
};

console.log("----------Atividade 13----------")
const exercicio13 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let primos = "";

  if (num1 > num2) {
      erro.innerHTML = "O primeiro número tem que ser menor que o segundo.";
      resultado.innerHTML = "";
  } else {
      erro.innerHTML = "";
      for (let i = num1; i <= num2; i++) {
          let Primo = i > 1;
          for (let j = 2; j < i; j++) {
              if (i % j === 0) {
                  Primo = false;
              }
          }
          if (Primo) {
              primos += i + " ";
          }
      }
      resultado.innerHTML = "Números primos entre " + num1 + " e " + num2 + ": " + primos;
  }
};

console.log("----------Atividade 14----------")
const exercicio14 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (num1 <= 0 || num2 <= 0) {
      erro.innerHTML = "Os valores devem ser maiores que zero.";
      resultado.innerHTML = "";
  } else {
      let area = num1 * num2;
      erro.innerHTML = "";
      resultado.innerHTML = "A área do retângulo é " + area;
  }
};

console.log("----------Atividade 15----------")
const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value.toLowerCase();
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let vogais = "aeiou";
  let vogal = "";
  let consoante = "";

  if (palavra.trim() === "") {
      erro.innerHTML = "Digite uma palavra!";
      resultado.innerHTML = "";
  } else {
      erro.innerHTML = "";
      for (let i = 0; i < palavra.length; i++) {
          if (vogais.includes(palavra[i])) {
              vogal += palavra[i] + " ";
          } else if (palavra[i].match(/[a-z]/)) {
              consoante += palavra[i] + " ";
          }
      }
      resultado.innerHTML = `Vogais: ${vogal} <br> Consoantes: ${consoante}`
  }
};

console.log("----------Atividade 16----------")
const exercicio16 = () => {
  let raio = document.getElementById("num1").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  if (raio <= 0) {
      erro.innerHTML = "Digite um valor válido para o raio!";
      resultado.innerHTML = "";
  } else {
      let area = 3.14 * (raio * raio);
      erro.innerHTML = "";
      resultado.innerHTML = "Área da circunferência: " + area;
  }
};

const exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  if (base <= 0 || altura <= 0) {
      erro.innerHTML = "Digite valores válidos!";
      resultado.innerHTML = "";
  } else {
      let area = (base * altura) / 2;
      erro.innerHTML = "";
      resultado.innerHTML = "Área do triângulo: " + area;
  }
};

const exercicio18 = () => {
  let baseMaior = document.getElementById("num1").value;
  let baseMenor = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
      erro.innerHTML = "Digite valores válidos!";
      resultado.innerHTML = "";
  } else {
      let area = ((baseMaior + baseMenor) * altura) / 2;
      erro.innerHTML = "";
      resultado.innerHTML = "Área do trapézio: " + area;
  }
};

const exercicio19 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let letra = document.getElementById("letra").value;
  let palavra = document.getElementById("palavra").value;
  let vogais = ['a', 'e', 'i', 'o', 'u'];


  if (letra.length > 1) {
      erro.innerHTML = 'Digite apenas uma letra';
      resultado.innerHTML = '';
  } else {
      palavra = palavra.toLowerCase();
      let palavraVetor = palavra.split('');
      for (let i = 0; i < palavraVetor.length; i++) {
          if (vogais.includes(palavraVetor[i])) {
              palavraVetor[i] = letra; 
          }
      }
      palavra = palavraVetor.join('');
      resultado.innerHTML = `A palavra resultante é: ${palavra}`;
      erro.innerHTML = '';
  }
}

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  if (frase === "") {
      erro.innerHTML = "Digite uma frase!";
      resultado.innerHTML = "";
  } else {
      erro.innerHTML = "";
      let fraseInvertida = frase.split("").reverse().join("");
      resultado.innerHTML = "Frase invertida: " + fraseInvertida;
  }
};

const exercicio21 = () => {
  let frase = document.getElementById("frase").value;
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  if (frase === "") {
      erro.innerHTML = "Digite uma frase!";
      resultado.innerHTML = "";
  } else {
      erro.innerHTML = "";
      let semEspaco = frase.replace(/\s/g, "");
      resultado.innerHTML = "Frase sem espaços: " + semEspaco;
  }
};

const exercicio22 = () => {
  let soma = 0;
  let num = parseInt(document.getElementById("num").value);

  while (soma < 100) {
    soma += num;
    if (soma >= 100) break;
    num = parseInt(document.getElementById("num").value);
  }

  document.getElementById("resultado").innerHTML = `Soma total: ${soma}`;
};

const exercicio23 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;
  let frase = document.getElementById("frase").value;
  let contador = 0;
  let posicao = frase.indexOf(palavra);
  while (posicao != -1) {
    contador++;
    posicao = frase.indexOf(palavra, posicao + 1);
  }
  resultado.innerHTML = contador;
  erro.innerHTML = "";
};

const exercicio24 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let frase = document.getElementById("frase").value;
  let fraseTitleCase = "";
  let palavras = frase.split(" ");
  for (let i = 0; i < palavras.length; i++) {
    fraseTitleCase +=
      palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1) + " ";
  }
  resultado.innerHTML = fraseTitleCase;
  erro.innerHTML = "";
};

const exercicio25 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let numeros = [num1, num2, num3];
  numeros.sort((a, b) => a - b);
  resultado.innerHTML = numeros;
  erro.innerHTML = "";
};