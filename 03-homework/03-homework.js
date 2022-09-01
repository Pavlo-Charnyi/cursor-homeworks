//Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
const getMaxDigit = (number) =>{
    const neWnumber = number.toString()
    let max;
    for (let i = 0; i < neWnumber.length; i++) {
        max = neWnumber[0];
        if (max < neWnumber[i]) max = neWnumber[i]
    }
    return parseInt(max);
}

//Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
const exponentiation = (number, toExponent) => {
    result = number;
    for (let i = 1; i < toExponent; i++) {
        result *= number; 
    } 
    return result;
}

//Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const firstToUpperCase = (name) => {
    const modifiedName = name.split("")

    for (let i = 0; i < modifiedName.length; i++) {
        if (i === 0){
            modifiedName[i] = modifiedName[i].toUpperCase() 
        } else {
            modifiedName[i] = modifiedName[i].toLowerCase() 
        } 
    }
    return modifiedName.join("");
}

//solution with use of slice method
const firstToUpperCaseSlice = (name) => {
    let modifiedName = name;
    let outputName = modifiedName.slice(0,1).toUpperCase()
    outputName += modifiedName.slice(1).toLowerCase()
    return outputName;
}

console.log(firstToUpperCaseSlice("paVlooo")); 

//Створити функцію, яка вираховує суму, що залишається після оплати податку від заробітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
const salaryCount = (salary, tax = 19.5) => {
    return salary - (tax / 100 * salary);
}  

//Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
const countLetter = (letter, word) => {
    let counter = 0;
    const toLower = (word) => word.toLowerCase();
    const modifiedWord = toLower(word);

    for (let i = 0; i < modifiedWord.length; i++) {
        if(modifiedWord[i] === letter){
            counter++;
        }  
    }
    return counter;
}

//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$. !Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
const convertCurrency = (currencySumm, currencyRate = 40) => {
    const toLower = (word) => word.toLowerCase();
    let inputCurrencySumm = toLower(currencySumm)

    if (!inputCurrencySumm.endsWith("$") && !inputCurrencySumm.endsWith("uah")) {
        return "Ви не вказали вид валюти для конвертації! Для обчислення суми додайте в кінці виразу $ або UAH, в залежності від валюти, що конвертується.";
    } 

    let pureSumm = parseInt(inputCurrencySumm); 

    if (inputCurrencySumm.endsWith("$")) {
        pureSumm *= currencyRate
    } else {
        pureSumm /= currencyRate;
    }

    return pureSumm
}

//Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам. Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
const getRandomPassword = (passwordLength = 8) => {
    const min = 0, max = 9
    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
        pass += getRandomNumber(min, max)
    }
    return pass;
}

//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (letter, sentence) => sentence.replaceAll(letter, "");

//Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
const isPalyndrom = (str) => {
    let inputStr = str.toLowerCase().replaceAll(" ", "").split("");
    let reversedStr = inputStr.slice().reverse();
    return reversedStr.join() === inputStr.join();
}

//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
const deleteDuplicateLetter = (str) => {
    const inputString = str.toLowerCase().replaceAll(" ", "")
    let outputString = "";
    for (let i = 0; i < inputString.length; i++) {
       if (countLetter(inputString[i], inputString) === 1) {
        outputString += inputString[i];
       } 
    }

    return outputString;
}

document.writeln(`
<h2>Відображення максимальної цифри у введенному числі (1236):</h2>
<h1>${getMaxDigit(1236)}</h1>

<h2>Визначення ступені числа (4, 8):</h2>
<h1>${exponentiation(4, 8)}</h1>

<h2>Форматування імені (вЛАД)</h2>
<h1>${firstToUpperCase("вЛАД")}</h1>

<h2>Форматування імені з використанням "slice" (вЛАДислаВ)</h2>
<h1>${firstToUpperCaseSlice("вЛАДислаВ")}</h1>

<h2>Розрахунок суми, що залишається після оплати податку (1000, 19.5)</h2>
<h1>${salaryCount(1000, 19.5)}</h1>

<h2>Повертає випадкове ціле число в діапазоні від N до M (1, 10)</h2>
<h1>${getRandomNumber(1, 10)}</h1>

<h2>Рахує скільки разів певна буква повторюється в слові ("а", "Асталавіста")</h2>
<h1>${countLetter("а", "Асталавіста")}</h1>

<h2>Конвертор валют - тільки долари і гривні ("100$") </h2>
<h1>${convertCurrency("100$")}

<h2>Генерація випадкового паролю (8)</h2>
<h1>${getRandomPassword(8)}</h1>

<h2>Функція, яка видаляє всі вказані в умові букви з речення ('a', "blablabla")</h2>
<h1>${ deleteLetters ('a', "blablabla")}</h1>

<h2>Функція, перевіряє, чи є слово паліндромом ("Я несу гусеня")</h2>
<h1>${isPalyndrom("Я несу гусеня")}</h1>

<h2>Функція, яка видаляє з речення букви, які зустрічаються більше 1 разу ("Бісквіт був дуже ніжним")</h2>
<h1>${deleteDuplicateLetter("Бісквіт був дуже ніжним")}</h1>

`)

