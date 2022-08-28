import { content } from "../content";
import { fadeInLower } from "../customAnimations/fade";
import { flexCenter } from "../helpers/css";
import { clearAndCreate, wrapDiv } from "../helpers/render";

const texts = [
    "Hello, my name is Ozan Başkan. I am from Turkey. I was born in 1997. I am passionate about science and mathematics.",
    "I am self-taught computer scientist and a senior year medicine dropout.",
    "I am interested in science, I like to discuss ideas. I approach problems with multidisciplinary discipline.",
    "You can contact me by mail and ask questions."
];
let aboutContent = document.createElement("div");

function createAbout() {
    const elements = [];
    for (const text of texts) {
        const span = document.createElement("span");
        span.style.textAlign = "center"
        span.innerText = text;
        elements.push(span, document.createElement("br"), document.createElement("br"));
    }
    aboutContent = wrapDiv(elements);
    aboutContent.style.textAlign = "center"
}
createAbout();
export default function renderAbout() {
    clearAndCreate(content, aboutContent);
    flexCenter(content);
    fadeInLower(aboutContent);
    return true;
}

