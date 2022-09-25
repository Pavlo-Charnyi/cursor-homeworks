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
    let container = document.querySelector(".container");
    container.append(div);
  });
}

addElements(soundsObject);

const elements = document.querySelectorAll(".chord");

document.addEventListener("keydown", function(e) {
  switch (e.code) {
    case "KeyA":
      elements[0].classList.add("chord_active");
      soundsObject.soundA.play();
      break;
    case "KeyE":
      elements[1].classList.add("chord_active");
      soundsObject.soundE.play();
      break;
    case "KeyD":
      elements[2].classList.add("chord_active");
      soundsObject.soundD.play();
      break;
    case "KeyG":
      elements[3].classList.add("chord_active");
      soundsObject.soundG.play();
      break;
    case "KeyB":
      elements[4].classList.add("chord_active");
      soundsObject.soundB.play();
      break;
    case "KeyC":
      elements[5].classList.add("chord_active");
      soundsObject.soundC.play();
      break;
  }
});

document.addEventListener("keyup", function(e) {
  switch (e.code) {
    case "KeyA":
      setTimeout(() => elements[0].classList.remove("chord_active"), 700) 
      break;
    case "KeyE":
      setTimeout(() => elements[1].classList.remove("chord_active"), 700) 
      break;
    case "KeyD":
      setTimeout(() => elements[2].classList.remove("chord_active"), 700) 
      break;
    case "KeyG":
      setTimeout(() => elements[3].classList.remove("chord_active"), 700) 
      break;
    case "KeyB":
      setTimeout(() => elements[4].classList.remove("chord_active"), 700) 
      break;
    case "KeyC":
      setTimeout(() => elements[5].classList.remove("chord_active"), 700) 
      break;
  }
});