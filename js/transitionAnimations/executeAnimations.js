import { fadeIn, fadeInLower } from "./transitionAnimations.js";

const footer = document.getElementById("footer");
const mainPage = document.getElementById("main-page");
const nav = document.querySelector("nav");

fadeIn(footer);
fadeInLower(mainPage);
mainPage.style.display = "flex";
fadeIn(nav);

const navElements = document.querySelectorAll("li");

navElements[0].addEventListener("click", () => {
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
});

navElements[1].addEventListener("click", () => {
  fadeInLower(mainPage);
  mainPage.style.display = "block";
  mainPage.innerHTML = `
    <div style="text-align:center;font-style:italic;">
    <p>Hello, my name is Ozan Başkan. I am from Turkey. I was born in 1997. I am passionate about science and mathematics.</p>
    </br>
    <p>I started my professional career in computer science in January 2021. Since then I have been improving myself non-stop, learning everything I can.</p>
    </br>
    <p>This is my first personal site. You can check out my projects via my github, linkedIn and freeCodeCamp accounts if you are interested. I really love to work with you on various technologies.</p>
    <p> My favourite language to write is java, I am currently developing with nodejs, I am also efficient in python. I work with html, css, bootstrap, react.js and vue.js on front-end side.</p>
    </div>
    `;
});

navElements[2].addEventListener("click", () => {
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
});
