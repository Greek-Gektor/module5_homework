let arrNumbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(arrNumbers1.length)

arrNumbers1.map(function (item, index, array) {
    console.log(array[index])
});