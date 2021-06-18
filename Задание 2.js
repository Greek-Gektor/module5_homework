let x = 1;

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
}