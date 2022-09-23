let soundA = new Audio("./sounds/A.mp3");
let soundE = new Audio("./sounds/Em.mp3");
let soundD = new Audio("./sounds/D.mp3");
let soundG = new Audio("./sounds/G.mp3");
let soundB = new Audio("./sounds/B.mp3");
let soundC = new Audio("./sounds/C.mp3");

let chordA = document.querySelector("#chordA")
let chordE = document.querySelector("#chordE")
let chordD = document.querySelector("#chordD")
let chordG = document.querySelector("#chordG")
let chordB = document.querySelector("#chordB")
let chordC = document.querySelector("#chordC")

document.addEventListener("keydown", function(e) {
  switch (e.code) {
    case "KeyA":
      chordA.classList.add("chord_active");
      soundA.play();
      break;
    case "KeyE":
      chordE.classList.add("chord_active");
      soundE.play();
      break;
    case "KeyD":
      chordD.classList.add("chord_active");
      soundD.play();
      break;
    case "KeyG":
      chordG.classList.add("chord_active");
      soundG.play();
      break;
    case "KeyB":
      chordB.classList.add("chord_active");
      soundB.play();
      break;
    case "KeyC":
      chordC.classList.add("chord_active");
      soundC.play();
      break;
  }

});

document.addEventListener("keyup", function(e) {
  switch (e.code) {
    case "KeyA":
      setTimeout(() => chordA.classList.remove("chord_active"), 700) 
      break;
    case "KeyE":
      setTimeout(() => chordE.classList.remove("chord_active"), 700) 
      break;
    case "KeyD":
      setTimeout(() => chordD.classList.remove("chord_active"), 700) 
      break;
    case "KeyG":
      setTimeout(() => chordG.classList.remove("chord_active"), 700) 
      break;
    case "KeyB":
      setTimeout(() => chordB.classList.remove("chord_active"), 700) 
      break;
    case "KeyC":
      setTimeout(() => chordC.classList.remove("chord_active"), 700) 
      break;
  }
});