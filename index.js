let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) );

let num1 = +'1';
let num2 = 2;
let sum2 = +'1' + 2;
alert( sum2 );

let amount = prompt( 'Який обсяг флешки в Гб?' );
let file = ( (amount * 1000) / 820 );
alert( 'Поміщається на флешку файлів розміром в 820 Мб: ' + file.toFixed(0) );

let money = prompt( 'Введіть суму грошей в гаманці:' );
let ChocolatePrice = prompt( 'Яка ціна однієї шоколадки?' );
let change = ( money - ChocolatePrice );
let chocolate = ( money / ChocolatePrice );
alert( 'Кількість шоколадок:' + chocolate + ', Здача:' + change );

let character = prompt( 'Введіть будь-яке тризначне число:' );
character.toString();
alert([ ...character.toString() ].reverse().join('') );

let investment = prompt( 'Сума вкладу:' );
let interestRate = 5;
let days = 60;
let deposit = ( ((investment * interestRate * days) / 365) / 100 );
alert( 'Процентний дохід за вкладом складає:' + deposit );

alert( 2 || 0 || 3 ); // 2 - перше істинне значення

alert( 2 && 0 && 3); // 0 - перше хибне значення

alert(2 && 0 || 3); // 3 - бо 0 - перше хібне значення, а 3 - істинне значення

