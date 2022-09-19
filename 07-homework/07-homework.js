const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/**
1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
*/

function getMyTaxes(salary) {
  return Number(this.tax * salary);
}
console.log(getMyTaxes.call(ukraine, 10000));

/**
2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
 */

function getMiddleTaxes(country) {
  return Number((this.tax * this.middleSalary).toFixed(2));
}

console.log(getMiddleTaxes.call(ukraine));

/**
3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
 */

 function getTotalTaxes(country) {
  const totalTaxes = (this.tax * this.middleSalary * this.vacancies).toFixed(2);
  return Number(totalTaxes);
 }

console.log(getTotalTaxes.call(latvia));


/**
4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes; для виводу в консоль кожні 10 секунд використайте setInterval
 */
function getMySalary(country) {
  
  const objectToReturn = {}

  const newObjectReturnFn = () => {
    objectToReturn.salary = getRandomNumber(1500, 2000);
    objectToReturn.taxes = Number((this.tax * objectToReturn.salary).toFixed(2));
    objectToReturn.profit = Number((objectToReturn.salary - objectToReturn.taxes).toFixed(2));
    return objectToReturn;
  }

  setInterval(() =>  console.log(newObjectReturnFn()), 10000);

}

getMySalary.call(ukraine)


//helper function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

