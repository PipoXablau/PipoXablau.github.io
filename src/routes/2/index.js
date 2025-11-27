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







