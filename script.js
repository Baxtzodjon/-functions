// lesson 25
// functions

// let companies = [
//     {
//         id: 1,
//         name: 'baxtMen',
//         budget: 200000,
//         tax: 19,
//         expenses: [10000, 2000, 60000]
//     },
//     {
//         id: 2,
//         name: 'nosfrush',
//         budget: 1000,
//         tax: 0,
//         expenses: [50, 100, 10]
//     },
//     {
//         id: 3,
//         name: 'artyomida',
//         budget: 400000,
//         tax: 23,
//         expenses: [5000, 14000, 3000]
//     },
//     {
//         id: 4,
//         name: 'azizas',
//         budget: 150000,
//         tax: 0,
//         expenses: [5000, 6000, 4000]
//     },
//     {
//         id: 5,
//         name: 'openBobur',
//         budget: 500,
//         tax: 12,
//         expenses: [10, 30, 5]
//     },
//     {
//         id: 6,
//         name: 'IS_buildings',
//         budget: 1000000,
//         tax: 21,
//         expenses: [500000, 25000, 10000]
//     },
//     {
//         id: 7,
//         name: 'XOJIK_RADAR',
//         budget: 40000,
//         tax: 12,
//         expenses: [500, 2500, 1000]
//     },
// ]

// // 1. Посчитать общие расходы каждой компании
// // 2. Показать чистую прибыль каждой компании вычитав расходы и налоги
// // 3. Find highest tax payer найти того кто больше всех платить налогов
// let tax_max = {}
// let tax_min = {}

// for (let company of companies) {
//     let expenses = 0

//     for (let expense of company.expenses) {
//         expenses += expense
//     }

//     пропорций
//     let tax_sum = company.tax * company.budget / 100
//     let profit = company.budget - (tax_sum + expenses)
//     console.log(`Company name: ${company.name}; Profit: ${profit}, Expenses witout tax: ${expenses} `);
// }



// tax_max = companies.reduce((a, b) => {
//     пропорций
//     let tax_sum_a = a.tax * a.budget / 100
//     let tax_sum_b = b.tax * b.budget / 100

//     if (tax_sum_a > tax_sum_b) {
//         return a
//     } else {
//         return b
//     }
// })

// console.log(tax_max);



// tax_min = companies.reduce((a, b) => {
//     пропорций
//     let tax_sum_a = a.tax * a.budget / 100
//     let tax_sum_b = b.tax * b.budget / 100

//     if (tax_sum_a < tax_sum_b) {
//         return a
//     } else {
//         return b
//     }
// })

// console.log(tax_min);



// functions

// примери function
// document.querySelector('button').onclick = () => {
//     sayHi()
// }


// declaration - декларация
// устаревший способ
// sayHi()

// function sayHi() {  // var // это похоже один на один var
//     alert('Hi')
// }




// expression - выражение
// новый способ

// const sayHello = () => { // let это // похоже один на один let
//     alert('Hello')
// }

// sayHello()


// {} => callback функций


// чем отличается let от переменный var
// var можно несколько раз создать а let нельзя , var можно использовать где угодно, а let нельзя



// let girls = ['aziza', 'aziza', 'shaxrina', 'ismoil', 'alSafir', 'safir', 'bobur']
// let boys = ['manon', 'artyom', 'islom', 'baxtzod']


// // for(let item of girls) {
// //     console.log('Hello ' + item);
// // }

// // for(let item of boys) {
// //     console.warn('Hello ' + item); //  console.warn в console выйдет знак опасно
// // }


// array это аргументами () внутрий скобках пишется это аргументы или же параметры и их тоже называют пропусами
// function sayHi(arr) {
//     console.log({ arr });
//     for (let item of arr) {
//         console.warn('Hello ' + item);
//     }
// }

// sayHi(girls)
// sayHi(boys)



// после окончания function обязательно нужно его вызвать с помощью <<здесь будет который мы создали()>> этих 

// DRY
// don't repeat yourself 
// программисти не любит повторить код



// exercise
// let user = {
//     name: "Alex",
//     age: 29,
//     isMarried: false
// }

// let user_second = {
//     name: "Jamshud",
//     age: 12,
//     isMarried: true
// }


// function question(data) {
//     if (data.age >= 18 && data.name.charAt(0) === "A") {
//         console.log("Welcome");
//     } else {
//         console.log("Goodbye");
//     }
// }

// question(user)
// question(user_second)



// Дз 

// написать функцию которая делает пропорции (total, broken)

// let total = +prompt('Сколько машин мы продали ?');
// let broken = +prompt('Сколько из них было возвращено ?');

// function proportion() {
//     let procent = (broken / total) * 100;
//     return procent;
// }

// alert(`${proportion()} процент денег должен быть возвращен`);




// lesson 26
// functions

// let total = 1000
// let broken = 506

// function calculate(a, b) {
//     let res = b * 100 / a


//     console.log(res);
// }

// calculate(total, broken)



// function findLongestName(arr, nameTwo, nameThree) {
//     console.log(arr, nameTwo, nameThree);
// }

// findLongestName()



// function a(arr) {
//     for (let item of arr) {
//         console.log(item);
//     }
// }

// a(['alex', 'jordan', 'michel']) // a по строкам тоже можно делать цикл



// function findLongestName(...names) {   // () это называется выходные ворота
//     // console.log(...names);
//     let In = ""

//     for (let name of names) {
//         if (name.length > In.length) {
//             In = name
//         }
//     }

//     return In
// }

//  console.log(
//     findLongestName('Alex', 'morgenshtern', 'Michael')
// );



// ... spread - распространить // открыть
// ... rest - собрать // закрыть




// exercise

// function findminNumber(...minNumber) {   // () это называется выходные ворота
//     console.log(...minNumber);
//     let In = Math.min(87, 24, 15, 19, 54, 68, 78, 36, 74)

//     for (let number of minNumber) {
//         if (number < In) {
//             In = number
//         }
//     }

//     return In
// }

// console.log(
//     findminNumber()
// );




// Дз

// 1. Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте 
// фибоначчи 0 + 1 = 1 + 2 = 3 = 5 = 8 = 13 = 21 = 34 = 55 = 89


let n = +prompt('Введите количество чисел Фибоначчи')

let a = 1, b = 1;
let i = 0;

while (i < n) {
    console.log(a);
    let c = a + b;
    a = b
    b = c
    i++;
}



// 2. В ручную создать функцию сорт с помощью циклов for of & while
// метод buble sort
// Сортировку пузырьком (Bubble Sort) также иногда называют сортировкой простыми обменами.
// В общем-то единственным преимуществом этого алгоритма и является то, что он предельно прост в реализации. Сам по себе он не является эффективным, имеет сложность O(n²) и на практике не используется. Но знать его не помешает, ведь на его основе созданы другие более сложные и оптимизированные алгоритмы — сортировка перемешиванием (Cocktail sort), сортировка кучей (Heapsort), быстрая сортировка (Quicksort).


let sort = [33, 245, 1, 15, 122, 5, 65, 90];
bubbleSort(sort) 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length - 1 - i; k++) {
            if (arr[k] > arr[k + 1]) {
                let bst = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = bst; 
            }
        }
    }
    console.log(arr);
}