import { HistoryData } from "./helpers/history";
import pages from "./pages"

function preventReload() {
    const anchors = document.querySelector(".nav").children;
    for (const anchor of anchors) anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const url = new URL(e.currentTarget.href);
        const path = url.pathname;
        if (path === history.state?.path) return;
        const historyData = new HistoryData(path);
        history.pushState(historyData, "", url);
        rotate(path);
    });
};
preventReload();

window.addEventListener("popstate", function (e) {
    e.preventDefault();
    if (!this.history.state) return pages["/"]();
    rotate(this.history?.state.path)
});


export function rotate(path) {
    pages[path]?.() || pages[404]();
}
rotate(window.location.pathname);