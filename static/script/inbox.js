const makeInboxB = (base) => {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("height", "20%");
    rect.setAttribute("width", "100%");
    rect.setAttribute("y", "30%");

    base.appendChild(rect);
    return base;
};

export { makeInboxB };
