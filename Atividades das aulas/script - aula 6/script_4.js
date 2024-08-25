/* Crie uma função que recebe um número como parâmetro e decrementa esse
número de 1 em 1.
Ao passar o número 5 como parâmetro da função, ela deve exibir no console:
4
3
2
1
0*/

valor(5);

function valor(parada) {
  for (var i = parada - 1; i >= 0; i--) {
    console.log(i);
  }
}

//somar um numero
/*var inicio = 1
var parada = 101
var passo = 10

for (var controlador = inicio; controlador <= parada; controlador += passo){
    console.log(controlador)
}*/

//subtrair um numero
/*var inicio = 100
var parada = 1
var passo = 1

for (var controlador = inicio; controlador >= parada; controlador -= passo){
    console.log(controlador)
}*/
