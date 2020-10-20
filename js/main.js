'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'Разработка сайтов на фрилансе',
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 12;

let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while(!isNumber(money));
};
start();

// Функция получиает и выводит в консоль тип данных переданного в нее аргумента
function showTypeOf(data){
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Цель заработать ' + mission + ' рублей');
console.log('Период равен ' + period + ' месяцев');
console.log('money: ', money);
console.log('deposit: ', deposit);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses: ', addExpenses.toLowerCase().split(','));


let expenses = [];

// Функция возвращает сумму обязательных расходов за месяц
let getExpensesMonth = function(){
    let sum = 0,
        check;
    
    for (let i = 0; i < 2; i++){

        expenses[i] = prompt('Введите обязательную статью расходов?');
        
        do {
            check = prompt('Во сколько это обойдется?');
        }
        while(!isNumber(check) || check === '' || check === null);
        
        sum += +check;
        
    }

    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Сумма обязательных расходов равна: ' + expensesAmount);

// Функция возвращает Накопления за месяц, доходы минус расходы
function getAccumulatedMonth(){
    return money - expensesAmount;
}
console.log('Читсый доход равен: ' + getAccumulatedMonth());
let accumulatedMonth = getAccumulatedMonth();

// Функция считатет за какой переиод будет достигнута цель
function getTargetMonth(){
    return Math.ceil(mission / accumulatedMonth);
}

if (getTargetMonth() < 0){
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута за', getTargetMonth() + ' месяцев');
}


let budgetDay = Math.floor((money - getTargetMonth()) / 30);
console.log('Бюджет в сутки: ', budgetDay);

let getStatusIncome = function(){
    if (budgetDay >= 1200){
        return('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200){
        return('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay > 0){
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay <= 0){
        return('Что то пошло не так');
    }
};
console.log(getStatusIncome());



    

