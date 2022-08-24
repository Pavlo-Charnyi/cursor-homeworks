const pants = 15.678, sneakers = 123.965, hoody = 90.2345;

const max = Math.max(pants, sneakers, hoody)
console.log(max); //123.965

const min = Math.min(pants, sneakers, hoody)
console.log(min); //15.678

const summ = pants + sneakers + hoody;
console.log(summ);//229.8775

const summFloor = Math.floor(pants) + Math.floor(sneakers) + Math.floor(hoody)
console.log(summFloor); //228

const round = Math.round(summFloor / 100) * 100; //200
console.log(round); //200

const isEven = summFloor % 2 === 0; //true
console.log(isEven);

const remainder = (500 - summ).toFixed(2); //270.12 
console.log(remainder); //270.12 

const meanValue = ((pants + sneakers + hoody) / 3).toFixed(2); 
console.log(meanValue); 

const discount = Math.floor(Math.random() * 100) + 1; 
console.log(`Знижка у відсотках: ${discount}`);

const discountSumm = (discount / 100 * summ.toFixed(2)).toFixed(2);
console.log(`Сума знижки: ${discountSumm}`);

const summToPay = (summ.toFixed(2) - discountSumm).toFixed(2)
console.log(`Сума до оплати: ${summToPay}`);

const income = (summToPay - (summ.toFixed(2) / 2)).toFixed(2);

console.log(Math.sign(income) > 0 ? `Чистий прибуток: ${income}` : `Збитки: ${income}`);

// Advanced:
console.log(`
*** Завдання Advanced ***
Максимальне число: ${max}
Мінімальне число: ${min}
Сума вартості всіх товарів: ${summ}  
Сума цілих частин (без копійок) вартості кожного товару: ${summFloor} 
Сума товарів округлена до сотень: ${round} 
Булеве значення: ${isEven}
Сума решти: ${remainder}
Середнє значення цін: ${meanValue}
Випадкова знижка (у відсотках): ${discount}
Сума знижки: ${discountSumm}
Сума до оплати після зі знижкою: ${summToPay} 
${Math.sign(income) > 0 ? `Чистий прибуток: ${income}` : `Збитки: ${income}`}
`);