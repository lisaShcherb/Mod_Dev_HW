// 1. Вам дано любое число и вы должны сделать его отрицательным, если оно уже не отрицательное или не 0
// makeNegative (1); // return -1
// makeNegative (-5); // return -5
// makeNegative (0); // return O
// makeNegative (0.12); // return -0.12


// function minusNum (num) {
// if (num > 0) {
//     return num * (-1);  
// } else if (num === 0) {
//     return num;
// } else {
//     return num;
//     }
// } 
// console.log(minusNum(1));
// console.log(minusNum(-5));
// console.log(minusNum(0));
// console.log(minusNum(0.12));

// //2."камень ножницы бумага" - напишите функцию которая возвращает какой игрок выиграл в Камень ножницы бумага
// function rockPaperScissors (player1, player2) {
//     if (player1 === 'scissors'&& player2 === 'paper') {
//         return ('Player 1 won!');
//     } else if (player1 === 'scissors'&& player2 === 'rock') {
//         return ('Player 2 won!'); 
//     } else if (player1 === 'paper' && player2 === 'paper') {
//         return ('Draw!');
//     } else if (player1 === 'car' && player2 === 'paper') {
//         return ('unknown sign');
//     }
// }
// console.log(rockPaperScissors('scissors', 'paper'));
// console.log(rockPaperScissors('scissors', 'rock'));
// console.log(rockPaperScissors('paper', 'paper'));
// console.log(rockPaperScissors('car', 'paper'));


// 3. Вы получаете массив чисел, верните сумму всех положительных чисел. Если суммировать нечего, то return 0
// let arr = [2, -4, 7, 12];
// for (let i = 0; i < arr.length; i++) {    
// if (arr[i] < 0) {           // если элемент меньше нуля, то
//        arr.splice(1, 1);     // удаляем его из массива
//     } else {
//         arr[i];           // если больше 0, то оставляем как есть
//     } 
// }
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = ${sum}`) // вариант 1


// let arr = [2, -4, 7, 12];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {    // указываем условие, что если элемент больше 0, то
//         sum += arr[i];  // складываем этот элемент в сумму, отрицательные числа проходим мимо
//     }
// }
// console.log(sum); // вариант 2
 

// 4.Создайте функцию с двумя аргументами (step, maxValue) которая будет возвращать массив от 0 до (maxValue * step) с шагом step
// function perebor(step, maxValue) {
//     arr = [];
//     for(i = 0; i <= step*maxValue; i+=step) {
//         if (i == 0) continue; // если элемент равен 0, то скипаем
//         arr.push(i);  //выводим элемент сплюсованный с шагом
//     }
//         return arr; // возвращаем массив
// }
// console.log(perebor(3, 10)) //return [3,6,9,12,15,18, 21, 24,27,30] // идет с шагом 3 от единицы до 30 т.к. i <= step*maxValue
// console.log(perebor(2, 5)) //return [2,4,6,8,10]
// console.log(perebor(4, 11)) // return  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44]



// 5. Напишите код для управления светофором: (порядок цветов red => yellow => green => yellow => red => ....)
//Напишите функцию которая принимает текущий цвет и нужное количество итераций светофора и возвращает n последующих цветов светофора 
// function swetofor(color, times) {
//     colors = ['red','yellow','green','yellow'];
//     stepsArr = [];
//     curColor = colors.lastIndexOf(color); // .lastIndexOf последний индекс, используем т.к. некоторые цвета повторяются и надо вернуться на начало
//     for(i = 0; i < times; i++) {
//         curColor++; // текущий цвет + 1
//         if(curColor === colors.length) curColor = 0;
//         stepsArr.push(colors[curColor]);
//     }
//     return stepsArr.reduce((element1,element2) => element1 + ' ' + element2); // .reduce сделали массив строкой
// }
// console.log(swetofor("green", 4));
// console.log(swetofor("yellow", 1));
// console.log(swetofor("red", 5));



