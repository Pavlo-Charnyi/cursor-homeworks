import "../styles/style.css";

import generateColor from "./GenerateColor.js";

const generateBlocks = () => {
    let module1 = document.querySelector(".module1")
    let container = document.createElement("div");
    container.classList.add("container");
    module1.appendChild(container)
  
    for (let i = 0; i < 25; i++) {
      let div = document.createElement("div");
      div.style.backgroundColor = generateColor();
      div.style.width = "50px";
      div.style.height = "50px";
      container.append(div);
    }
  }

export default generateBlocks;