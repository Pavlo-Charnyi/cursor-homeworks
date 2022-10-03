const audioList = ["./sounds/A.mp3", "./sounds/E.mp3", "./sounds/D.mp3", "./sounds/G.mp3", "./sounds/B.mp3", "./sounds/C.mp3"]

const soundsObject = audioList.reduce((accum, curr) => {
  let fileName = curr.slice(9, 10);
  accum["sound" + fileName] = new Audio(curr);
  return accum
}, {})

const addElements = (obj) => {
  Object.keys(obj).forEach(key => {
    let div = document.createElement("div");
    div.setAttribute("id", key);
    div.textContent = key.slice(-1);
    div.classList.add("chord");
    div.classList.add("Key" + key.slice(-1));
    const container = document.querySelector(".container");
    container.append(div);
  });
}

addElements(soundsObject);

const eventKeys = ["KeyA", "KeyE", "KeyD", "KeyG", "KeyB", "KeyC"];

document.addEventListener("keydown", function(e) {
  if(eventKeys.includes(e.code)) {
    const pressedKey = document.querySelector("." + e.code);
    pressedKey.classList.toggle("chord_active");
    const propName = "sound" + e.code.slice(-1);
    soundsObject[propName].play();
  } 
});

document.addEventListener("keyup", function(e) {
  if(eventKeys.includes(e.code)) {
    const pressedKey = document.querySelector("." + e.code);
    setTimeout(() => pressedKey.classList.toggle("chord_active"), 500);
  }
});
