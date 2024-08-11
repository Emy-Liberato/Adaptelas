/*Crie uma função que recebe um número (x) como parâmetro e determine se ele
é impar ou par. A função deve exibir as seguintes mensagens em seus devidos casos.
● Caso o número seja par: “O número 2 é par.”
● Caso o número seja ímpar: “O número 25 é ímpar.” */

function imparPar(numero) {
  if (numero % 2 == 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é impar.`);
  }
}

var numero = imparPar(990);
