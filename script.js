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


// чем отличается let от перемменный var
// var можно несколько раз создать а let нельзя var можно использовать где угодно, а let нельзя



// let girls = ['aziza', 'aziza', 'shaxrina', 'ismoil', 'alSafir', 'safir', 'bobur']
// let boys = ['manon', 'artyom', 'islom', 'baxtzod']


// // for(let item of girls) {
// //     console.log('Hello ' + item);
// // }

// // for(let item of boys) {
// //     console.warn('Hello ' + item); //  console.warn console выйдет знак опасно
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
// прогаммисти не любит повторить код



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

let total = +prompt('Сколько машин мы продали ?');
let broken = +prompt('Сколько из них было возвращено ?');

function proportion() {
    let procent = (broken / total) * 100;
    return procent;
}

alert(`${proportion()} процент денег должен быть возвращен`);