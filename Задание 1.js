
let mean = prompt("Введите значение");

mean++;

if (mean !== mean) {
    console.log('Упс, кажется вы ошиблись')
} else if (typeof mean === "number" && mean % 2 === 0) {
    console.log('Это не четное число')
} else if (typeof mean === "number") {
    console.log('Это  четное число')
} else {
    console.log('Упс, кажется вы ошиблись')
}