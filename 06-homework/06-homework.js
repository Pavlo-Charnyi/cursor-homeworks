const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
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
1. Create function getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - which returns list of disciplines for specific student. Pay attention, that name of a discipline must be returned with capital first letter, and "_" shoild be replaced with "space".
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

console.log(getSubjects(students[0]));
// console.log(getSubjects(students[1]));
// console.log(getSubjects(students[2]));

/**
2. Create function getAverageMark(students[0]) --> 3.79 – which returns average mark for all disciplines of the passed into function student(not the whole array of all students). Mark should be rounded to the second number after comma.
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

  return Number(averageMark);

 } 

const am = getAverageMark(students[0]);

console.log(typeof am, "am");

console.log(getAverageMark(students[0])); 
// console.log(getAverageMark(students[1]));
// console.log(getAverageMark(students[2]));


/**
3. Create function getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – which returns information of common view (use function from prevoius tasks).Info to be showed: course, name, average mark.
 */

 const getStudentInfo = (student) => {
  const { course, name } = student;
  return { course, name, "averageMark": getAverageMark(student) };
}
console.log(getStudentInfo(students[0])); 
// console.log(getStudentInfo(students[1])); 
// console.log(getStudentInfo(students[2])); 


/**
4. Create function getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – which returns names of students in alphabetical order
*/

 const getStudentsNames = (students) => {
  const namesArray = []
  for (const iterator of students) {
    namesArray.push(iterator.name);
  }
  return namesArray.sort()
}

console.log(getStudentsNames(students));

/**
5. Create function getBestStudent(students) --> "Anton" – which returns best student from the list according to student's average mark.
*/

const getBestStudent = (students) => {

  const studentMarksObject = students.reduce((accum, current) => {
    for (const key in current) {
      accum[current.name] = getAverageMark(current);
    }
    return accum;
  }, {})

  let bestMark, bestMarkStudent;

  for (const key in studentMarksObject) {
    if(!bestMarkStudent) {
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
console.log(getBestStudent(students));

/**
6. Create function calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – which returns an object, in which keys are the letters of the passed, and values are the quantity of times they appear in the word.
*/
 const calculateWordLetters = (word) => {
  return word.split("").reduce((accum, current) => {
    if(!accum[current]) {
      accum[current] = 1;
    } else {
      accum[current]++;
    }
    return accum;
    }, {})  
 }

console.log(calculateWordLetters("тест")); 
