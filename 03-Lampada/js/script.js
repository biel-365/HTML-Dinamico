var lampada = document.getElementById("lampada");

const verde = () => {
    lampada.style.backgroundColor ="green";
}

const vermelho = () => {
    lampada.style.backgroundColor ="#de1111";
}

const azul = () => {
    lampada.style.backgroundColor ="blue";
}

const amarelo = () => {
    lampada.style.backgroundColor ="yellow";
}

const resetar = () => {
    lampada.style.backgroundColor ="white";
}

const luzSimples = (cor) =>{
    lampada.style.backgroundColor = cor
}