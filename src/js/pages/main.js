import { clearAndCreate, wrapDiv } from "../helpers/render";
import ozan from "../../img/ozan.jpg"
import { content } from "../content";
import { flexCenter } from "../helpers/css";
import { fadeInLower } from "../customAnimations/fade";
let mainContent = document.createElement("div")

function createMain() {
    const img = document.createElement("img");
    img.src = ozan;
    img.style.borderRadius = "50%";
    img.style.minWidth = "40%"
    img.style.maxWidth = "150px"
    img.style.marginRight = "30px"
    const w = document.createElement("spam");
    w.innerText = "Full Stack Developer";
    mainContent = wrapDiv([img, w]);
}
createMain();

export default function renderMain() {
    clearAndCreate(content, mainContent);
    flexCenter(content);
    fadeInLower(mainContent);
    return true;
}