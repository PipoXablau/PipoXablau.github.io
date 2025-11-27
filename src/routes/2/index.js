//exercícios while, for, do while

//1
let soma = 0;
for (let i = 3; i <= 6; i++) {
  soma += i;
}
alert(soma);

//2

let i = 0;
while (i < 3) {
  alert(i);
  i++;
}

//3

let n = 5;
while (n >= 0) {
  alert(n);
  n--;
}

//4
let x = 1;
let total = 0;
while (x <= 4) {
  total += x;
  x++;
}
alert(total);


//5

let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);


//6

let num = 10;
do {
  num -= 3;
  alert(num);
} while (num > 0);


//7

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
}


//8

let i = 1;
while (i <= 5) {
  if (i % 3 === 0) {
    alert(i);
  }
  i++;
}


//9

let i = 0;
do {
  if (i % 2 !== 0) {
    alert(i);
  }
  i++;
} while (i < 5);


//10


for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    alert(i);
  }
}


//11

//Soma dos números pares de 1 a 20 (for)

let soma = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    soma += i;
  }
}

alert(soma);

//12

Números de 10 a 1 (while)
let n = 10;

while (n >= 1) {
  alert(n);
  n--;
}

//13
//Tabuada de 5 até 10x (while)
let i = 1;

while (i <= 10) {
  alert(`5 x ${i} = ${5 * i}`);
  i++;
}

//14
//Tabuada de 5 até 10x (while)

let i = 1;
let count = 0;

do {
  alert(i);
  i += 2;
  count++;
} while (count < 5);

//15
//Imprimir números até que soma ultrapasse 15 (do...while)

let i = 1;
let soma = 0;

do {
  soma += i;
  alert(i);
  i++;
} while (soma <= 15);


//16 
// Números de 1 a 20 divisíveis por 4 (for + if)

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    alert(i);
  }
}

//17
//Números de 1 a 15 pulando múltiplos de 3 (while + if)

let i = 1;

while (i <= 15) {
  if (i % 3 !== 0) {
    alert(i);
  }
  i++;
}

//18 
// Números de 1 a 10 mostrando apenas pares (do...while + if)

let i = 1;

do {
  if (i % 2 === 0) {
    alert(i);
  }
  i++;
} while (i <= 10);

// ============

// função
//1. Mensagem de boas-vindas

function boasVindas() {
  alert("Bem-vindo ao curso de Informática!");
}

boasVindas();

//2. Função com nome

function saudacao(nome) {
  alert("Olá, " + nome + "! Seja bem-vindo(a)!");
}

let nomeUsuario = prompt("Digite seu nome:");
saudacao(nomeUsuario);

//3. Dobro do número

function dobro(numero) {
  return numero * 2;
}

let n = Number(prompt("Digite um número:"));
alert("O dobro é: " + dobro(n));

//4. Soma de dois números

function somar(a, b) {
  return a + b;
}

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

alert("A soma é: " + somar(num1, num2));

//5. Média de três notas

function media(a, b, c) {
  return (a + b + c) / 3;
}

let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:"));

let m = media(n1, n2, n3);

if (m >= 6) {
  alert("Média: " + m.toFixed(2) + " - Aprovado!");
} else {
  alert("Média: " + m.toFixed(2) + " - Reprovado!");
}

//6 Verificar se é par ou ímpar

function ehPar(numero) {
  if (numero % 2 === 0) {
    alert("É par!");
  } else {
    alert("É ímpar!");
  }
}

let valor = Number(prompt("Digite um número:"));
ehPar(valor);


//7. Maior número

function maior(a, b) {
  return a > b ? a : b;
}

let a = Number(prompt("Digite o primeiro número:"));
let b = Number(prompt("Digite o segundo número:"));

alert("O maior número é: " + maior(a, b));


//8. Conversão de temperatura

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let c = Number(prompt("Digite a temperatura em °C:"));
alert("Em Fahrenheit: " + celsiusParaFahrenheit(c));


//9. Tabuada

function tabuada(numero) {
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
  }
  alert(resultado);
}

let numTabuada = Number(prompt("Digite um número para ver a tabuada:"));
tabuada(numTabuada);


//10. Mini Calculadora (Desafio)

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

let opcao = prompt(
  "Escolha uma operação:\n" +
  "1 - Somar\n" +
  "2 - Subtrair\n" +
  "3 - Multiplicar\n" +
  "4 - Dividir"
);

let n1_calc = Number(prompt("Digite o primeiro número:"));
let n2_calc = Number(prompt("Digite o segundo número:"));

let resultado;

if (opcao == "1") {
  resultado = somar(n1_calc, n2_calc);
} else if (opcao == "2") {
  resultado = subtrair(n1_calc, n2_calc);
} else if (opcao == "3") {
  resultado = multiplicar(n1_calc, n2_calc);
} else if (opcao == "4") {
  if (n2_calc === 0) {
    alert("Erro: divisão por zero!");
  } else {
    resultado = dividir(n1_calc, n2_calc);
  }
} else {
  alert("Opção inválida!");
}

if (resultado !== undefined) {
  alert("Resultado: " + resultado);
}

// ---- Trabalho

// menuAgenda_SeuNome.js

let nomes = [];
let opcao;

do {
  opcao = prompt(
    "=== MENU ===\n" +
    "1 - Cadastrar\n" +
    "2 - Listar\n" +
    "3 - Remover\n" +
    "4 - Sair\n\n" +
    "Escolha uma opção:"
  );

  switch (opcao) {

    // -------------------------------------------
    // OPÇÃO 1 - CADASTRAR
    // -------------------------------------------
    case "1":
      let nome = prompt("Digite um nome para cadastrar:").trim();

      if (nome === "") {
        alert("Nome inválido. Digite um nome válido!");
        break;
      }

      // Verifica duplicidade ignorando maiúsculas/minúsculas
      let existe = nomes.some(n => n.toLowerCase() === nome.toLowerCase());

      if (existe) {
        alert("Esse nome já está cadastrado!");
      } else {
        nomes.push(nome);
        alert("Nome cadastrado com sucesso!");
      }
      break;

    // -------------------------------------------
    // OPÇÃO 2 - LISTAR
    // -------------------------------------------
    case "2":
      if (nomes.length === 0) {
        alert("Nenhum nome cadastrado.");
      } else {
        alert("Lista de nomes cadastrados:\n\n" + nomes.join("\n"));
      }
      break;

    // -------------------------------------------
    // OPÇÃO 3 - REMOVER
    // -------------------------------------------
    case "3":
      if (nomes.length === 0) {
        alert("Não há nomes para remover.");
        break;
      }

      let nomeRemover = prompt("Digite o nome que deseja remover:").trim();

      let indice = nomes.findIndex(
        n => n.toLowerCase() === nomeRemover.toLowerCase()
      );

      if (indice === -1) {
        alert("Nome não encontrado.");
      } else {
        nomes.splice(indice, 1);
        alert("Nome removido com sucesso!");
      }
      break;

    // -------------------------------------------
    // OPÇÃO 4 - SAIR
    // -------------------------------------------
    case "4":
      alert("Encerrando o programa. Até logo!");
      break;

    // -------------------------------------------
    // OPÇÃO INVÁLIDA
    // -------------------------------------------
    default:
      alert("Opção inválida. Escolha um número entre 1 e 4.");
  }

} while (opcao !== "4");





