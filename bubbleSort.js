//  Сортировка пузырьком

let arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1];
let count = 0;

console.log('Исходный массив: \n', arr);
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            count++;
        }
    }
    return arr;
}

console.log('Отсортированный массив(сортировка пузырьком): \n', bubbleSort(arr));
console.log('Количество итераций:', count); 