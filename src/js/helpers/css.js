export function flexCenter(htmlElement, remove = false) {
    if (remove) return htmlElement.classList.remove("flex-center")
    htmlElement.classList.add("flex-center");
}