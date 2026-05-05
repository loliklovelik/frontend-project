function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Четные числа:', filterArray(numbers, num => num % 2 === 0));
console.log('Числа больше 5:', filterArray(numbers, num => num > 5));
