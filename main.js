//Задача 1
//Создаем функию которая принимает в себя массив
function oddOrEven(array) {

    // Создаем перемменую которой присваиваем нуливое значение, к которому мы будем считать целые числа с массива
    // Эта переменная будет использоваться для хранения суммы элементов массива.
    let sumOfElements = 0

    //Используем цикл
    //for-of, который проходит по каждому элементу массива array и добавляет его значение к переменной sumOfElements.
    for (const element of array) {
        sumOfElements += element;
    }

    // Далее выполняем условие
    // Если значение нашей переменной четное тогда выводится  `even`, а иначе `odd`
    if (sumOfElements % 2 === 0) {
        return `even`
    } else {
        return `odd`
    }
}

// console.log(oddOrEven([1, 1, 1]))

//Задача 2
// Создаем функцию, которая принимает в себя массив чисел
function sumTwoSmallestNumbers(numbers) {
    // Используем метод сортировки для нахождения двух наименьших целых чисел
    // Метод sort изменяет исходный массив, сортируя его в порядке, заданном функцией сравнения
    numbers.sort((a, b) => a - b);

    // Возвращаем сумму двух первых (наименьших) элементов массива
    return numbers[0] + numbers[1];
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //13

//Задача 3
// Создаем функцию, которая принимает  в параметрах логическое значение
function booleanToString(b) {
    // Возвращаем значение параметра с методом Boolean.prototype.toString()
    // Метод toString() возвращает строковое представление указанного объекта Boolean.

    return b.toString()
}

// При вызове функции с булевым значением, функция нам вернет это значение в строковом виде!
// console.log(booleanToString(true))


//Задача 4
// Создаем функцию, которая принимает  в параметр (a) массив , а в параметр (х) новое значение
function check(a, x) {
    // Используя метод includes на массиве (а) со значением параметра (х) мы проверяем создежится ли массиве -
    // предоставленное значение (х)
    return a.includes(x)
}

// console.log(check([66,101], 66))

//Задача 5
// Условие
// В параметр функции передается число от 0 до 9, нужно его вернуть в строковом варианте
// Пришло число 1 в консоль вывод "один"


// Создаем функцию которая принимает в себя число и возвращает еще число в строковом виде
// Используем условие SWITCH которым проходимся по числах от 0 до 9 и если условие совпадает то возвращаем с условия
// Строковой вид числа
function switchItUp(number) {
    switch (number) {
        case 1 :
            return 'One';
        case 2 :
            return 'Two';
        case 3 :
            return 'Three';
        case 4 :
            return 'Four';
        case 5 :
            return 'Five';
        case 6 :
            return 'Six';
        case 7 :
            return 'Seven';
        case 8 :
            return 'Eight';
        case 9 :
            return 'Nine';
        case 0 :
            return 'Zero';
    }
}

// console.log(switchItUp(1))

// One


//Задача 6
// Условие
// Нужно написать функцию которая принимает в себя два логичиских аргумента
// Цель функции это вернуть true или false при установке будильника, это зависит от того, работаю ли я и нахожусь
// ли в отпуске

/*
* setAlarm(true, true) -> false // работаю и в отпуске
* setAlarm(false, true) -> false // безработный, но в отпуске
* setAlarm(false, false) -> false // безработный, но не в отпуске
* setAlarm(true, false) -> true // трудоустроен, но не в отпуске
* */

/*
    На основе введенных данных вернуть, true если вам нужно установить будильник,
    и false если вам не нужно устанавливать будильник.
    Из приведенного выше списка комбинаций мы видим, что единственный раз,
    когда вам нужно установить будильник, — это если вы работаете, а не в отпуске.
    Все остальное может вернуться false.
* */


function setAlarm(employed, vacation) {
    return employed && !vacation;
}

console.log(setAlarm(true, false))

