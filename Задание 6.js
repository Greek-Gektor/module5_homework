let arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];


let same = false;
for (let i = 0; i < arrNumbers.length; ++i) {
    let numbersItem = arrNumbers[i];
    for (let j = 0; j < arrNumbers.length; ++j)
        if (i === j) {
            break;
        } else if (numbersItem === arrNumbers[j]) {
            same = true;
        }
}

if (same === true) {
    console.log('true')
} else {
    console.log('false')
}