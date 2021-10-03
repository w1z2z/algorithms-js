//  Сортировка выбором

let arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1];
let count = 0;

console.log('Исходный массив: \n', arr);

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) { 
        let min = i;
        for(let j = i + 1; j < arr.length; j++){ 
            if(arr[j] < arr[min]) { 
                min = j;
            }
            count++;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]; 
    }
    return arr;
}

console.log('Отсортированный массив(сортировка выбором): \n',selectionSort(arr) );
console.log('Количество итераций:', count);