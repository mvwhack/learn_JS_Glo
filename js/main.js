'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function() {
        do {
            money = prompt('Ваш месячный доход?');
        }
        while(!isNumber(money));
};
start();

let appData = {
    budget: money,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        // Возвращает сумму обязательных расходов.
        for (let i = 0; i < 2; i++) {
            let expensesItem = prompt( 'Введите обязательную статью расходов?'),
                expensesCost = +prompt( 'Во сколько это обойдется?');

            if ( (typeof(expensesItem)) === 'string' && expensesItem !== null && expensesItem !== '' &&  expensesCost !== '' && expensesCost !== null ){
                appData.expenses[expensesItem] = expensesCost;
            } else {
                i = i - 1;
            }
        }
    },
    // Функция считает сумму расходов
    getExpensesMonth: function(){
        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];
        }
    },
    // Функция возвращает Накопления за месяц, доходы минус расходы
    getBudget: function(){
        appData.budgetMonth = Math.floor(money - appData.budgetMonth);
        appData.budgetDay = appData.budgetMonth / 30;
        return money - appData.expensesMonth;
    },
    // Функция считатет за какой переиод будет достигнута цель
    getTargetMonth: function(){
        let getTarget = Math.ceil(appData.mission / appData.getBudget());

        if (getTarget < 0){
            return('Цель не будет достигнута');
        } else {
            return('Цель будет достигнута за', getTarget + ' месяцев');
        }
    },
    getStatusIncome: function(){
        if (appData.budgetDay >= 1200){
            return('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200){
            return('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0){
            return('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay <= 0){
            return('Что то пошло не так');
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();


console.log('Сумма расходов за месяц равна: ' + appData.expensesMonth);
console.log('Цель будет достигнута за ' + appData.getTargetMonth());
console.log('Ваш уровень дохода: ' + appData.getStatusIncome());

for(let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}


    

