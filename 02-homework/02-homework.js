let N, M;
const messages = ["Enter first integer:", "Enter second integer:", "Enter only integers:"];
const processed = (message) => parseInt(prompt(message))

while (N == undefined || isNaN(N)) {
    if (N == undefined) N = processed(messages[0]);
    if (isNaN(N)) N = processed(messages[2]);
}

while (M == undefined || isNaN(M)) {
    if (M == undefined) M = processed((messages[1]));
    if (isNaN(M)) M = processed((messages[2]));
}

let [First, Second] = [N, M]

const skipEven = confirm("Skip even numbers?")

let summ = 0;
for (N; N <= M; N++) {
    if (skipEven) {
        if (N%2===0) continue;
    }
    summ+=N
}

document.writeln(`Ви вказали наступні дані:
<br>Перше число: ${First} 
<br>Друге Число: ${Second}`)

const ressultMessageSkipEven = `Ви вибрали пропустити парні числа, тому сума чисел від  ${First} до ${Second} дорівнює:`
const ressultMessageNoSkip = `Ви вибрали враховувати парні числа, тому сума чисел від  ${First} до ${Second} дорівнює:`;

document.writeln(`<br>${skipEven===true ? ressultMessageSkipEven : ressultMessageNoSkip}<br>`);

document.writeln(`<h1>${summ}</h1>`)
