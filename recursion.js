//  Рекурсия

// Факториал
const factorial = (n) => {
    if(n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const n1 = 5;
console.log('Исходное число: ', n1);
console.log('Факториал числа =', factorial(n1));

// Числа фибоначчи

const fibonachi = (n) => {
    if(n === 1 || n === 2) {
        return 1
    }
    return fibonachi(n - 1) + fibonachi(n - 2)
}

const n2 = 7;
console.log('Исходное число: ', n2);
console.log('Фибоначчи =', fibonachi(n2));