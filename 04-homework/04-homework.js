/**
Кожне завдання виконується у вигляді чистої функції. Функція повертає масив або інше значення, але не змінює його!
У консоль/html виводите результат виклику функції:
const pairs = getPairs(students);
console.log(pairs);

Перед виконанням цього домашнього завдання необхідно створити 3 масиви:
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

++ Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

++ Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

++ Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
 */


const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (arr) => {
    const newArr = arr.slice(), male = [], female = [], resultArray = []
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i].endsWith("а")) {
            female.push(newArr[i]);
            continue;
        }
        male.push(newArr[i]);
    }
    
    male.length >= female.length ? resultArray.length = male.length : resultArray.length = female.length
       
    for (let i = 0; i < male.length; i++) {
        resultArray[i] = [male[i], female[i]];
    }

    return resultArray;
}

// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
const projectAssigner = (arr1, arr2) => {
    const pairs = [...arr1], topics = [...arr2], pairsProject = []

    pairs.length >= topics.length ? pairsProject.length = pairs.length : pairsProject.length = topics.length

    for (let i = 0; i < pairsProject.length; i++) {
        pairsProject[i] = [`${pairs[i][0]} і ${pairs[i][1]}`, topics[i]]

    }

    console.table(pairsProject);
    return pairsProject
}

console.log(projectAssigner(getPairs(students), themes)); 

// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const marksAssigner = (students, marks) => {
    const studentsArray = [...students], marksArray = [...marks], studentMark = []
    for (let i = 0; i < studentsArray.length; i++) {
        studentMark[i] = [studentsArray[i], marksArray[i]]
    }
    return studentMark
}

console.log(marksAssigner(students, marks)); 