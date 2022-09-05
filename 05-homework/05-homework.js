/**
 * 1. Create function getRandomArray(length, min, max) that returns array of random numbers. Function parameters: length - length of array, min – minimal value of an integer, max – maximum value of an integer.
 * @param {*} length length of array
 * @param {*} min minimal value of an integer
 * @param {*} max maximum value of an integer
 * @returns array of random numbers
 */
const getRandomArray = (length = 15, min = 1, max = 100) => {
    const resultArray = [];
    const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < length; i++) {
        resultArray[i] = randomNumber();
        //or without function randomNumber like this: resultArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return resultArray
 }

document.writeln(`
<h2>1. Create function getRandomArray(length, min, max) that returns array of random numbers. Function parameters: length - length of array, min – minimal value of an integer, max – maximum value of an integer.</h2>
<h3>getRandomArray(15, 1, 100)</h3>
<h1>${getRandomArray(15, 1, 100)}</h1>`);

console.log(getRandomArray(15, 1, 100));

/**
 * 2. Create function getModa(...numbers) – which calculates mode(statistics) of all accepted arguments. Non integers are ignored.
 * @param  {...any} numbers 
 * @returns number - mode of all accepted arguments
 */
 const getModa = (...numbers) => {
    const filteredIntegerNumbers = numbers.filter(el => Number.isInteger(el));
    const sortedArray = filteredIntegerNumbers.sort((a,b) => a - b);
    const duplicateValues = [], elementsRating = []
    
    for (let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] === sortedArray[i+1]) {
            if(!duplicateValues.includes(sortedArray[i])) {
                duplicateValues.push(sortedArray[i])
                elementsRating.push(1)
            } else {
                let counterIndex = duplicateValues.indexOf(sortedArray[i])
                elementsRating[counterIndex]++ 
            }
        } 
    }
    
    let moda = duplicateValues[0];
    let maxValue = elementsRating[0];
    
    for (let i = 0; i < elementsRating.length; i++) {
        if (elementsRating[i] > maxValue) {
            maxValue = elementsRating[i]
            moda = duplicateValues[i]
        }
    }
    
    return moda;
    }

document.writeln(`
<h2>2. Create function getModa(...numbers) – which calculates mode(statistics) of all accepted arguments. Non integers are ignored.</h2>
<h3>getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)</h3>
<h1>${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</h1>`);
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/**
 * 3.  Create function getAverage(...numbers) – which calculates average of all accepted arguments. Non integers are ignored.
 * @param  {...any} numbers 
 * @returns number - average of all accepted arguments
 */
 const getAverage = (...numbers) => {
    const filteredIntegerNumbers = numbers.filter(el => Number.isInteger(el));
    let summ = 0;
    for (let i = 0; i < filteredIntegerNumbers.length; i++) {
            summ += filteredIntegerNumbers[i];
    }
    const average = summ / filteredIntegerNumbers.length;
    return average;
}
document.writeln(`
<h2>3. Create function getAverage(...numbers) – which calculates average of all accepted arguments. Non integers are ignored.</h2>
<h3>getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)</h3>
<h1>${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</h1>`);
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 

/**
 * 4. Create function getMedian(...numbers) – which calculates median of all accepted arguments. Non integers are ignored.
 * @param  {...any} numbers 
 * @returns 
 */
 const getMedian = (...numbers) => {
    const filteredIntegerNumbers = numbers.filter(el => Number.isInteger(el));
    const numbersArray = filteredIntegerNumbers.sort((a, b) => a - b)
    const numbersArrayLength = numbersArray.length;
    const isNumbersArrayEven = numbersArrayLength % 2 === 0;

    let medianIndex, median, middleLeftIndex, middleRightIndex;

    if(!isNumbersArrayEven) {
        medianIndex = Math.floor(numbersArrayLength / 2);
        median = numbersArray[medianIndex]
    } else {
        middleLeftIndex = (numbersArrayLength / 2) - 1;
        middleRightIndex = numbersArrayLength / 2;
        median = (numbersArray[middleLeftIndex] + numbersArray[middleRightIndex]) / 2;
    }

    return median;
}
document.writeln(`
<h2>4. Create function getMedian(...numbers) – which calculates median of all accepted arguments. Non integers are ignored.</h2>
<h3>getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)</h3>
<h1>${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</h1>`);
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 

/**
 * 5. Create function filterEvenNumbers(...numbers) – which filters even numbers accepted as arguments
 * @param  {...any} numbers 
 * @returns array of odd numbers
 */
const filterEvenNumbers = (...numbers) => {
    const evenNnumbers = numbers.filter(el => el % 2 !== 0);
    return evenNnumbers;
}
document.writeln(`
<h2>5. Create function filterEvenNumbers(...numbers) – which filters even numbers accepted as arguments</h2>
<h3>filterEvenNumbers(1, 2, 3, 4, 5, 6)</h3>
<h1>${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</h1>`);
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6)); 

/**
 * 6. Create function countPositiveNumbers(...numbers) – which calculates quantity of numbers that are greater than 0 
 * @param  {...any} numbers 
 * @returns array of positive numbers
 */
const countPositiveNumbers = (...numbers) => {
    const positiveNumbersQuantity = numbers.reduce((accum, current) => {
        if(current > 0) {
            accum++;
        }
        return accum;
    }, 0)
    
    return positiveNumbersQuantity;
}
document.writeln(`
<h2>6. Create function countPositiveNumbers(...numbers) – which calculates quantity of numbers that are greater than 0.</h2>
<h3>countPositiveNumbers(11, -22, 33, -44, -55, 66, -77)</h3>
<h1>${countPositiveNumbers(11, -22, 33, -44, -55, 66, -77)}</h1>`);
console.log(countPositiveNumbers(11, -22, 33, -44, -55, 66, -77)); 

/**
 * 7. Create function getDividedByFive(...numbers) – which filters all elements of array and leaves only those, that are divided by 5 without remainder
 * @param  {...any} numbers 
 * @returns array of numbers that are divided by 5 without remainder
 */
const getDividedByFive = (...numbers) => {
    const dividedByFiveIntegers = numbers.filter(el => el % 5 == 0);
    return dividedByFiveIntegers;
}
document.writeln(`
<h2>7. Create function getDividedByFive(...numbers) – which filters all elements of array and leaves only those, that are divided by 5 without remainder.</h2>
<h3>getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)</h3>
<h1>[${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}]</h1>`);
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 


/**
 * 8. Create function replaceBadWords(string), which shall:
 * 1) split string into words;
 * 2) replace all bad words with "*";
 * When solving this task, the array sould be splited into words with .split(" ") function, and joined with .join(" ") method.  The bad words are: shit та fuck. Also implement a possibility of extending list of bad words with new ones in future.
 * @param {*} string 
 * @returns string in which words from the list of bad words are replaced with "*"
 */
const replaceBadWords = (string) => {
    const badWordsArray = ["shit", "fuck"];
    const stringToArray = string.split(" ");

    const cenzoredArray = stringToArray.map((el) => {
        for (let i = 0; i < badWordsArray.length; i++) {
            if(el.includes(badWordsArray[i])) {
                el = el.replace(badWordsArray[i], "****")   
            }
        }
        return el;
    });

    const resultArray = cenzoredArray.join(" ");
    return resultArray;
} 

document.writeln(`
<h2>8. Create function replaceBadWords(string), which shall:</h2>
<h3>1) split string into words;</h3>
<h3>2) replace all bad words with "*";</h3>
<h3>When solving this task, the array sould be splited into words with .split(" ") function, and joined with .join(" ") method.  The bad words are: shit та fuck. Also implement a possibility of extending list of bad words with new ones in future.</h3>
<h3>replaceBadWords("It's bullshit!")</h3>
<h1>${replaceBadWords("It's bullshit!")}</h1>`);
console.log(replaceBadWords("It's bullshit!")); 

/**

/**
 * 9. Create function divideByThree(word), which splits every word into 3 letters, and if there are less then 3 letters then doesn't split. Spaces are deleted. String is transformed into lower case.
 * @param {*} word 
 * @returns array of three letter words
 */
 const divideByThree = (word) => {
    const resultArray = [];
    const inputWord = word.replaceAll(" ", "").toLowerCase();
    for (let i = 0; i < inputWord.length; i+=3) {
        resultArray.push(inputWord.slice(i, i+3)) 
    }

    return resultArray
}

document.writeln(`
<h2>9. Create function divideByThree(word), which splits every word into 3 letters, and if there are less then 3 letters then doesn't split. Spaces are deleted. String is transformed into lower case.</h2>
<h3>divideByThree("live")</h3>
<h1>[${divideByThree("live")}]</h1>`);
console.log(divideByThree("live")); 

/**
 * 10. Create function  generateCombinations(word), which generates all possible combinations (unique) of letters of the word. 
 * @param {*} inputStr 
 * @returns 
 */
const generateCombinations = (inputStr) => {
    const arrayOfCombinations = [inputStr]
    const lettersAarray = inputStr.split("");
    const letterRandomizer = (inputArray) => inputArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < lettersAarray.length ** lettersAarray.length; i++) {
        sortedArray = letterRandomizer(lettersAarray);
        joinedWord = sortedArray.join("");

        if(!arrayOfCombinations.includes(joinedWord)) {
            arrayOfCombinations.push(joinedWord)    
        }
    }

    return arrayOfCombinations.sort(); 
}

document.writeln(`
<h2>10. Create function  generateCombinations(word), which generates all possible combinations (unique) of letters of the word.</h2>
<h3>generateCombinations("lord")</h3>
<p>${generateCombinations("lord")}</p>`);
console.log(generateCombinations("lord")); 
