
// const a = 'змінна а';

// console.log(a);

// const b = 'змінна b';

// console.log(b);

// console.log(5);

// console.log('7')


// const type = typeof 5;

// console.log(type);


// console.log("do");

// alert("jhjhjkjhkjjkk");

// console.log("posle");

// перша частина
// =================================================================================

// Створення іконки на пе5реміннні так чи ні!

// const numer = confirm("хочете подовжити час оренди??");

// console.log(numer);








// Своркенння іконки на введення тутди написанного змісту!!!

// зверніть увагу на перемінну лет замісь конст це має важливу
// значимість так як конст не дає замінитись значимості

// let qveri = prompt("Введіть кіькість товару");
// qveri = Number(qveri);
// console.log(qveri);
// console.log(typeof qveri);

// Друга частина!
// ===============================================================================

// Частина третя!

// Парс цілового числового типу Number.parseInt()
// Парс дробового числового типу Number.parseFloat

let elementPars = "60px";

const result = Number.parseInt(elementPars);

console.log(result);

let elementLet = "500.89px"
elementLet = Number.parseFloat(elementLet);
console.log("elementLet",elementLet);

// Метод число (введення кількості чилових символів) toFixed

let fix = 1567.87698;
fix = fix.toFixed(3); //введеняя кількості символів
fix = Number(fix); //переведеня типу даних зі строки в цифри

// fix = Number(fix.toFixed(2)); КОМПАКТНИЙ СПОСІБ ВВЕДЕННЯ
//введеняя кількості символів //переведеня типу даних зі строки в цифри

// console.log(Number(fix.toFixed(3))); консольний спосіб введення кількості символів і типу даних

console.log(fix);


// ==================================================================================================

// Частина четверта

// Приведення(перетворення) до числа з Number(color)
// Значення NaN(Not a Number) і метод Number.isNaN(color)

let relor = "30";
let color = "цю строку неможливо перевети до числа";

// ======================================================================

// Частина пята

// Об"єкт Math
// Exponent operator

// Зведення в ступінь
// const mase = 6;
// const pare = 8;

// const resulete = Math.pow(mase, pare);

// console.log(resulete);

// задача 1
// Напиши скрипт який просить користувача ввести число і степень,
// зводить число в цю степінь і виводить результат консоль

// 1. попросити ввести число і зберегти в перемінну
// let base = prompt("Введи число");
// base = Number(base);

// console.log(base);

// 2. попросити ввести степінь і зберегти в перемінну
// let power = prompt("Введи число");
// power = Number(power);
// console.log(power);

// 3.Звести введенні дані в степень і вивести

// const resulite = base ** power;

// console.log(resulite);


// Генерація псевдораптового числа
// Math.random() - формула вибору рандомного числа
// Math.random() * (max - min) + min;

// Math.round() - формула заокруглення 

const max = 70;
const min = 20;

// const resulite = Math.random() * (max - min) + min;

const resulite = Math.round(Math.random() * (max - min) + min);



console.log(resulite);

// *
// ======================================================================
// *

// 1 частина

// Довжина лінії, властивість length

const messege = "В цій лінії 26 символів";
console.log(messege.length);

// конкатинація лінії

const firName = "Chelsy";
const lastName = "Emerald";
const fiheName = firName + lastName;

console.log(fiheName);

// Напиши скрипт який виледе лінію в форматі:
// "Гість х у поселится в z номер q",
// підставивши замісь х у z q значеням переміних

const room = 716;
const type = "VIP";

// const welcome = "Гість " + firName + " "
//     + lastName + "поселився в " + type + " номер " + room;

// простіший динамічний(${})варянт написання верхньої операції
const welcome = `Гість ${firName} ${lastName} поселився в ${type} номер ${room}`;

console.log(welcome);

// ===================================================================

// Часттина 2

// Шаблонні лінії
// Повертаємся до створеню лінії поселеня в готель

const numerHotel = 5;
const omber = "замовлення 6 холодильників в номерах готелю"

console.log(`kjkjlkjlkjlkjlkjlkkj ${omber}`);

// Нормалізація з методом toLowerCase()
// тобто зміна символів з великих до менших.
// 'Що шукаєм?'

let brend = "Samsung";
brend = brend.toLowerCase();


console.log(brend);

// ===========================================================================

// Частина 3


// Пошук в лінії з методом includes() тобто вичислення даного слова яке вказане в дужках


const spam = "спам";
const rasprodaga = "розпродаж";

const string = "пропозиція стати міліонером не думайте що це спам (но ето не точно) )";
const string2 = " Сама велика POЗППРОДАЖ цієї неділі, не пропусіть";
const string3 = "рекламна компанія"


console.log(string.includes(spam));
console.log(string.includes(rasprodaga));

console.log(string2.includes(spam));
console.log(string2.includes(rasprodaga));

console.log(string3.includes(spam));
console.log(string3.includes(rasprodaga));

// =========================================================================


let i = 10;

if ((i < 15) && (i < 5)) {
    console.log('yes');
} else if (i < 15) {
    console.log('VARIANT 1');
} else if (i < 75) {
    console.log('VARIANT 2');
} else {
    console.log('VARIANT 3');
}


i === 10 && i < 15  ? console.log('YES') : console.log('NO');



const findName = 'Artem'


switch (findName) {
    case 'Artem':
        console.log('NO');
        break;
    case 'Anna':
        console.log('NO');
        break;
    case 'Maks':
        console.log('YES');
        break;
    default:
        console.log('YPALO');
        break;
}



















