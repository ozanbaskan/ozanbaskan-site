import { rotate } from "../router.js";

const navElements = document.querySelectorAll("li");

navElements[0].addEventListener("click", () => {
  rotate("")
});

navElements[1].addEventListener("click", () => {
  rotate("about")
});

navElements[2].addEventListener("click", () => {
  rotate("contact")

});

navElements[3].addEventListener("click", () => {
  rotate("projects")

});