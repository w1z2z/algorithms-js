//  Бинарный поиск

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0; 

function binarySearch(arr, item) {
    let low = 0; 
    let high = arr.length - 1;
    while (low <= high) {
        count++;
        let mid = Math.floor((low + high) / 2);
        guess = arr[mid];
        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return 'Данного элемента нет в массиве!'
}

const num = 8;
console.log('Искомый элемент: ', num);
console.log('Индекс искомого элемента: ', binarySearch(arr, num));
console.log('Количество итераций: ', count);