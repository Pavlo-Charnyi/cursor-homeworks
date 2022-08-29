/**
++ Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
* Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
* ++ Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
* ++ Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
* ++ Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
* ++ Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
* Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$. 
!Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
*
* ++ Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
* ++ Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
* ++ Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
* ++ Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"
 */


//++ Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
const getMaxDigit = (number) =>{
    number = number.toString()
    let max;
    for (let i = 0; i < number.length; i++) {
        if (max === undefined || max < number[i]) max = number[i]
    }
    return parseInt(max);
}

//Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

const exponentiation = (number, toExponent) => {
    result = number;
    for (let i = 1; i < toExponent; i++) result *= number 
    return result;
}

//++ Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const firstToUpperCase = (name) => {

const modifiedName = name.split("")

for (let i = 0; i < modifiedName.length; i++) {
    if (i === 0) modifiedName[i] = modifiedName[i].toUpperCase() 
    if (i > 0) modifiedName[i] = modifiedName[i].toLowerCase() 
}

return modifiedName.join("");

}
// console.log(firstToUpperCase(name)); 

// ++ Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

const salaryCount = (salary, tax=19.5) => {
    return salary - (tax / 100 * salary);
}  

//* ++ Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//* ++ Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
const countLetter = (letter, word) => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
    word[i] === letter ? counter++ : ""
    }
    return counter
}

//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$. !Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

const convertCurrency = (currencySumm, currencyRate=40) => {
    currencySumm = currencySumm.toLowerCase();
    if (!currencySumm.endsWith("$") && !currencySumm.endsWith("uah")) return "Ви не вказали вид валюти для конвертації! Для обчислення суми додайте в кінці виразу $ або UAH, в залежності від валюти, що конвертується.";
    let pureSumm = parseInt(currencySumm); 
    return currencySumm.endsWith("$") ? pureSumm * currencyRate : pureSumm / currencyRate;
}

//++ * Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам. Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

const getRandomPassword = (passwordLength=8) => {
    const randomNuber = () => Math.floor(Math.random() * 10);
    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
        pass += randomNuber()
    }
    return pass;
}

//++Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (letter, sentence) => sentence.replaceAll(letter, "");

// ++ Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
const isPalyndrom = (str) => {
    let inputStr = str.toLowerCase().replaceAll(" ", "").split("");
    let reversedStr = inputStr.slice().reverse();
    return reversedStr.join() === inputStr.join();
}

// ++ Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter(
//"Бісквіт був дуже ніжним") -> "сктдеим"
const deleteDuplicateLetter = (str) => {
    let outputString = "";
    str = str.toLowerCase().replaceAll(" ", "")

    for (let i = 0; i < str.length; i++) {
       if ((countLetter(str[i], str) === 1)) outputString += str[i];
    }

    return outputString;
}

