const atualizarDados = () => {
  // criando uma variável para o tbody
  let dados = document.getElementById("itens");
  // zerando o tbody se já tiver alguma coisa escrita
  dados.innerHTML = "";
  // gerando novos conteúdos aleatórios
  for (let i = 0; i < 5; i++) {
    // criando variável para valor aleatório
    let preco = Math.random() * 100;
    // criando variável para o elemento tr(dados da tabela)
    let elemento = "";
    // criando listra de cor diferente para as linhas ímpares
    if (i % 2 != 0) elemento = "<tr class='listra'>";
    else elemento = "<tr>";

    // colocando os itens na linha (tr)
    elemento += `<td>Produto ${i} </td>
    <td>R$ ${preco.toFixed(2)} </td`;

    dados.innerHTML += elemento;
  }
};
