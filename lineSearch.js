//  Линейный поиск

let arr = [2, 5, 4, 9, 3, 7, 8, 1, 6];
let count = 0;

console.log('Исходный массив: \t', arr);

function lineSearch(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        count++;
        if(arr[i] === num) {
            return i;
        }
    }
    return null
}

const num = 6;
console.log('Искомый элемент: ', num);
console.log('Индекс искомого элемента: ', lineSearch(arr, num));
console.log('Количество итераций: ', count);
