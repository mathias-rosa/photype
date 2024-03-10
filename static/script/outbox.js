const makeOutboxU = () => {
    // Création du groupe SVG interne
    const outbox = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    outbox.setAttribute("width", "100%");
    outbox.setAttribute("height", "100%");
    outbox.setAttribute("x", "22%");
    outbox.setAttribute("overflow", "visible");

    // Création du groupe interne g
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", "rotate(15) scale(0.81)");

    // Création des rectangles dans le groupe g
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");
    rect1.setAttribute("y", "76%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "100%");
    rect2.setAttribute("width", "24%");

    const rect3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect3.setAttribute("height", "100%");
    rect3.setAttribute("width", "24%");
    rect3.setAttribute("x", "76%");

    // Ajout des rectangles dans le groupe g
    g.appendChild(rect1);
    g.appendChild(rect2);
    g.appendChild(rect3);

    // Ajout du groupe g dans le groupe SVG interne
    outbox.appendChild(g);

    return outbox;
};

const makeOutboxW = () => {
    // Création des éléments SVG
    const outbox = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "17");

    outbox.appendChild(rect);

    return outbox;
};

const makeOutboxY = () => {
    // Création des éléments SVG
    const outbox = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    outbox.setAttribute("width", "100%");
    outbox.setAttribute("height", "100%");

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    const clipPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "clipPath"
    );
    clipPath.setAttribute("id", "outboxY");

    const pathClip = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );
    pathClip.setAttribute("d", "M879 503 975 503 975 579 879 579Z");
    pathClip.setAttribute("fill-rule", "evenodd");
    pathClip.setAttribute("clip-rule", "evenodd");

    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("clip-path", "url(#outboxY)");
    g.setAttribute("transform", "translate(-879 -503)");

    const pathG = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );
    pathG.setAttribute(
        "d",
        "M912.731 525.232 895.339 540.304 935.676 551.634ZM914.284 504 924.142 515.343 924.09 515.388 962.02 559.033 974 562.398 974 578 880 551.598 880 533.711Z"
    );
    pathG.setAttribute("fill-rule", "evenodd");

    // Construction de la structure SVG
    clipPath.appendChild(pathClip);
    defs.appendChild(clipPath);
    g.appendChild(pathG);
    outbox.appendChild(defs);
    outbox.appendChild(g);

    return outbox;
};

export { makeOutboxU, makeOutboxW, makeOutboxY };
