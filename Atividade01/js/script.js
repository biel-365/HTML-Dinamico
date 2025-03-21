 const trocarImagem = () => {
    let imagem = document.getElementById("imagem");
    const trocarImagens = [
        "img/Nuclear Monster 2.png",
        "img/NuclearMonsterFullBadge.webp",
        "img/PollutedIcon2.webp",
        "img/Soldado Classroom.png",
    ];


// Criando variável que fará começar com a primeira imagem
let indice = 0

// Criando variável para número aleatório entre 0 e 1 (lembrando que o 1 não entra na conta)
let numero = Math.random()

// Configurando o número para a imagem selecionada
if(numero>0.75)
    indice = 3;
else if(numero>0.50)
    indice = 2;
else if(numero>0.25)
    indice = 1;

// Mostrando as frases para o usuário
imagem.src = trocarImagens[indice];
 }

console.log("----------------------------------------------------")

const somar = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;
    let resultado = parseFloat(valor1) + parseFloat(valor2);

    frmCalculadora.inResultado.value = resultado
}

const subtrair = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;
    let resultado = parseFloat(valor1) - parseFloat(valor2);

    frmCalculadora.inResultado.value = resultado
}

const multiplicar = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;
    let resultado = parseFloat(valor1) * parseFloat(valor2);

    frmCalculadora.inResultado.value = resultado
}

const dividir = () => {
    let valor1 = frmCalculadora.inValor1.value;
    let valor2 = frmCalculadora.inValor2.value;

    if (parseFloat(valor2) === 0) {
        alert('Não é possível dividir por 0!');
        frmCalculadora.inResultado.value = '';
    }

    let resultado = parseFloat(valor1) / parseFloat(valor2);
    frmCalculadora.inResultado.value = resultado;
}

/*const calcular = (operador) => {
  let valor1 = parseFloat(frmCalculadora.inValor1.value);
  let valor2 = parseFloat(frmCalculadora.inValor2.value);
  let resultado = 0;


  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;


    case "-":
      resultado = valor1 - valor2;
      break;


    case "*":
      resultado = valor1 * valor2;
      break;


    case "/":
      resultado = valor1 / valor2;
      break;
  }


  frmCalculadora.inResultado.value = resultado;
};*/