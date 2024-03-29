// 1 задание
// const name1 = 'Liza'; // строка - присваиваю переменной name1 имя Liza
// const surname = 'Shcherbak';
// const surname2 = 'Andreewna';
// const yearOfBirth = '1995';
// const currentYear = '2024';
// let age = 0; // задаю, что переменная age - типа number  и может изменяться тк. let
// const studying = false; // булевое значение
// const working = true;

// age = parseInt (currentYear) - parseInt (yearOfBirth); // с помощью parseInt делаю так, что это не считалось строкой и могло арифметически посчитаться
// console.log(age); // вывожу ответ

// console.table({name1, surname, surname2, yearOfBirth, currentYear, age, studying, working}); // делаю таблицу со значениями. Значени в {}

// // 2 задание
const user = {
    name1: 'Liza',
    surname: 'Shcherbak',
    surname2: 'Andreewna',
    yearOfBirth:'1995',
    currentYear: new Date ().getFullYear(), // Вывожу текущую дату и с помощью .getFullYear выводится только текущий год
    age: parseInt (new Date ().getFullYear()) - parseInt (1995), // что бы вичислить возраст использую parseInt, но в скобках пишу то, что идет после : т.к. мы тут ничего не присваиваем
    studying: false,
    working: true,
}; // задаю объект в {}
console.table(user);



