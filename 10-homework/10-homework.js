const audioList = ["./sounds/A.mp3", "./sounds/E.mp3", "./sounds/D.mp3", "./sounds/G.mp3", "./sounds/B.mp3", "./sounds/C.mp3"]

const soundsObject = audioList.reduce((accum, curr) => {
  accum["sound" + curr.slice(9, 10)] = new Audio(curr);
  return accum
}, {})

const addElements = (obj) => {
  Object.keys(obj).forEach(key => {
    let div = document.createElement("div");
    div.setAttribute("id", key);
    div.textContent = key.slice(-1);
    div.classList.add("chord");
    const container = document.querySelector(".container");
    container.append(div);
  });
}

addElements(soundsObject);

const elements = document.querySelectorAll(".chord");

const eventKeys = ["KeyA", "KeyE", "KeyD", "KeyG", "KeyB", "KeyC"]

document.addEventListener("keydown", function(e) {
  if (eventKeys.includes(e.code)){
     const elementIndex = eventKeys.findIndex((el) => el === e.code);
     elements[elementIndex].classList.add("chord_active");
     const propName = "sound" + e.code.slice(-1);
     soundsObject[propName].play();
  }
});

document.addEventListener("keyup", function(e) {
  if (eventKeys.includes(e.code)){
     const elementIndex = eventKeys.findIndex((el) => el === e.code);
     setTimeout(() => elements[elementIndex].classList.remove("chord_active"), 500) 
  }
});
