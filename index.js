//Задание1
/*let mean = prompt("Введите значение");

mean++;

if (mean !== mean) {
    console.log('Упс, кажется вы ошиблись')
} else if (typeof mean === "number" && mean % 2 === 0) {
    console.log('Это не четное число')
} else if (typeof mean === "number") {
    console.log('Это  четное число')
} else {
    console.log('Упс, кажется вы ошиблись')
}*/

// Задание 2

/*let x = 1;

x = typeof x;

switch (x) {
    case "number":
        console.log('x - это число')
        break;
    case "string":
        console.log('x - строка')
        break;
    case "boolean":
        console.log('x - логический тип данных')
        break;
    default:
        console.log('Тип x не определён');
}*/

// Задание 3

/*let word = "Hello";
console.log(word.split("").reverse().join(""))*/

// Задание 4

/*let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)*/

// Задание 5

/*let arrNumbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(arrNumbers1.length)

arrNumbers1.map(function (item, index, array) {
    console.log(array[index])
});*/

// Задание 6

/*let arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];


let same = false;
for (let i = 0; i < arrNumbers.length; ++i) {
    let numbersItem = arrNumbers[i];
    for (let j = 0; j < arrNumbers.length; ++j)
        if (i === j) {
            break;
        } else if (numbersItem === arrNumbers[j]) {
            // console.log('true');
            same = true;
        } else {
            //console.log('false')
        }
}

if (same === true) {
    console.log('true')
} else {
    console.log('false')
}*/

// Задание 7

/*let arrNumbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let evenNum = 0
let oddNum = 0
let zero = 0


for (let i = 0; i < arrNumbers2.length; ++i) {

    if (arrNumbers2[i] === 0) {
        zero++
    } else if (typeof arrNumbers2[i] === 'number'
        && !isNaN(arrNumbers2[i])
        && arrNumbers2[i] % 2 === 0) {
        evenNum++
    } else if (typeof arrNumbers2[i] === 'number'
        && !isNaN(arrNumbers2[i])) {
        oddNum++
    }
}
console.log(`В массиве четных чисел: ${evenNum} , не четных: ${oddNum}, нулей: ${zero}`)*/

// Задание 8

/*let numMap = new Map([
    [1, "один"],
    [2, "два"],
    [3, "три"]
]);


for (let elem of numMap) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`)
}*/











