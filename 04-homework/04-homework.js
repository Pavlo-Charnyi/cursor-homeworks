const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

//буде використана в завданнях 3 і 4
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const getPairs = (students) => {
    const newArr = students.slice(), male = [], female = [], resultArray = []
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i].endsWith("а")) {
            female.push(newArr[i]);
            continue;
        }
        male.push(newArr[i]);
    }
       
    for (let i = 0; i < male.length; i++) {
        resultArray[i] = [male[i], female[i]];
    }

    return resultArray;
}


//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
const projectAssigner = (studentsPairs, themes) => {
    const pairsProject = []

    for (let i = 0; i < studentsPairs.length; i++) {
        pairsProject[i] = [`${studentsPairs[i][0]} і ${studentsPairs[i][1]}`, themes[i]]

    }
    return pairsProject
}

//3.  Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const markAssigner = (students, marks) => {
    const studentsArray = [...students], marksArray = [...marks], studentMark = []
    for (let i = 0; i < studentsArray.length; i++) {
        //можна і не використовувати рандомайзер оцінок, а назначати по порядку: 
        //studentMark[i] = [studentsArray[i], marksArray[i]] 
        studentMark[i] = [studentsArray[i], marksArray[getRandomNumber(0, marks.length-1)]] //але ж так цікавіше
    }
    return studentMark
}


//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
const pairMarkAssigner = (pairsProject, marks) => {
    return pairsProject.reduce((accum, curr, index) => {
        accum.push(curr.toString().split(","));
        accum[index].push(marks[getRandomNumber(0, marks.length-1)]);
        return accum;
    }, [])
}


const pairs = getPairs(students);
console.log(pairs);

const pairsProject = projectAssigner(pairs, themes);
console.log(pairsProject); 

const studentMark = markAssigner(students, marks);
console.log(studentMark); 

const pairMarkAssigned = pairMarkAssigner (pairsProject, marks);
console.log(pairMarkAssigned);

document.writeln(`
<h1 style="color: darkblue;" >Результати роботи функцій дивись в консолі.</h1><hr>

<h1>Після виклику функцій оригінальні масиви залишись без змін (мутацій):</h1>
<h2>Масив студентів:</h2>
<p>[${students}]</p>

<h2>Масив тем:</h2>
<p>[${themes}]</p>

<h2>Масив оцінок:</h2>
<p>[${marks}]</p>
`);

