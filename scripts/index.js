// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis - OK
// Sacar valores apenas com as notas disponíveis - OK
// Ter saldo do cliente infinito - OK
// Ter quantidade de notas infinita - OK
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00 - OK
// Retornar mensagens de erro em caso de entradas inválidas - OK
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo

const valorInformado = document.getElementById("exibirValor");
const clear = document.getElementById("btnClear");
const confirmar = document.getElementById("btnConfirmar");
const notasParaRetirar = document.getElementById("notasRetiradas");
const button = document.getElementById("button");
const resultadoEmNotas = document.getElementById("resultado");

// Limpando os valores
clear.addEventListener("click", () => {
  valorInformado.value = "";
  notasParaRetirar.innerText = "";
  resultadoEmNotas.innerText = "";
});

// Adicionando valores na tela da calculadora
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    valorInformado.value = valorInformado.value + button.innerHTML;
  });
});

// Lógica de validação de saque
confirmar.addEventListener("click", () => {
  let notasDe10 = 0;
  let notasDe20 = 0;
  let notasDe50 = 0;
  let notasDe100 = 0;

  // Verificando se o número é 0 ou se o usuário não informou nada
  if (valorInformado.value == 0 || valorInformado.value == "") {
    alert("Erro de valor nulo");
  } else {
    // valor % 10 pois é a menor cédula, 2 é para verificar se o numero é par/impar
    if (valorInformado.value % 10 === 0) {
      while (valorInformado.value > 0) {
        if (valorInformado.value >= 100) {
          notasDe100 = notasDe100 + 1;
          valorInformado.value = valorInformado.value - 100;
          notasParaRetirar.innerText =
            notasParaRetirar.innerText + " $ 100.00 | ";

          // console.log(valorInformado.value); - Resultados OK
        } else if (valorInformado.value >= 50) {
          notasDe50 = notasDe50 + 1;
          valorInformado.value = valorInformado.value - 50;
          notasParaRetirar.innerText =
            notasParaRetirar.innerText + " $ 50.00 | ";

          //console.log(valorInformado.value); - Resultados OK
        } else if (valorInformado.value >= 20) {
          notasDe20 = notasDe20 + 1;
          valorInformado.value = valorInformado.value - 20;
          notasParaRetirar.innerText =
            notasParaRetirar.innerText + " $ 20.00 | ";

          // console.log(valorInformado.value); - Resultados OK
        } else if (valorInformado.value >= 10) {
          notasDe10 = notasDe10 + 1;
          valorInformado.value = valorInformado.value - 10;
          notasParaRetirar.innerText =
            notasParaRetirar.innerText + " $ 10.00 | ";
          // console.log(valorInformado.value); - Resultados OK
        }
      }

      resultadoEmNotas.innerText =
        notasDe10 +
        " Notas de 10" +
        "\n" +
        notasDe20 +
        " Notas de 20" +
        "\n" +
        notasDe50 +
        " Notas de 50" +
        "\n" +
        notasDe100 +
        " Notas de 100";

      console.log(valorInformado.value);
    } else {
      error = "Erro de notas indisponíveis";
      alert(error);
    }
  }
  console.log(valorInformado.value);
});
