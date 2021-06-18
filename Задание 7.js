let arrNumbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
console.log(`В массиве четных чисел: ${evenNum} , не четных: ${oddNum}, нулей: ${zero}`)