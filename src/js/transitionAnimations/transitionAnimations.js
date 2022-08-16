const fadeIn = (element) => {
  if (element.style.opacity !== "1" && element.style.opacity !== "") return;
  let opacity = 0;
  element.style.opacity = "0";

  const animate = () => {
    opacity += 0.005;
    element.style.opacity = opacity.toString();
    if (opacity > 0.999) {
      clearInterval(interval);
      return;
    }
  };
  let interval = setInterval(animate, 10);
};

const fadeInLower = (element, margin = 100) => {
  if (element.style.opacity !== "1" && element.style.opacity !== "") return;
  let opacity = 0;
  element.style.opacity = "0";
  element.style.marginBottom = margin.toString() + "px";

  const animate = () => {
    opacity += 0.01;
    margin -= margin / 30;
    element.style.opacity = opacity.toString();
    element.style.marginBottom = margin.toString() + "px";
    if (opacity > 0.999) {
      clearInterval(interval);
      return;
    }
  };
  let interval = setInterval(animate, 10);
};

export { fadeIn, fadeInLower };
