//Ex01
let n1, n2, n3, n4, n5;

n1 = parseInt(Math.random()*100);
console.log(n1);
n2 = parseInt(Math.random()*100);
console.log(n2);
n3 = parseInt(Math.random()*100);
console.log(n3);
n4 = parseInt(Math.random()*100);
console.log(n4);
n5 = parseInt(Math.random()*100);
console.log(n5);

if (n1 > 10) {
  console.log("n1 maior que 10: " + n1);
}
if (n2 > 10) {
  console.log("n2 maior que 10: " + n2);
}
if (n3 > 10) {
  console.log("n3 maior que 10: " + n3);
}
if (n4 > 10) {
  console.log("n4 maior que 10: " + n4);
}
if (n5 > 10) {
  console.log("n5 maior que 10: " + n5);
}

//Ex02
let media;

n1 = parseInt(Math.random()*10);
console.log(n1);
n2 = parseInt(Math.random()*10);
console.log(n2);
n3 = parseInt(Math.random()*10);
console.log(n3);
n4 = parseInt(Math.random()*10);
console.log(n4);
n5 = parseInt(Math.random()*10);
console.log(n5);

media = (n1 + n2 + n3 + n4 + n5) / 5;
console.log("Média: " + media);

if (n1 >= 6) {
  console.log("Número superior a média: " + n1);
}
if (n2 >= 6) {
  console.log("Número superior a média: " + n2);
}
if (n3 >= 6) {
  console.log("Número superior a média: " + n3);
}
if (n4 >= 6) {
  console.log("Número superior a média: " + n4);
}
if (n5 >= 6) {
  console.log("Número superior a média: " + n5);
}

//Ex03
n1 = parseInt(Math.random()*1000);
console.log(n1);

if (n1 >= 100 && n1 <= 200) {
  console.log(n1 + " está no intervalo.");
}
else {
  console.log(n1 + " NÃO está no intervalo.");
}

//Ex04
const botao = document.querySelector('#calcular');
console.log(botao);

botao.addEventListener('click', function(event) {
    event.preventDefault();

    let pPlaneta = 0;
    const pTerra = Number(document.querySelector('#valorObjeto').value);
    const gravidade = Number(document.querySelector('#gravidadePlaneta').value);

    if (gravidade == "1") {
      pPlaneta = (pTerra / 100) * 0.37;
    }
    if (gravidade == "2") {
      pPlaneta = (pTerra / 100) * 0.88;
    }
    if (gravidade == "3") {
      pPlaneta = (pTerra / 100) * 0.38;
    }
    if (gravidade == "4") {
      pPlaneta = (pTerra / 100) * 2.64;
    }
    if (gravidade == "5") {
      pPlaneta = (pTerra / 100) * 1.15;
    }
    if (gravidade == "6") {
      pPlaneta = (pTerra / 100) * 1.17;
    }
    document.querySelector('#pPlaneta').textContent = pPlaneta.toFixed(1);
  }
)

//Ex05
const botaoCredito = document.querySelector('#calculaCredito');
console.log(botaoCredito);

botaoCredito.addEventListener('click', function(eventCredito) {
    event.preventDefault();

    let creditoEspecial = 0;
    const saldoMedio = Number(document.querySelector('#valorSaldo').value);

    if (saldoMedio <= 2000.00) {

    }
    else if (saldoMedio >= 2000.00 && saldoMedio <= 10000.00) {
      creditoEspecial = saldoMedio * 1.20;
    }
    else if (saldoMedio >= 10000.00 && saldoMedio <= 20000.00) {
      creditoEspecial = saldoMedio * 1.30;
    }
    else if (saldoMedio > 20000.00) {
      creditoEspecial = saldoMedio * 1.40;
    }
    document.querySelector('#creditoEspecial').textContent = creditoEspecial.toFixed(1);
  }
)

//Ex06
const botaoIMC = document.querySelector('#calculaIMC');
console.log(botaoIMC);

botaoIMC.addEventListener('click', function(eventIMC) {
    event.preventDefault();

    let IMC = 0;
    const peso = Number(document.querySelector('#valorPeso').value);
    const altura = Number(document.querySelector('#valorAltura').value);

    IMC = peso / altura * altura;

    if (IMC <= 18.5) {
      document.querySelector('#IMC').textContent = IMC;
    }
    else if (IMC <= 25) {
      document.querySelector('#IMC').textContent = IMC;
    }
    else if (IMC <= 30) {
      document.querySelector('#IMC').textContent = IMC;
    }
    else if (IMC <= 35) {
      document.querySelector('#IMC').textContent = IMC;
    }
    else if (IMC <= 40) {
      document.querySelector('#IMC').textContent = IMC;
    }
    else if(IMC > 40) {
      document.querySelector('Obeso Mórbido').textContent = IMC;
    }
}
)

//Ex07
let megaByte, conversao, byte = 1048576;

megaByte = parseInt(Math.random()*10000);
console.log(megaByte + " MegaBytes");

conversao = megaByte * byte;

console.log("Convertido para bytes: " + conversao + " Bytes");

//Ex08
