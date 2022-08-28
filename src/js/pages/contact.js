import { content } from "../content";
import { fadeInLower } from "../customAnimations/fade";
import { flexCenter } from "../helpers/css";
import { clearAndCreate, wrapDiv } from "../helpers/render";

const texts = [
    "ozanbaskan7@gmail.com"
];
let contactContent = document.createElement("div");

function createContent() {
    const elements = [];
    for (const text of texts) {
        const span = document.createElement("span");
        span.style.textAlign = "center"
        span.innerText = text;
        elements.push(span, document.createElement("br"), document.createElement("br"));
    }
    contactContent = wrapDiv(elements);
    contactContent.style.textAlign = "center"
}
createContent();
export default function renderContact() {
    clearAndCreate(content, contactContent);
    flexCenter(content);
    fadeInLower(contactContent);
    return true;
}

