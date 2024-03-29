// // 1 Написать функцию (чистую), которая объединяет две строки и возвращает результат 
// function userName (name, surname) {
//     return name + surname;
// }
// console.log(userName('Лиза', ' Щербак'));

// // 2 Создать массив строк и написать функцию для объединения всех элементов массива в одну строку

// function arrayStr (array) {
//    const a = String(array[0]);
//    const b = String(array[1]);
//    return a + b;
// }
// const array = [1, 2];
// console.log(arrayStr(array)); // вариант 1

// console.log(arrayStr([1, 2])); // вариант 2


// function arrayStr (array) {
//       return array.join('');
// }
// const array = [1, 2];
// console.log(arrayStr(array)); // вариант 3


// const arrayStr = ['Ромашка', 'Колокольчик', 'Роза', 'Лилия'];
// const sum = arrayStr.reduce(function (a, b) {
//     return a +  ' ' + b;
// })
// console.log(sum); // вариант 4


// // 3  Написать функцию, которая принимает строку и возвращает эту же строку в обратном порядке.
// function reverseString (string) {
//     return string.split('').reverse().join(''); // .split('') - делает из строки массив, 
//     //.reverse() - обращает порядок элементов массива в обратную сторону,
//     //.join('') - объединяет элементы массива в строку
// }
// console.log(reverseString('телефон'));

// // 4 Написать функцию которая принимает строку и возвращает эту же строчку но где первая буква с большой буква 
// function lowercaseInUppercase (name) {
//         return name[0].toUpperCase() + name.slice(1,4); //name[0].toUpperCase() берем первый элемент 
//         //(в коде он - 0) и делаем его заглавной буквой, + name.slice(1,4) - добавляем к заглавной букве 
//         // остальные буквы.
// }
// console.log(lowercaseInUppercase('лиза'));

// // // 5 Написать функцию, которая принимает два числа (min max) и возвращает случайное число в указанном диапазоне:
// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //Math.floor() - Возвращает наибольшее целое число, 
//     //которое меньше или равно указанному числу (округление вниз, округляет аргумент до ближайшего меньшего целого), 
//     //Math.random() - генерирует случайные числа
// }
// console.log(randomInt(2, 10)); // вариант 1


// function randomInt(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// console.log(randomInt(1, 12)) // вариант 2


// // 6 Создать массив чисел и написать функцию для вывода суммы всех элементов массива.
// function sumNumbArray (array) {
//     const a = Number(array[0]);
//     const b = Number(array[1]);
//     const c = Number(array[2]);
//     return a + b + c;
// }
// console.log(sumNumbArray([1, 2, 3])); // вариант 1

// let array = [1, 2, 3];
// function sumNumbArray (array) {
//     let sum = 0;                  // задаем переменную суммы
//     array.forEach(element => {   //array.forEach берем все элементы массива (перебираем)
//         sum += element          // складываем элементы (элементы перебираются и добавляются к sum, которая работает как копилка)
//     });
//     return sum;
// }
// console.log(sumNumbArray(array)); // вариант 2

// // 7 Создать массив чисел и написать функцию для нахождения среднего арифметического всех элементов массива.
// function average (array) {
//     const a = Number(array[0]);
//     const b = Number(array[1]);
//     const c = Number(array[2]);
//     return (a + b + c) / array.length;
// }
// console.log(average([1, 2, 3])); // вариант 1

// let array = [1, 2, 6];
// function averege (array) {
//     let sum = 0;
//     array.forEach(element => {
//         sum += element
//     });
//     return sum / array.length;
// }
// console.log(averege(array)); // вариант 2

const array = [1, 2, 6];
const average = array.reduce(function (a, b) {
    return Math.floor(a + b / array.length); //Math.floor округление вниз, округляет аргумент до ближайшего меньшего целого
})
console.log(average); // вариант 4