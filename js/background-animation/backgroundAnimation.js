import FlyingObject from "./flyingObjects.js";
import handleIntensity from "./intensity.js";

const count = document.getElementById("count");
const disableElement = document.getElementById("disable");
let disable = false;

const canvas = document.getElementById("nav-animation");
const ctx = canvas.getContext("2d");
const gradient = ctx.createLinearGradient(0, 0, 0, 170);
gradient.addColorStop(0, "#44096D");
gradient.addColorStop(1, "#A750E4");

let objNumber = (() => {
  return window.innerWidth > 1000 ? 50 : 25;
})();

let lastRenderTime = 0;
let period = 1 / 30;
let formObjectPeriod = 1 / 5;
let objectArray = [];
let width = window.innerWidth;
let height = window.innerHeight;

document.addEventListener("click", (e) => {
  console.log(e);
  objectArray.push(new FlyingObject(e.clientX, e.clientY));
});

//disable background
// disableElement.addEventListener("click", () => {
//   if (!disable) disableElement.innerText = "Play Background";
//   else disableElement.innerText = "Pause Background";
//   disable = !disable;
//   console.log("disable");
// });

// react to resize events by changing speeds
window.addEventListener("resize", (e) => {
  let currentWidth = e.currentTarget.innerWidth;
  let currentHeight = e.currentTarget.innerHeight;
  for (let i = 0; i < objectArray.length; i++) {
    if (currentWidth > width) {
      objectArray[i].x_speed += (currentWidth - width) / 5000;
    }
    if (currentHeight > height) {
      objectArray[i].y_speed += (currentHeight - height) / 5000;
    }
  }
  width = currentWidth;
  height = currentHeight;
});

// change background intesity on user click
// let increment = document.getElementById("increase");
// let decrement = document.getElementById("decrease");
// increment.addEventListener("click", () => {
//   objNumber = handleIntensity("+", objNumber);
//   count.innerText = objNumber;
// });
// decrement.addEventListener("click", () => {
//   objNumber = handleIntensity("-", objNumber);
//   if (objectArray.length > 200) objectArray.splice(0, 100);
//   else if (objectArray.length > 0) objectArray.splice(0, 25);
//   if (disable) {
//     draw();
//     findConnections();
//   }
//   count.innerText = objNumber;
// });

// this is the animation function, running non-stop
const animationFunc = (time) => {
  // function period
  let secondsSinceLast = (time - lastRenderTime) / 100;
  window.requestAnimationFrame(animationFunc);
  if (disable) return;
  // returns the function from here unless it is smaller than period
  if (period > secondsSinceLast) return;
  //there can only be 50 shapes at a time on the canvas
  if (formObjectPeriod > secondsSinceLast && objectArray.length < objNumber)
    objectArray.push(new FlyingObject(0, 0));

  // resize canvas according to page
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // to track seconds since last function run
  lastRenderTime = time;
  move();
  draw();
  findConnections();
  // change to speed up rotation
};

//this function is to draw connection rod figures between shapes when they are close
const findConnections = () => {
  for (let i = 0; i < objectArray.length; i++) {
    // fill the shapes if there is a connection
    let filling = false;
    for (let j = 0; j < objectArray.length; j++) {
      if (j !== i) {
        if (
          Math.sqrt(
            (objectArray[i].x - objectArray[j].x) ** 2 +
              (objectArray[i].y - objectArray[j].y) ** 2
          ) < 50
        ) {
          // establish connection
          filling = true;
          //draw connections
          objectArray[i].fill = true;
          objectArray[j].fill = true;
          ctx.beginPath();
          ctx.moveTo(objectArray[i].x, objectArray[i].y);
          ctx.lineTo(objectArray[j].x, objectArray[j].y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
    if (!filling) {
      objectArray[i].fill = false;
    }
  }
};

// function to draw the entire canvas each frame
const draw = () => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i].shape === 1) {
      ctx.beginPath();
      //rotation matrix on rectangles

      let center = [
        objectArray[i].x + objectArray[i].h / 2,
        objectArray[i].y + objectArray[i].h / 2,
      ];

      let x =
        (objectArray[i].x - center[0]) * Math.cos(objectArray[i].deg) -
        (objectArray[i].y - center[1]) * Math.sin(objectArray[i].deg) +
        objectArray[i].x;
      let y =
        (objectArray[i].x - center[0]) * Math.sin(objectArray[i].deg) +
        (objectArray[i].y - center[1]) * Math.cos(objectArray[i].deg) +
        objectArray[i].y;
      ctx.moveTo(x, y);
      x =
        (objectArray[i].x + objectArray[i].h - center[0]) *
          Math.cos(objectArray[i].deg) -
        (objectArray[i].y - center[1]) * Math.sin(objectArray[i].deg) +
        objectArray[i].x;
      y =
        (objectArray[i].x + objectArray[i].h - center[0]) *
          Math.sin(objectArray[i].deg) +
        (objectArray[i].y - center[1]) * Math.cos(objectArray[i].deg) +
        objectArray[i].y;
      ctx.lineTo(x, y);
      x =
        (objectArray[i].x + objectArray[i].h - center[0]) *
          Math.cos(objectArray[i].deg) -
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.sin(objectArray[i].deg) +
        objectArray[i].x;
      y =
        (objectArray[i].x + objectArray[i].h - center[0]) *
          Math.sin(objectArray[i].deg) +
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.cos(objectArray[i].deg) +
        objectArray[i].y;
      ctx.lineTo(x, y);
      x =
        (objectArray[i].x - center[0]) * Math.cos(objectArray[i].deg) -
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.sin(objectArray[i].deg) +
        objectArray[i].x;
      y =
        (objectArray[i].x - center[0]) * Math.sin(objectArray[i].deg) +
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.cos(objectArray[i].deg) +
        objectArray[i].y;
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
      if (objectArray[i].fill) {
        ctx.fillStyle = "black";
        ctx.fill();
      }
    } else if (objectArray[i].shape === 0) {
      // draw circles

      ctx.beginPath();
      ctx.arc(
        objectArray[i].x,
        objectArray[i].y,
        objectArray[i].h - 1,
        0,
        2 * Math.PI
      );
      ctx.stroke();
      if (objectArray[i].fill) {
        ctx.fillStyle = "black";
        ctx.fill();
      }
    } else if (objectArray[i].shape === 2) {
      ctx.beginPath();
      // rotation matrix on triangles

      let center = [
        objectArray[i].x,
        objectArray[i].y + (objectArray[i].h * 7) / 12,
      ];

      let x =
        (objectArray[i].x - center[0]) * Math.cos(objectArray[i].deg) -
        (objectArray[i].y - center[1]) * Math.sin(objectArray[i].deg) +
        objectArray[i].x;
      let y =
        (objectArray[i].x - center[0]) * Math.sin(objectArray[i].deg) +
        (objectArray[i].y - center[1]) * Math.cos(objectArray[i].deg) +
        objectArray[i].y;
      ctx.moveTo(x, y);
      x =
        (objectArray[i].x + objectArray[i].h / 2 - center[0]) *
          Math.cos(objectArray[i].deg) -
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.sin(objectArray[i].deg) +
        objectArray[i].x;
      y =
        (objectArray[i].x + objectArray[i].h / 2 - center[0]) *
          Math.sin(objectArray[i].deg) +
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.cos(objectArray[i].deg) +
        objectArray[i].y;
      ctx.lineTo(x, y);
      x =
        (objectArray[i].x - objectArray[i].h / 2 - center[0]) *
          Math.cos(objectArray[i].deg) -
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.sin(objectArray[i].deg) +
        objectArray[i].x;
      y =
        (objectArray[i].x - objectArray[i].h / 2 - center[0]) *
          Math.sin(objectArray[i].deg) +
        (objectArray[i].y + objectArray[i].h - center[1]) *
          Math.cos(objectArray[i].deg) +
        objectArray[i].y;
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
      if (objectArray[i].fill) {
        ctx.fillStyle = "black";
        ctx.fill();
      }
    }
  }
};

// function to move and destroy the shapes if they are out of screen
const move = () => {
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].move();
    objectArray[i].destroy(window.innerWidth, window.innerHeight);
  }

  objectArray = objectArray.filter((obj) => obj.noDelete);
};

window.requestAnimationFrame(animationFunc);
