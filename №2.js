alert(`
Программа для решения задания "Дан массив размера N. 
Поменять местами его минимальный и максимальный элементы".
    `);

let array = prompt("Введите массив (числа через пробел):");
let N = Number(prompt("Введите N - размер введённого массива:"));
array = array.split(" ");
let array_original = array.slice();

let min_index = 0;
let max_index = 0;
for (let i = 0; i < N; i++) {
    let el = Number(array[i]);
    if (el < (array[min_index])) {
        min_index = i;
    } else if (el > array[max_index]) {
        max_index = i;
    }
}

let min = array[min_index];
let max = array[max_index];
array.splice(min_index, 1, max);
array.splice(max_index, 1, min);

alert("Если массив равен " + array_original + ", \nОтвет: " + array);

