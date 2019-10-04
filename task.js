let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == '' || money == null) {
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
    savings: true
};

function chooseExpenses() {
for (let i = 0; i < 2; i++) {
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
    }
}
chooseExpenses();

function detectDayBudget() {
appData.moneyPerDay = (appData.budget / 30).toFixed(1);
}
detectDayBudget();

alert("Ежедневный бюджет: " + appData.moneyPerDay );

function detectLevel() {
if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i <3; i++) {
        let opt = +prompt("Статья необязательных расходов?");
    }
}
chooseOptExpenses();

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