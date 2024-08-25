/*Crie uma função com dois parâmetros, um inteiro e um booleano (True or
  False), que determina se uma pessoa pode dirigir com base na idade e se ela tem ou não
  carteira de motorista.
  Exemplos de saída:
  ● Idade maior ou igual a 18 e é habilitada: "Você está apto(a) a dirigir."
  ● Idade maior ou igual a 18, mas não é habilitada: "Você não está apto(a) a dirigir."
  
  Dica: Utilize estruturas condicionais e trabalhe com os operadores lógicos do JavaScript. */

function podeDirigir(idade, habilitacao) {
  if (idade >= 18 && habilitacao) {
    console.log("Você está apto(a) a dirigir.");
  } else {
    console.log("Você não está apto(a) a dirigir.");
  }
}

podeDirigir(24, false);
