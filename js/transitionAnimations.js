// enter animation
const footer = document.getElementById("footer");
const mainPage = document.getElementById("main-page");

(() => {
  let opacity = 0;
  let margin = 100;
  footer.style.opacity = "0";
  mainPage.style.opacity = "0";
  mainPage.style.display = "flex";
  mainPage.style.marginBottom = "100px";
  const animate = () => {
    if (opacity > 0.99) {
      clearInterval(interval);
      footer.style.opacity = "1";
      mainPage.style.opacity = "1";
    }
    opacity += 0.005;
    margin -= margin / 80;
    footer.style.opacity = opacity.toString();
    mainPage.style.opacity = opacity.toString();
    mainPage.style.marginBottom = margin.toString() + "px";
  };
  let interval = setInterval(animate, 10);
})();

// ### enter animation end

(() => {})();
