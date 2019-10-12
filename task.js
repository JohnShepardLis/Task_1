let calculation = document.getElementById('start'),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelNewValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    input = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncomeLabel = document.querySelector(".choose-income-labe"),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
    
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", +""),
                b = prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
                b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        // Функция для определения необязательных расходов
        for (let i = 0; i < 3; i++) {
            let optionalExpenses = +prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = optionalExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        if (typeof (items) === 'string' && items != '' && items != null) {
            console.log('Все правильно!');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }

        appData.income.forEach(function (mass, i,) {
            alert('Способы дополнительного зароботка: ' + (i+1) + ' - ' + mass);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + " _ " + appData[key]);
}

/*let i = 0;

while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", + ""),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != ''
    && b != '' && a.length < 50) {
       console.log("done");
       appData.expenses[a] = b;
    } else { 
        console.log("no");
       i--; 
    } 
     i++;
};

appData.moneyPerDay = (appData.budget / 30);

alert("Ежедневный бюджет: " + appData.moneyPerDay );

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};

let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", + ""),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != ''
    && b != '' && a.length < 50) {
       console.log("done");
       appData.expenses[a] = b;
    } else { 
        console.log("no");
       i--; 
    } 
     i++; 

} while (i < 2);

appData.moneyPerDay = (appData.budget / 30);

alert("Ежедневный бюджет: " + appData.moneyPerDay );

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};
*/