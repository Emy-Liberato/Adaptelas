/*Crie uma função para calcular o valor total de um pedido em uma lanchonete. A
função deve receber o valor total das compras e verificar se o valor é superior a R$200,00. Se
for, o cliente receberá um desconto de 10% no total. Caso contrário, não haverá desconto.
A função deve:
1. Solicitar ao usuário o valor total das compras (Você pode declarar uma variável já
contendo esse valor).
2. Calcular o desconto se o valor total exceder R$200,00.
3. Exibir o valor total com o desconto (se aplicável) e o valor do desconto.
Use as seguintes mensagens:
● Se o desconto for aplicado: "O valor total do pedido com desconto é
de R$ XX.XX", onde "O desconto aplicado foi de R$ YY.YY".
● Se não houver desconto: "O valor total do pedido é de R$ ZZ.ZZ". */

compra(90);

function compra(valorTotalCompra) {
  if (valorTotalCompra >= 200) {
    var desconto = valorTotalCompra / 10;
    console.log(`O valor total do pedido com desconto é de R$ ${valorTotalCompra - desconto},00.`);
    console.log(`O desconto aplicado foi de R$ ${desconto},00.`);
  } else {
    console.log(`O valor total do pedido é de R$ ${valorTotalCompra},00.`);
  }
}
