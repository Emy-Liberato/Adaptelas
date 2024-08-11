/* Crie uma função que receba uma string como parâmetro e determine o número
de caracteres presentes. Considere um limite de 20 caracteres, a função deve exibir
mensagens dizendo se esse limite foi ou não excedido.
Exemplo de saída:
● Caso o limite exceda 20 caracteres: “O limite de caracteres foi excedido.”
● Caso o limite atinja 20 caracteres: “Você atingiu o limite de caracteres”
● Caso o limite seja menor que 20 caracteres: “O limite de caracteres ainda não foi
excedido...”
Dica: Utilize o length. Veja o Notion da aula, em declaração de variáveis, para entender.*/

function limite(frase) {
  if (frase.length > 20) {
    console.log("O limite de caracteres foi excedido.");
  } else if (frase.length == 20) {
    console.log("Você atingiu o limite de caracteres");
  } else {
    console.log("O limite de caracteres ainda não foi excedido...");
  }
}

limite("12345678901234567890");
