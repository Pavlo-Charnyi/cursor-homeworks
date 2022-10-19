import generateBlocks from "./GenerateBlocks.js";
  
export const generateBlocksInterval = () => {
    setInterval(() => {
      const container = document.querySelector(".container");
      if(container) {
        container.remove();
      }
      generateBlocks();
    }, 1000)
  };

// export default generateBlocksInterval;