import { elementFunctions } from "./transitionAnimations/animationFunctions.js";

const visited = [];

window.addEventListener("popstate", function () {
    const path = visited.pop();
    if (elementFunctions[path]) elementFunctions[path]();
    else elementFunctions[""]();
});

export function rotate(path) {
    console.log(visited)
    const state = history.state;
    if (state !== path) {
        elementFunctions[path]();
        if (visited.includes(state)) return history.replaceState(path, "", "/" + path);
        visited.push(state);
        history.pushState(path, "", "/" + path);
    }
}