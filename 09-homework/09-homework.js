const generateBlocks = () => {
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container)

  for (let i = 0; i < 25; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = generateColor();
    div.style.width = "50px";
    div.style.height = "50px";
    container.append(div);
  }
}

generateBlocks();

const generateBlocksInterval = () => {
  setInterval(() => {
    const container = document.querySelector(".container");
    if(container) {
      container.remove();
    }
    generateBlocks();
  }, 1000)
};

generateBlocksInterval();

//helper function
function generateColor() {
  const red = generateNumber();
  const green = generateNumber();
  const blue = generateNumber();
  return `rgb(${red}, ${green}, ${blue})`;

  function generateNumber() {
    return Math.floor(Math.random() * (255 + 1));
  }
}