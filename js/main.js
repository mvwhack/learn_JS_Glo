'use strict';

let btnStart = document.getElementById('start'), // Кнопка рассчитать.
    btnPlusIncome = document.getElementsByTagName('button')[0], // Кнопка добавления дополнительного дохода
    btnPlusExpenses = document.getElementsByTagName('button')[1], // Кнопка добавления расходов
    depositChekbox = document.querySelector( '#deposit-check' ), // Чекбокс депозита (Да или НЕТ)
    addIncomeItem = document.querySelectorAll( '.additional_income-item' ), // Поля ввода возможных доходов
    budgetMonthValue = document.getElementsByClassName( 'budget_month-value' )[0], // Доход за месяц
    budgetDayValue = document.getElementsByClassName( 'budget_day-value' )[0], // Дневной бюджет
    expensesMonthValue = document.getElementsByClassName( 'expenses_month-value' )[0], // Расход за месяц
    addIncomeValue = document.getElementsByClassName( 'additional_income-value' )[0], // Возможные доходы
    addExpensesValue = document.getElementsByClassName( 'additional_expenses-value' )[0], // Возможные расходы
    incomePeriodValue = document.getElementsByClassName( 'income_period-value' )[0], // Накопления за период
    targetMonthValue = document.getElementsByClassName( 'target_month-value' )[0], // Срок достижения цели в месяцах
    salaryAmount = document.querySelector('.salary-amount'), // Вводим свой месячный доход
    incomeTitle = document.querySelector( 'input.income-title' ), // Вводим наименование доп.дохода
    incomeAmount = document.querySelector( '.income-amount' ), // Вводим ссуму доп.дохода
    expensesTitle = document.querySelector( 'input.expenses-title' ), // Наименование обязательных расходов
    expensesAmount = document.querySelector( '.expenses-amount' ), // Сумма обязательных расходов
    addExpensesItem = document.querySelector( '.additional_expenses-item' ), // Возможные расходы, перечисление
    targetAmount = document.querySelector( '.target-amount' ), // Цель, какую ссумму хотим накопить
    selectPeriod = document.getElementsByClassName( 'period-select' )[0], // выбираем за какой период
    depositInBank = document.getElementsByTagName( 'select' )[0], // Выбираем банк в котором депозит
    depositAmount = document.getElementsByClassName( 'deposit-amount' )[0], //  Какая сумма размещена в банке
    depositPercent = document.getElementsByClassName( 'deposit-percent' )[0]; // Под какой процент


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
    percentDeposit: 0,
    moneyDeposite: 0,
    mission: 1000000,
    period: 12,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){

        if(confirm('Есть ли у вас дополнительный источник зароботка?')){


            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный зароботок?');
            } 
            while ( !isNaN( itemIncome ) || itemIncome === '' || itemIncome === null );
            

            let cashIncome;
                do {
                    cashIncome = +prompt('Сколько в месяц вы на этом зарабатываете?');
                }
                while(!isNumber(cashIncome));

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses;
            do {
                addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLowerCase().split(',');
            } 
            while ( !isNaN( addExpenses ) || addExpenses === '' || addExpenses === null );
        
        // Задаем вопрос о наличии депозита.
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        // Возвращает сумму обязательных расходов.
        for (let i = 0; i < 2; i++) {

            // Добавить сюда проверку!
            let expensesItem;
                do {
                    expensesItem = prompt( 'Введите обязательную статью расходов?');
                } 
                while ( !isNaN( expensesItem ) || expensesItem === '' || expensesItem === null );
                
            let expensesCost;
                do {
                    expensesCost = +prompt( 'Во сколько это обойдется?');
                } 
                while(!isNumber(expensesCost));

                appData.expenses[expensesItem] = expensesCost;
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
        appData.budgetMonth = Math.floor(money - appData.expensesMonth);
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
    },
    getInfoDeposit: function(){
        if(appData.deposit){

            do{
                appData.percentDeposit = +prompt('Какой годовой процент?');
                appData.moneyDeposite = +prompt('Какая сумма размещена на депозите?');
            }
            while(!isNumber(appData.percentDeposit) || !isNumber(appData.moneyDeposite));
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
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
appData.getInfoDeposit();


for (let word of appData.addExpenses) {
    word = word.trim();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);
}

console.log(appData.percentDeposit, appData.moneyDeposite, appData.calcSavedMoney());

