 const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 300, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 6, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

/**
++ 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
 * @param {*} student 
 * @returns array of subjects
 */
const getSubjects = (student) => {
  const { subjects } = student;
  const subjectsArray = [];
  for (const key in subjects) {
    subjectsArray.push(key.replace("_", " "));
  }
  const subjectsArrayCapitalized = subjectsArray.map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
  return subjectsArrayCapitalized
} 

// console.log(getSubjects(students[0]));
// console.log(getSubjects(students[1]));
// console.log(getSubjects(students[2]));

/**
 ++ 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
 */
 getAverageMark = (student) => {
  const { subjects } = student;
  const subjectMarksArray = [];
  
  for (const key in subjects) {
    subjectMarksArray.push(subjects[key]);
  }

  const allMarksArray = subjectMarksArray.flat();
  const allMarksTotal = allMarksArray.reduce((accum, curr) => accum += curr, 0)
  const averageMark = (allMarksTotal / allMarksArray.length).toFixed(2);

  return averageMark;

 } 
// console.log(getAverageMark(students[0])); 
// console.log(getAverageMark(students[1]));
// console.log(getAverageMark(students[2]));


/**
 ++ 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
 */

 const getStudentInfo = (student) => {
  const { course, name } = student;
  const studentInfo = { course, name, "averageMark": getAverageMark(student) };
  return studentInfo;
}
// console.log(getStudentInfo(students[0])); 
// console.log(getStudentInfo(students[1])); 
// console.log(getStudentInfo(students[2])); 


/**
++ 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
 */

 const getStudentsNames = (students) => {
  const namesArray = []
  for (const iterator of students) {
    namesArray.push(iterator.name);
  }
  return namesArray.sort()
}

// console.log(getStudentsNames(students));

/**
++ 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
 */

const getBestStudent = (students) => {

  const studentMarksObject = students.reduce((accum, current) => {
    for (const key in current) {
      accum[current.name] = Number(getAverageMark(current));
    }
    return accum;
  }, {})

  let bestMark, bestMarkStudent;

  for (const key in studentMarksObject) {
    if(bestMarkStudent == undefined) {
      bestMarkStudent = key;
      bestMark = studentMarksObject[key];
    } 
    
    if (studentMarksObject[key] > bestMark) {
      bestMarkStudent = key;
      bestMark = studentMarksObject[key];
    }
  }

  return bestMarkStudent; 
}

// console.log(getBestStudent(students));

/**
 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
 * 
 */

 const calculateWordLetters = (word) => {
  const lettersArray = word.split("") 

  const lettersObject = lettersArray.reduce((accum, current) => {
    if(accum[current] == undefined) {
      accum[current] = 1
    } else {
      accum[current]++
    }
    return accum  
  }, {})

  return lettersObject
 }
// --> { "т": 2, "е": 1, "с": 1 }

console.log(calculateWordLetters("тест")); 