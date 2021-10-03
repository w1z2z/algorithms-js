//Быстрая сортировка

let arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1];
let count = 0;
console.log('Исходный массив: \n', arr);

function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let more = [];

    for (let i = 0; i < arr.length; i++) {
        if(i === pivotIndex) {
            continue
        }
        if(arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            more.push(arr[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(more)];
}

console.log('Отсортированный массив: \n', quickSort(arr));
console.log('Количество итераций: ', count);
console.log(arr.length);