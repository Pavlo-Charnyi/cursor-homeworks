import "./GetRandomChinese.css";

export const getRandomChinese = async () => {
  function getChineseCharacter() {
    const character = String.fromCharCode(Date.now().toString().slice(-5));
    return character;
  }
  let length = 8;
  
  const promiseStartTime = performance.now() 
  
  let charactersString = "";

  const delayedPromise = () => new Promise((resolve) => 
      setTimeout(() => resolve(getChineseCharacter()), 50))
  
    while (length > 0) {
      charactersString += await delayedPromise();
      length--;
    }

  const promiseEndTime = performance.now()
  const promiseWorkTime = Math.floor(promiseEndTime - promiseStartTime)
  console.log(`Promise work time: ${promiseWorkTime} ms`);
  
  let div = document.querySelector(".module2");
  div.textContent = charactersString;
  let p = document.createElement("p");
  p.textContent = `Promise work time: ${promiseWorkTime} ms`;
  div.append(p)

  return charactersString;
}

