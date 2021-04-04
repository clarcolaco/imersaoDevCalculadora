var primeiroNumero = parseInt(prompt("Digite o primeiro numero"));
var segundoNumero = parseInt(prompt("Digite o segundo numero"));
var operacao = parseInt(prompt("Digite uma operação: 1 - Soma 2 - Subtração 3 - Divisão 4 - Multiplicação"));

if (operacao == 1 ) {
  var resultado = primeiroNumero + segundoNumero;
  document.write("<h2>" + resultado + "</h2>") ;
}  else if (operacao == 2 ) {
  var resultado = primeiroNumero - segundoNumero;
  document.write("<h2>" + resultado + "</h2>") ;
}  else if (operacao == 3 ) {
  var resultado = primeiroNumero / segundoNumero;
  document.write("<h2>" + resultado + "</h2>") ;
}   else if (operacao == 4 ) {
  var resultado = primeiroNumero * segundoNumero;
  document.write("<h2>" + resultado + "</h2>") ;
}