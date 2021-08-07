const footer = document.getElementById("footer");

(() => {
  let opacity = 0;
  footer.style.opacity = "0";
  const animate = () => {
    if (opacity > 0.99) {
      clearInterval(interval);
      footer.style.opacity = "1";
    }
    footer.style.opacity = (opacity + 0.005).toString();
    opacity = opacity + 0.005;
  };
  let interval = setInterval(animate, 10);
})();
