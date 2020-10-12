let money = 150000;
console.log(typeof money);

let income = 'Разработка сайтов на фрилансе';
console.log(typeof income);

let addExpenses = 'Квартплата, Интернет, Телефоны, Бензин';
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(', '));

let deposit = true;
console.log(typeof deposit);

let mission = 1000000;
console.log('Цель заработать ' + mission + ' рублей');

let period = 12;
console.log('Период равен ' + period + ' месяцев');


alert('Привет, меня зовут Влад');

console.log('Проверка работы консоли');

let budgetDay = 150000 / 30;
console.log(budgetDay);

money = +prompt('Ваш месячный доход?');
console.log('money: ', money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses: ', addExpenses);

deposit = confirm('Есть ли у вас депозит в банке?');
console.log('deposit: ', deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
console.log('amount1: ', amount1);

let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');
console.log('amount2: ', amount2);

let budgetMonth = amount1 + amount2;
console.log('budgetMonth: ', budgetMonth);


let months = Math.ceil(mission / (money - budgetMonth));
console.log('Цель будет достигнута за', months + ' месяцев');

budgetDay = Math.floor((money - budgetMonth) / 30);
console.log('Бюджет в сутки: ', budgetDay);

if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0){
    console.log('Что то пошло не так');
}
    

