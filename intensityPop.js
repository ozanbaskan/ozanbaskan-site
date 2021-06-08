let rightNavPush = document.getElementById("pop-right-nav");
let rightNav = document.getElementById("right-nav");

rightNavPush.addEventListener("click", () => {
  if (rightNavPush.style.marginRight === "") {
    let push = 153;
    rightNavPush.style.marginRight = "153px";
    rightNav.style.marginRight = "0px";
    const animate = () => {
      if (push < 5) clearInterval(interval);
      rightNavPush.style.marginRight = push + "px";
      rightNav.style.marginRight = push - 153 + "px";
      push = push - 10;
    };
    let interval = setInterval(animate, 10);
    return;
  }

  if (rightNavPush.style.marginRight === "153px") {
    let push = 153;
    rightNavPush.style.marginRight = "153px";
    rightNav.style.marginRight = "0px";
    const animate = () => {
      if (push < 5) clearInterval(interval);
      rightNavPush.style.marginRight = push + "px";
      rightNav.style.marginRight = push - 153 + "px";
      push = push - 10;
    };
    let interval = setInterval(animate, 10);
    return;
  }

  if (rightNavPush.style.marginRight === "3px") {
    let push = 3;
    const animate = () => {
      if (push > 150) clearInterval(interval);
      rightNavPush.style.marginRight = push + "px";
      rightNav.style.marginRight = push - 153 + "px";
      push = push + 10;
    };
    let interval = setInterval(animate, 10);
    return;
  }
});
