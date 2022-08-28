import { clearAndCreate, wrapDiv } from "../helpers/render";
import { content } from "../content";
import { flexCenter } from "../helpers/css";
import { fadeInLower } from "../customAnimations/fade";
let notFoundContent = document.createElement("div");

function createNotfound() {
    const span = document.createElement("span");
    span.innerText = "That page you are looking for does not exists.";
    notFoundContent = wrapDiv(span);
}
createNotfound();

export default function render404() {
    clearAndCreate(content, notFoundContent);
    flexCenter(content);
    fadeInLower(notFoundContent);
    return true;
}