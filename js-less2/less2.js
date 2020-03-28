//#1
//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18),
// взрослым (18_60) или пенсионером (60– ...).


// let age = prompt("Введіть свій вік")
// if (age > 0 && age < 12){
//     message = "лягай спати,Ти Дітьо"
// } 
// else if (age >= 12 && age <= 17){
//     message = "Лягай спати,завтра в школу"
// }
// else if (age >= 18 && age < 60){
//     message = "Ти Дядько"
// }
// else if (age > 60){
//     message = "You are pensia"
// }
// alert(message);



//#2
//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).



// let user = prompt('Введіть цифру від 0 до 9, і тобі покаже який символ розташований на цій клавіші!')
// if(user == 0 ) {
//     message = ")"
// }else if (user == 1) {
//     message = "!"
// }else if (user == 2) {
//     message = "@"
// }else if (user == 3) {
//     message = "#"
// }else if (user == 4) {
//     message = "$"
// }else if (user == 5) {
//     message = "%"
// }else if (user == 6) {
//     message = "^"
// }else if (user == 7) {
//     message = "&"
// }else if (user == 8) {
//     message = "*"
// }else if (user == 9) {
//     message = "("
// }

// alert(message);



//#3
//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.



// let userNumber = prompt ('Введіть трьохзначне число і я тобі скажу чи є там однакові чиисла');
// let number0 = userNumber[0]; 
// let number1 = userNumber[1];
// let number2 = userNumber[2];

// if (number0 == number1 && number1 == number2) {
//     message = "Cпівпали усі числа"
// }else if (number0 == number1) {
//     message = "Перші два числа співпали"
// }else if (number1 == number2) {
//     message = "Останні числа співпали"
// }else if (number0 == number2 ) {
//     message = "Перший і останій число співпали"
// }else{
//     message = "на жаль нічого не співпало"
// }

// alert(message);




//#4
//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let user = prompt('Введіть рік,і я перевірю чи він високосний')
// if (user % 400 == 0) {
//     message = 'Рік ВИСОКОСНИЙ!!!'
// }else if (user % 4 == 0 && user % 100 > 0 ) {
//     message = 'Рік ВИСОКОСНИЙ!!!'
// }else {
//     message = 'Цей рік НЕ ВИСОКОСНИЙ'
// }
// alert(message);




//#5
//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом


// let userNumber = prompt("Введіть п'ять цифр і я вичислю чи воно являється паліндромом");
// let number0 = userNumber[0];
// let number1 = userNumber[1];
// let number2 = userNumber[2];
// let number3 = userNumber[3];
// let number4 = userNumber[4];

// if (number0 == number4 && number1 == number3) {
//     message = 'Число являється Паліндромом!!'
// }else {
//     message = 'Це число не є Паліндромом'
// }

// alert(message);




//#6
//Написать конвертор валют.
//Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// let usd = prompt("Введіть к-сть доларів для обміну");
// const EUR = 0.89;
// const UAH = 28.13;
// const AZN = 1.69;
// let valute = prompt('Введіть у яку валюту конвертувати EUR , UAH або AZN');
// if (valute == 'EUR') {
//     message = `Ви отримаєте ${usd * EUR} EUR` 
// }else if (valute == 'UAH') {
//     message = `Ви отримаєте ${usd * UAH} UAH`
// }else if (valute == 'AZN') {
//     message = `Ви отримаєте ${usd * AZN} UAH`    
// }else{
//     message = 'Помилка вводу'
// }

// alert(message);



//#7
//Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// let many = prompt('Скільки гривень ви потратили на шопінг?');
// if ( many <= 199 ) {
//     message = `Ви отримаєте товар без знижки =( , з вас ${many} грн`
// }else if ( many >=200 && many <= 300) {
//     message = `Ви отримали знижку на товар 3%, з вас ${Math.trunc((many / 100) * 97)} грн`
// }else if (many > 300 && many <= 500) {
//     message = `Ви отримали знижку на товар 5%, з вас ${Math.trunc((many / 100) * 95)} грн`
// }else if (many > 500) {
//     message = `Ви отримали знижку на товар 7%, з вас ${Math.trunc((many / 100) * 93)} грн`
// }
// alert(message);

















