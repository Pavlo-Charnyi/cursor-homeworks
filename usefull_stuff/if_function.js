let phrase = "Привіт";

if (true) {
  let user = "Іван";

  function sayHi() {
    console.log(`${phrase}, ${user}`)
  }
}

sayHi();
sayHi();

/* Напишіть функцію sum яка працює ось так: sum(a)(b) = a+b.

Саме так, використовуючи подвійні дужки (це не друкарська помилка).

Наприклад: */

function sum(a){
    return function(b){
        return a + b;
    } 
}

console.log(sum(1)(2));
// sum(5)(-1) = 4