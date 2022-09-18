class Student {
  constructor(university, course, fullName, marks) {
    this.fullName = fullName;
    this.university = university;
    this.course = course;
    this.dismissed = false;
    this.marksArr = marks;
  }

  get getInfo() {
    return `Студент курсу ${this.course} в ${this.university}, ${this.fullName}.`;
  }

  get marks() {
    if(!this.dismissed) {
      return this.marksArr;
    } else {
      return null;
    }
  }

  set marks(mark) {
    if(this.marks) {
        this.marksArr.push(mark);
        return this.marksArr;
    } else {
        return null;
    }
  }

  get getAverageMark() {
    if(!this.dismissed) {
      return this.marksArr.reduce((accum, curr) => {
        accum += curr
        return accum;
      }, 0) / this.marks.length;
    } else {
      return null;
    }
  }

  get dismiss(){
    this.dismissed = true;
  }

  get recover(){
    this.dismissed = false;
  }

}

//1.
const student1 = new Student("Cursor Education ІТ-school", "Front-End", "Павло Чарний", [5, 4, 4, 5]);

//2.
console.log(student1.getInfo);
//3.
console.log(student1.marks);
//4.
student1.marks = 5;
//5.
console.log(student1.getAverageMark);
//6.
student1.dismiss;
console.log(student1.marks);
console.log(student1.getAverageMark);
//7.
student1.recover
console.log(student1.marks);
console.log(student1.getAverageMark);


//Advanced task
class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super();
    this.fullName = fullName;
    this.university = university;
    this.course = course; 
    this.marksArr = marks;
    this.dismissed = false;
    setInterval(() => {   
      this.getScholarship;
    }, 30000 )
  }

  get getScholarship () {
    if (this.dismissed) {
      console.log(`Вас виключено зі школи. Спочатку поновіться, старанно навчайтесь та отримуйте хороші оцінки і зможете розраховувати на стипендію.`); 
    } else if (this.getAverageMark < 4.0) {
      console.log(`Ваш поточний середній бал ${this.getAverageMark}. Для отримання стипендії спочатку підтягніть оцінки.`);
    } else {
      console.log(`Ви отримали 1400 грн. стипендії.`);
    }
  }
}


const student2 = new BudgetStudent("Cursor Education ІТ-school", "Front-End", "Сергій Притула", [4, 4, 4, 5])

console.log(student2);
student2.marks;
student2.getScholarship;
student2.dismiss;
student2.getScholarship;
student2.recover;
student2.getScholarship;
student2.marks = 2;
student2.marks = 2;
student2.getScholarship;
console.log(student2.marks);

