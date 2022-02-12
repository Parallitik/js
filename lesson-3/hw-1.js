'use strict'
    
    /**
     * Функция вычисляет остаток от деления на число
     * @param {number} num1 Число, которое собираемся поделить 
     * @param {number} num2 Число, на которое делим
     * @returns - функция возвращает остаток от деления двух чисел
     */

    function getRemainderOfNumber (num1, num2) {
        let result = num1 % num2;
        return result;
    }

    for (let i = 0; i < 11; i++){
        if (i == 0) {
            console.log(`${i} - это ноль`);
        } else if (getRemainderOfNumber(i, 2) == 1) {
            console.log(`${i} - это нечетное число`);
        } else if (getRemainderOfNumber(i, 2) == 0) {
            console.log(`${i} - это четное число`);
        }
    }