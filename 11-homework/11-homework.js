const getRandomChinese = async (length) => {
  function getChineseCharacter() {
    const character = String.fromCharCode(Date.now().toString().slice(-5));
    return character;
  }
  this.length = length;
  
  const promiseStartTime = performance.now() 
  
  let charactersString = "";

  const delayedPromise = () => new Promise((resolve) => 
      setTimeout(() => resolve(getChineseCharacter()), 50))
  
    while (this.length > 0) {
      charactersString += await delayedPromise();
      this.length--;
    }

  const promiseEndTime = performance.now()
  const promiseWorkTime = Math.floor(promiseEndTime - promiseStartTime)
  console.log(`Promise work time: ${promiseWorkTime} ms`);
  
  div = document.querySelector(".container")
  div.textContent = charactersString;
  h1 = document.createElement("h1")
  h1.textContent = `Promise work time: ${promiseWorkTime} ms`;
  div.append(h1)

  // console.log(charactersString);
  return charactersString;
}

getRandomChinese(10);

//or get value like this:
//getRandomChinese(10).then(value => console.log(value));

