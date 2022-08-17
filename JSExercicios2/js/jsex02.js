const btnCalcular = document.querySelector('#calcularPedido');
console.log(btnCalcular);

btnCalcular.addEventListener('click', function(eventTaxa) {
  eventTaxa.preventDefault();

  let frete, valorTotal = 0;
  const nome = document.querySelector('#valorNome').value;
  const pedido = Number(document.querySelector('#valorPedido').value);
  const estado = document.querySelector('#valorUF').value;

  if (estado == '1' && estado == '2') {
    frete = 1.10 * pedido;
  }
  if (estado == '3' && estado == '4') {
    frete = 1.12 * pedido;
  }
  if (estado == '5' && estado == '6' && estado == '7') {
    frete = 1.09 * pedido;
  }
  if (estado == '8') {
    //frete = 1.125 * pedido;
    frete = 1.125;
    valorTotal = pedido + frete;
  }


  document.write("Nome: " + nome);
  document.write(" | Valor do Pedido: " + pedido);
  document.write(" | Valor do Frete: " + frete);
  document.write(" | Valor Total: " + valorTotal);
  document.write(" | Estado: " + estado);
}
)
