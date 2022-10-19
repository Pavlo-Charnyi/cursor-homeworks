import background from "../assets/webpack.png";

function addBackground(){
    let body = document.querySelector("body");
    body.style.backgroundImage = `url(${background})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundAttachment = "fixed";
}


export default addBackground;