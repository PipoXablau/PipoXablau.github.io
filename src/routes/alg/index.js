//Crie uma função dobro(numero) que retorne o dobro de um número informado pelo usuário.
function dobro(numero){
    return numero*2;
}

let n = number (prompt("Digite um número para ser dobrado: "));
let resultado = dobro (n);

alert ("O resultado é:", + resultado);


//Crie uma função media(a, b, c) que calcule a média de três números informados via prompt() e mostre o resultado com alert().

function media(a,b,c){

    return (a + b + c ) /3;
}

let n1 = number (prompt("Digite o primeiro número:"));
let n2 = number (prompt("Digite o segundo número:"));
let n3 = number (prompt("Digite o terceiro número:"));

let resultado = media (n1,n2,n3);
alert ("A média é :",+ resultado);



//------------------------------------------- 1



//------------------------------------------
// Lista III exercícios - Função
//------------------------------------------

 function boasVindas() { // cria uma função.
    alert("Bem Vindo ao curso de Informática!"); // menssagem que vai aparecer ao chamar a função.
 }

boasVindas(); // chama a função.
//------------------------------------------

//------------------------------------------
// QUESTÃO 2
//------------------------------------------

function saudacao(nome) {
    alert("Olá,"[nome]"! Seja bem-vindo(a)!");
}

let n = (prompt("Digite seu nome:"));
let resultado = nome(n);

//------------------------------------------
// Questão 3
//------------------------------------------

function dobro(numero){
    return numero*2;
}

let n = number (prompt("Digite um número para ser dobrado: "));
let resultado = dobro (n);

alert ("O resultado é:", + resultado);

//------------------------------------------
// Questão 4
//------------------------------------------

