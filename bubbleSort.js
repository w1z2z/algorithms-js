//  Сортировка пузырьком

let arr = [2, 5, 4, 9, 3, 7, 8, 1, 6];
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