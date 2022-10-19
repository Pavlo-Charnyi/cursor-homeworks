function generateColor() {
    const red = generateNumber();
    const green = generateNumber();
    const blue = generateNumber();
    return `rgb(${red}, ${green}, ${blue})`;
  
    function generateNumber() {
      return Math.floor(Math.random() * (255 + 1));
    }
  }


export default generateColor;