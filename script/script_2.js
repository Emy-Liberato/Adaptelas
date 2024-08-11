/*Crie uma função que contém dois números inteiros como parâmetros (a, b) e
determine qual deles é o maior. A função deve retornar uma mensagem dizendo qual número
é o maior ou se ambos são iguais. A função deve exibir as seguintes mensagens em seus
devidos casos:
● Se o primeiro número é maior: "O número 5 é maior que 2."
● Se o segundo número é maior: "O número 2 é menor que 5."
● Se os números forem iguais: "Os dois números são iguais." */

function maiorNumero(a, b) {
  if (a > b) {
    console.log("O número " + a + " é maior que " + b + "."); // concatenação 
    // console.log(`O número ${a} é maior que ${b}.`); // interpolação
  } else if (a < b) {
    console.log("O número " + b + " é maior que " + a + ".");
  } else {
    console.log("Os dois números são iguais.");
  }
}

var numbers = maiorNumero(15, 9);
