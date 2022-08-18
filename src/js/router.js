let id = -1;
let lastId = -1;

window.addEventListener("popstate", function (e) {
    e.preventDefault();
    const lId = lastId;
    const state = this.history.state;
    lastId = state.id;
    if (this.history.state.id !== id) return rotate(state, true);
    if (elementFunctions[path]) elementFunctions[path]();
    else elementFunctions[""]();
});


export function rotate(path, force) {
    const state = history.state;
    if (state.path !== path || force) {
        history.pushState({ id: ++id, path }, "", "/" + path);
        lastId = id;
    }
}