//  Бинарный поиск

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0; 

//  Без рекурсии -
function binarySearch(arr, item) {
    let low = 0; 
    let high = arr.length - 1;
    while (low <= high) {
        count++;
        let mid = Math.floor((low + high) / 2);
        guess = arr[mid];
        // console.log(guess);
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

//  С рекурсией +
function recursiveBinarySearch(arr, item, low, high) {
    let mid = Math.floor((low + high) / 2);
    count++;
    if(item === arr[mid]) {
        return mid;
    }
    if(item < arr[mid]) {
        return recursiveBinarySearch(arr, item, low, mid - 1);
    } else {
        return recursiveBinarySearch(arr, item, mid + 1, high);
    }
}

const num = 4;
console.log('Искомый элемент: ', num);
// console.log('Индекс искомого элемента: ', binarySearch(arr, num));
console.log('Индекс искомого элемента: ', recursiveBinarySearch(arr, num, 0, arr.length));
console.log('Количество итераций: ', count);