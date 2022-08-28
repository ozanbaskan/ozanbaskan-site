import { clearAndCreate, wrapDiv } from "../helpers/render";
import { content } from "../content";
import { flexCenter } from "../helpers/css";
import { fadeInLower } from "../customAnimations/fade";
import simpleKitchenImage from "../../img/project_simple_kitchen.png";
let projectsContent = document.createElement("div");

const projects = [{
    name: "Simple Kitchen",
    imgSrc: simpleKitchenImage,
    url: "https://play.google.com/store/apps/details?id=com.simplekitchen",
    description: "A full stack mvp project for a start-up creating a homemade food service with weekly subscriptionA full stack mvp project for a start-up creating a homemade food service with weekly subscriptionA full stack mvp project for a start-up creating a homemade food service with weekly subscription",
    technologies: ["React", "React-Native", "MongoDB", "Nodejs", "Express"]
}];

function createPorjects() {
    const elements = [];
    for (const project of projects) {
        const outerDiv = document.createElement("div");
        const wrapperAnchor = document.createElement("a");
        wrapperAnchor.href = project.url;
        wrapperAnchor.target = "_blank"
        const wrapperDiv = document.createElement("div");
        wrapperDiv.classList.add("card");
        wrapperDiv.style.display = "flex";
        wrapperDiv.style.flexDirection = "row";
        const img = document.createElement("img");
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("flex-center");
        img.src = project.imgSrc;
        img.style.maxWidth = "150px";
        img.style.maxHeight = "150px";
        img.style.marginRight = "10px";
        const childDiv = document.createElement("div");
        const header = document.createElement("span");
        header.innerText = project.name;
        header.style.fontWeight = "bold";
        header.style.fontSize = "1.2em";
        const description = document.createElement("span");
        description.innerText = project.description;
        description.style.fontSize = "0.8em";
        const technologies = document.createElement("span");
        technologies.innerText = project.technologies.join(", ");
        technologies.style.fontSize = "1.05em";
        [header, description, technologies].forEach(node => {
            node.style.display = "block";
        })

        outerDiv.style.marginBottom = "10px";

        childDiv.append(header, description, technologies);
        imgWrapper.appendChild(img)
        wrapperDiv.appendChild(imgWrapper);
        wrapperDiv.appendChild(childDiv)
        wrapperAnchor.appendChild(wrapperDiv);
        outerDiv.appendChild(wrapperAnchor);
        elements.push(outerDiv);
    };
    projectsContent.style.display = "flex";
    projectsContent = wrapDiv(elements);
}
createPorjects();

export default function renderPorjects() {
    clearAndCreate(content, projectsContent);
    flexCenter(content);
    fadeInLower(projectsContent);
    return true;
}