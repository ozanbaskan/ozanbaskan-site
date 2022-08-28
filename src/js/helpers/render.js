export function wrapDiv(htmlElements) {
    if (!Array.isArray(htmlElements)) htmlElements = [htmlElements]
    const div = document.createElement("div");
    for (const htmlElement of htmlElements) div.appendChild(htmlElement);
    return div;
}

export function clearAndCreate(targetNode, createNodes) {
    const children = targetNode.children;
    for (const child of children) child.remove();
    if (!Array.isArray(createNodes)) createNodes = [createNodes]
    for (const node of createNodes) targetNode.appendChild(node);
    return targetNode;
}