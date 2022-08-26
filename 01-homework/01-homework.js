const pants = 15.678, sneakers = 123.965, hoody = 90.2345;

const max = Math.max(pants, sneakers, hoody)
document.writeln("<br>" + max); //123.965

const min = Math.min(pants, sneakers, hoody)
document.writeln("<br>" + min); //15.678

const summ = pants + sneakers + hoody;
document.writeln("<br>" + summ);//229.8775

const summFloor = Math.floor(pants) + Math.floor(sneakers) + Math.floor(hoody)
document.writeln("<br>" + summFloor); //228

const round = Math.round(summFloor / 100) * 100; //200
document.writeln("<br>" + round); //200

const isEven = summFloor % 2 === 0; //true
document.writeln("<br>" + isEven);

const remainder = (500 - summ).toFixed(2); 
document.writeln("<br>" + remainder); //270.12 

const meanValue = (summ  / 3).toFixed(2); 
document.writeln("<br>" + meanValue); //76.63

const discount = Math.floor(Math.random() * 100) + 1; 
document.writeln("<br>" + `Знижка у відсотках: ${discount}`);

const discountSumm = (discount / 100 * summ.toFixed(2)).toFixed(2);
document.writeln("<br>" + `Сума знижки: ${discountSumm}`);

const summToPay = (summ.toFixed(2) - discountSumm).toFixed(2)
document.writeln("<br>" + `Сума до оплати: ${summToPay}`);

const halfSumm = summ.toFixed(2) / 2;
const income = (summToPay - halfSumm).toFixed(2);

const incomeOrLosses = Math.sign(income) > 0;
document.writeln(incomeOrLosses ? `<br>Чистий прибуток: ${income}` : `<br>Збитки: ${income}`);

// Advanced:
document.writeln("<br>" + `
<br>*** Завдання Advanced ***
<br>Максимальне число: ${max}
<br>Мінімальне число: ${min}
<br>Сума вартості всіх товарів: ${summ}  
<br>Сума цілих частин (без копійок) вартості кожного товару: ${summFloor} 
<br>Сума товарів округлена до сотень: ${round} 
<br>Булеве значення: ${isEven}
<br>Сума решти: ${remainder}
<br>Середнє значення цін: ${meanValue}
<br>Випадкова знижка (у відсотках): ${discount}
<br>Сума знижки: ${discountSumm}
<br>Сума до оплати після зі знижкою: ${summToPay} 
<br>${incomeOrLosses ? `Чистий прибуток: ${income}` : `Збитки: ${income}`}
`);