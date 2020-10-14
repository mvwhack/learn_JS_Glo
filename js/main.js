'use strict';

let money = +prompt('Ваш месячный доход?', 50000),
    income = 'Разработка сайтов на фрилансе',
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 12;

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
console.log('addExpenses: ', addExpenses.split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?');
console.log('Обязательные расходы - ' + expenses1 + ':', amount1);

let expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?');
console.log('Обязательные расходы - ' + expenses2 + ':', amount2);


// Функция возвращает сумму обязательных расходов за месяц
function getExpensesMonth(){
    return amount1 + amount2;
} 
console.log('Сумма обязательных расходов равна: ' + getExpensesMonth());

// Функция возвращает Накопления за месяц, доходы минус расходы
function getAccumulatedMonth(){
    return money - getExpensesMonth();
}
console.log('Читсый доход равен: ' + getAccumulatedMonth());
let accumulatedMonth = getAccumulatedMonth();

// Функция считатет за какой переиод будет достигнута цель
function getTargetMonth(){
    return Math.ceil(mission / accumulatedMonth);
}
console.log('Цель будет достигнута за', getTargetMonth() + ' месяцев');


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



    

