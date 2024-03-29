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
    chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector(".choose-sum"),
    percentValue= document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

calculation.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let a = input[i].value,
            b = input[++i].value;

        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
            b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget - expensesValue.textContent / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelNewValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelNewValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelNewValue.textContent = "Высокий уровень достатка";
        } else {
            levelNewValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100  * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100  * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};



//     chooseExpenses: function () {

//     },
//     detectDayBudget: function () {

//         alert("Ежедневный бюджет: " + appData.moneyPerDay);
//     },
//     detectLevel: function () {

//     },
//     checkSavings: function () {
//         if (appData.savings == true) {
//             let save = +prompt('Какова сумма накоплений?'),
//                 percent = +prompt('Под какой процент?');


//             alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
//         }
//     },
//     chooseOptExpenses: function () {
//         // Функция для определения необязательных расходов

//     },
//     chooseIncome: function () {


//         if (typeof (items) === 'string' && items != '' && items != null) {
//             console.log('Все правильно!');
//         } else {

//             appData.income.push(prompt('Может что-то еще?'));
//             appData.income.sort();
//         }

//         appData.income.forEach(function (mass, i, ) {
//             alert('Способы дополнительного зароботка: ' + (i + 1) + ' - ' + mass);
//         });
//     }
// };

// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + " _ " + appData[key]);
// }

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