// // 1.Write a program that prints ‘Hello World’ to the screen.

// console.log("Hello world")
// alert("Hello World")

// // 2.Write a program that asks the user for their name and greets them with their name.

// let user = prompt("Your name?");

// console.log(`Hello ${user}`);

// // 3.Modify the previous program such that only the users Alice and Bob are greeted with their names.
// let user = prompt("Your name?");

// if (user === "Alice" || user === "Bob") {
//   console.log(`Hello ${user}`);
// } else prompt("Your name?");

// // 4.Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// let num = prompt("Please write a number");
// let num1 = 0;

// for (let index = 0; index <= num; index++) {
//   num1 += index;
// }
// console.log(num1);

// // 5.Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

// let num = prompt("Please write a number");
// let num1 = 0;

// for (let index = 1; index <= num; index++) {
//   if (index % 3 === 0 || index % 5 === 0) {
//     num1 += index;
//   }
// }
// console.log(num1);

// // 6. Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

// let askNum = prompt("Please write a number");
// let answer1;
// let num1 = 0;
// if (askNum) {
//   answer1 = prompt("+ (sum) or * '(multiply)");
// }

// if (answer1 === "+") {
//   for (let index = 0; index <= askNum; index++) {
//     num1 += index;
//   }
// } else if (answer1 === "*") {
//   num1 = 1;
//   for (let index = 1; index <= askNum; index++) {
//     num1 *= index;

//   }
// }
// console.log(num1);

// //7. Write a program that prints a multiplication table for numbers up to 12.

// let num = prompt("Please write a number");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// for (let index = 1; index <= arr.length; index++) {
//   console.log(`${num}*${index}=${index * num}`);
// }

// *****************************************************
// только похожий пример как решить 7ую задачу
// let linE = "";
// let lineEE = "";
// for (let i = 1; i <= 12; i++) {
//   linE= linE + " " + i;
//   lineEE = lineEE + " " + i*i;

// }
// console.log(linE );
// console.log(lineEE);

//РЕШЕНИЕ
// for (let row = 1; row <= 12; row++) {
//   let line = "";

//   for (let col = 1; col <= 12; col++) {
//     line = line + "    " + col * row;
//   }
//   console.log(line);
// }

// только похожий пример как решить 7ую задачу
// for (let row = 1; row <= 5; row++) {
//   let output = "";
//   for (let col = 1; col <= 3; col++) {
//     output = output + " " + col * row;

//   }
//   console.log(`row ${row} -- output ${output}`);
// }

// 8. Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)

// let number100 = 100;

// let remainder = 0;
// for (let j = 2; j <= number100; j++) {
//   let countNumber = 0;
//   for (let index = 1; index <= j; index++) {
//     remainder = j % index;
//     // console.log(`Num ${j} index ${index} remainder ${remainder}`);

//     if (remainder === 0) {
//       countNumber += 1;
//     }
//   }
//   if (countNumber >= 3) {
//     continue;
//   }
//   console.log(j);
// }

// 9.Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

// let randomNumber = +Math.random() * 10;
// randomNumber = +randomNumber.toFixed();
// let countNumber = 0;

// console.log(randomNumber);

// let userNumber = prompt("write a number");

// for (let j = 0; j <= 10; j++) {
//   if (randomNumber === userNumber) {
//     console.log("YES, you are correct", j);
//   } else if (randomNumber > userNumber) {
//     console.log("too small", j);
//     // countNumber += 1;
//     prompt("write a number again");
//   } else if (randomNumber < userNumber) {
//     console.log("too large", j);

//     // countNumber += 1;
//     prompt("write a number one more time");
//   }
//   countNumber++;

//   // console.log(countNumber);
// }
