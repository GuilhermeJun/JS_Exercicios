const btnCalcular = document.querySelector('#calcularTaxa');
console.log(btnCalcular);

btnCalcular.addEventListener('click', function(eventTaxa) {
  eventTaxa.preventDefault();

  let fundoReserva, benfeitorias, taxaAdmin, totalFinal = 0;
  const valorCondomin = Number(document.querySelector('#valorCondominio').value);

  fundoReserva = 1.05 * valorCondomin;
  benfeitorias = 1.07 * valorCondomin;
  taxaAdmin = 1.15 * valorCondomin;
  totalFinal = valorCondomin + fundoReserva + benfeitorias + taxaAdmin;

  alert("Taxa do Condomínio: R$" + totalFinal);
}

)
