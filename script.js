let a = 1; //Задание 1

while (a < 3) {
    console.log("ПРИВЕТ");
    a++;
}

let i = 1; //Задание 2

while (i < 6) {
    console.log(i);
    i++;
}

let b = 7; //Задание 3

while (b < 23) {
    console.log(b);
    b++;
}

const obj = { //Задание 4
    Kolya: 200,
    Vasya: 300,
    Petya: 400
}

for (let key in obj) {
    console.log([key] + ' - Зарплата ' + obj[key] + ' долларов.');
}


for (let n = 1000, num = 1; n > 50; num++) { //Задание 5

    n /= 2;
    console.log(num);
}

let day = 1; // Задание 6
let fri = 1;

while (day <= 31) {
    console.log(`Сегодня пятница, ${fri} число. Необходимо подготовить отчет`);
    day = day + 7;
    fri = fri + 7;
}