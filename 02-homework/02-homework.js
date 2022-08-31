let min, max;
const messages = ["Enter first integer:", "Enter second integer:", "Enter only integers:"];
const processed = (message) => parseInt(prompt(message))

while (isNaN(min)) {
    min == undefined ? min = processed(messages[0]) : min = processed(messages[2]);
}

while (isNaN(max)) {
    max == undefined ? max = processed(messages[1]) : max = processed(messages[2]);
}

const skipEven = confirm("Skip even numbers?")

let summ = 0;
for (let i = min; i <= max; i++) {
    let isCounterEven = i%2===0;
    if (skipEven && isCounterEven) continue;
    summ+=i
}

document.writeln(`Ви вказали наступні дані:
<br>Перше число: ${min} 
<br>Друге Число: ${max}`)

const ressultMessageSkipEven = `Ви вибрали пропустити парні числа, тому сума чисел від  ${min} до ${max} дорівнює:`
const ressultMessageNoSkip = `Ви вибрали враховувати парні числа, тому сума чисел від  ${min} до ${max} дорівнює:`;

document.writeln(`<br>${skipEven ? ressultMessageSkipEven : ressultMessageNoSkip}<br>`);

document.writeln(`<h1>${summ}</h1>`)
