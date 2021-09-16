//  Сортировка выбором

let arr = [2, 5, 4, 9, 3, 7, 8, 1, 6];
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