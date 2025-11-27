// Eslint
//for
// estrutura de repetição = loop
// executa N vezes um cófigo

// for (INCREMENTO, CONDICAO/ INCR.) {}

// Incremento = i, j, k, m
// Condição = i < 10
// Incrementador = i++ (cada loop, soma um)

//Loop que itere de 0 até 4

for(let i=0; i<= 4; i++){ // vai de 0 até 4, somando 1 a cada loop

    console.log("Loop for - o i é: " + i);

}

// arrays = vetores (listas)
// contem geralmeente itens do mesmo tipo de dados
// lista de strings, lista de números, lista de booleanos

const frutas = ["Maçã", "Banana", "Uva", "Morango", "Abacaxi"];
//                0        1        2        3          4

console.log(frutas);

//arrays são zero based (significa que começa do 0)
console.log(frutas[0]); // Maçã
console.log(frutas[2]); // Uva
console.log(frutas[4]); // Abacaxi

// rodando: i => 0, i => 1, i => 2, i => 3

for (let i = 0; i < 3; i++){
    console.log("Fruta:" + frutas[i]);
}

// Lista.length => quantidade de elementos

for (let i = 0; i < frutas.length; i++){ // imprimiu todos os elementos
    console.log("Fruta:" + frutas[i]);
}


// while => usamos quando não sabemos quantas vezes o loop vai rodar
// estrutura: while (condição) { código a ser executado}

// não sabe a condição
let p = 0;

 while (p < 5){

    console.log("Loop while: " + p); // imprimiu de 0 a 4

    p++;
 }


 let aleatorio = 0;
     while (aleatorio != 10 ){

        aleatorio + Math.floor(Math.random() * 10) = 1; // gera número aleatório entre 0 e 9
        console.log("Num. aleatório: " +aleatorio);
    }

    //while quando eu não sei quando vai acabar

    // do while que garante 1 execução

   do {
     console.log("teste d o while");
   } while (1> 2); // mesmo sendo falso, executa 1 vez


   // ----
   var j = 0;

    do {
        console.log("J:" = +j);

        j++;
    } while (j< 10); // executa de 0 a 9

    //exercício

    //condicionais e loops
    // soma de numeros pares de 0 a 20

    let soma = 0;

    // 2 % 2 = 0; 3 % 2 = 1; 

    for(let i = 0; i <= 20; i++){

        //verifica se é par
        if(i % 2 === 0){
        soma =+ i ;
     }
    }
    console.log(soma); //vai imprimir 110


    // numeros ímpares de 0 a 20

        let soma = 0;
        let somaImpar = 0;
         
    // 2 % 2 = 0; 3 % 2 = 1; 

    for(let i = 0; i <= 20; i++){

        //verifica se é par
        if(i % 2 === 0){ // if = se; resto da divisão
        soma =+ i ;
     }  else { //então
        somaImpar += i;
     }
    }
    console.log(soma); //vai imprimir 110
    console.log(somaImpar); // vai imprimir 100

    //contar quantas consoantes tem em uma palavra

    const palavra = "abacaxi";
    let consoantes = 0;

    //texto são parecidos com arrays
    // cada letra é um elemento


    console.log(palavra.length); // quantidade de letras

    //case sensitive = sensível a maiúsculas e minúsculas
    // A == a > false, a == a > true
    console.log(palavra[0].toLowerCase() == "a"); // a


// JavaScript é case sensitive


    for (let i = 0; i < palavra.length; i++) {
       // console.log(palavra[i]); // imprimi cada letra

        let letra = palavra[i].toLowerCase();

        if (letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u") {
       consoantes++;
        }     
    }
    console.log("Quantidade de consoantes: " + consoantes "da palavra" + palavra); // vai imprimir 3 consoantes

    // interpolação de strings

    console.log('Contagem de consoantes' ${consoantes} 'da palavra y' ${palavra});