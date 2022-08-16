import { elementFunctions } from "./transitionAnimations/animationFunctions.js";

const visited = [];

window.addEventListener("popstate", function () {
    const state = this.history.state;
    if (visited[visited.length - 1] !== state) return rotate(state, true)
    const path = visited.pop();
    if (elementFunctions[path]) elementFunctions[path]();
    else elementFunctions[""]();
});


export function rotate(path, force) {
    const state = history.state;
    if (state !== path || force) {
        elementFunctions[path]();
        if (visited.includes(state)) return history.replaceState(path, "", "/" + path);
        visited.push(state);
        history.pushState(path, "", "/" + path);
    }
}