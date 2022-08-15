import { fadeIn, fadeInLower } from "./transitionAnimations.js";

const footer = document.getElementById("footer");
const mainPage = document.getElementById("main-page");
const nav = document.querySelector("nav");

fadeIn(footer);
fadeInLower(mainPage);
mainPage.style.display = "flex";
fadeIn(nav);


export const elementFunctions = {
  "": () => {
    fadeInLower(mainPage);
    mainPage.style.display = "flex";
    mainPage.innerHTML = `<img
  id="myImg"
  class="main-page-content"
  src="img/ozan.jpg"
  width="150px"
/>
<p class="main-page-content developer-title">Full Stack Developer</p>

`;
  },
  about: () => {
    fadeInLower(mainPage);
    mainPage.style.display = "block";
    mainPage.innerHTML = `
      <div style="text-align:center;font-style:italic;">
      <p>Hello, my name is Ozan Başkan. I am from Turkey. I was born in 1997. I am passionate about science and mathematics.</p>
      </br>
      <p>I am self-taught computer scientist and a senior year medicine dropout.</p>
      </br>
      <p>I am interested in science, I like to discuss ideas. I approach problems with multidisciplinary discipline.</p>
      <p>You can contact me by mail and ask questions.</p>
      </div>
      `;
  },
  contact: () => {
    fadeInLower(mainPage);
    mainPage.style.display = "block";
    mainPage.innerHTML = `
    <div style="text-align:center;font-style:italic;">
    <address>
    My Email: ozanbaskan7@gmail.com </br></br>
    My Adress: Yenişehir District, Ataşehir, İstanbul/Turkey
    </address>
    </div>
    `;
  },
  projects: () => {
    fadeInLower(mainPage);
    mainPage.style.display = "block";
    mainPage.innerHTML = `
    <div style="display:flex;">
      <div class="project-container">
          <a href="https://play.google.com/store/apps/details?id=com.simplekitchen">
            <div class="project-item" data-project-name="simple-kitchen">
              <img src="img/project_simple_kitchen.png"></img>
              <span>Simple Kitchen</span>
            </div>
          </a>
      </div>
    </div>
    `;

    const projects = {
      "simple-kitchen": "A full stack project for a start-up, food delivery by weekly subscription"
    };
  }
}