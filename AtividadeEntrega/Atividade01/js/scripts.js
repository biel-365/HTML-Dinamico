console.log("---------------------Atividade 01-------------------");
const ligar = () => {
  let lampada = document.getElementById("lampada");

  // lampada.src= "img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};

console.log("---------------------Atividade 02-------------------");

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  if (qtdImagem <= 0) alert("O campo quantidade não pode ser 0 ou negativo");
  else {
    for (let index = 1; index <= qtdImagem; index++) {
      canvas.innerHTML += "<img src='img/PollutedIcon2.webp' alt=''>";
    }
  }
};

console.log("---------------Atividade 03-------------------");

const validaForm = () => {
  let data = frmRegistro.inData.value;
  let cliente = frmRegistro.inCli.value;
  let telefone = frmRegistro.inFone.value;
  let email = frmRegistro.inMail.value;
  let produto = frmRegistro.inProd.value;
  let quantidade = frmRegistro.inQtd.value;
  let valor = frmRegistro.inVal.value;

  let caixaMensagem = document.getElementById("mensagem-erro");
  let mensagem = "";
  caixaMensagem.style.display = "none";

  if (data == "") {
    mensagem += "O campo Data não pode ser vazio!\n";
  }

  if (cliente.length < 5) {
    mensagem += "O campo Cliente deve conter pelo menos 5 caracteres!\n";
  }

  if (quantidade <= 0 || valor <= 0) {
    mensagem +=
      "Os campos quantidade ou valor não podem estar negativo ou ser igual a 0!\n";
  }

  if (produto.length < 4) {
    mensagem += "O campo Produto tem que ser maior!\n";
  }

  if (telefone.length < 5) {
    mensagem += "O campo telefone está incoreto!\n";
  }

  if (email.length < 5) {
    mensagem += "O campo email está incorreto!";
  }

  if (mensagem != "") {
    caixaMensagem.innerText = mensagem;
    caixaMensagem.style.display = "block";
  }

  // const validaForm = () => {
  //   let erro = document.getElementById("mensagem-erro");
  //   erro.innerHTML = "";

  //   let nome = inCli;
  //   let data = inData;
  //   let fone = inFone;
  //   let mail = inMail;
  //   let prod = inProd;
  //   let qtd = inQtd;
  //   let val = inVal;

  //   switch (true) {
  //     case nome.value.trim() == "" ||
  //       data.value == "" ||
  //       fone.value == "" ||
  //       mail.value == "" ||
  //       prod.value == "" ||
  //       qtd.value == "" ||
  //       val.value == "":
  //       erro.style.display = "block";
  //       erro.innerHTML = "Erro: O campo não pode estar vazio!";
  //       break;

  //     case val.value < 0 || qtd.value < 0:
  //       erro.style.display = "block";
  //       erro.innerHTML = "Erro: Este campo não pode ser negativo!";

  //       break;

  //     case nome.value.trim().length < 5 || prod.value.trim().length < 5:
  //       erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
  //       erro.style.display = "block";
  //       break;

  //     default:
  //       break;
  //   }
  // };
};

console.log("---------------Atividade 04-------------------");
const calcular = () => {
  let valPedido = inValorPedido.value;
  let perDesconto = 0;
  let valDesconto = 0;
  let valFinalPedido = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
  } else if (valPedido >= 1500) {
    perDesconto = 1;
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
  } else {
    perDesconto = 0;
  }

  valDesconto = (valPedido * perDesconto) / 100;
  valFinalPedido = valPedido - valDesconto
  inPercDesc.value = perDesconto;
  inValDesc.value = valDesconto;
  inValFinal.value = valFinalPedido
};
