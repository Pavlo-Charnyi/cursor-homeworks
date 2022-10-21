function* createIdGenerator(){
    let id = 1;
    while(true) {
        yield id;
        id++
    }
}

const idGenerator = createIdGenerator(); //>> generator object

let output = document.querySelector("#output");
let button = document.querySelector("#next");

button.addEventListener("click", () => {
    let nextId = idGenerator.next();
    output.innerHTML = nextId.value;
})


function* newFontGenerator(startValue){
    while(true){
        const fontSize = yield startValue;
        if(fontSize == "up") {
            console.log(fontSize, "- fontSize");
            startValue++;
            console.log("up startValue", startValue);
        } 
        
        if (fontSize == "down") {
            console.log(fontSize, "- fontSize");
            startValue--;
            console.log("down startValue", startValue);
        }
    }
}

const fontGenerator = newFontGenerator(20); 

let html = document.querySelector("html");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let outputSample = document.querySelector("#output__sample");

increase.addEventListener("click", () => {
    html.style.fontSize = fontGenerator.next("up").value + "px";

})
decrease.addEventListener("click", () => {
    html.style.fontSize = fontGenerator.next("down").value + "px";
})


