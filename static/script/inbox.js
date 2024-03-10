const makeInboxB = (base) => {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("height", "20%");
    rect.setAttribute("width", "100%");
    rect.setAttribute("y", "30%");

    base.appendChild(rect);
    return base;
};

const makeInboxC = (base) => {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("height", "100%");
    rect.setAttribute("width", "20%");
    rect.setAttribute("x", "30%");

    base.appendChild(rect);
    return base;
};

const makeInboxD = (base) => {
    // Création des définitions (defs)
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    // Création du masque (mask)
    const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    mask.setAttribute("id", "bigmask");

    // Création du rectangle blanc pour le masque
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", "white");

    // Création du cercle pour le masque
    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );
    circle.setAttribute("r", "30%");
    circle.setAttribute("cx", "50%");
    circle.setAttribute("cy", "50%");

    // Ajout du rectangle et du cercle au masque
    mask.appendChild(rect);
    mask.appendChild(circle);

    // Ajout du masque aux définitions
    defs.appendChild(mask);

    // Création du cercle principal avec le masque
    const donut = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    );
    donut.setAttribute("id", "donut");
    donut.setAttribute("cx", "50%");
    donut.setAttribute("cy", "50%");
    donut.setAttribute("r", "50%");
    donut.setAttribute("mask", "url(#bigmask)");

    // Ajout des définitions et du cercle principal au SVG
    base.appendChild(defs);
    base.appendChild(donut);

    return base;
};

const makeInboxF = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("width", "20%");
    rect1.setAttribute("height", "100%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("width", "20%");
    rect2.setAttribute("height", "100%");
    rect2.setAttribute("x", "80%");

    const rect3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect3.setAttribute("width", "100%");
    rect3.setAttribute("height", "20%");

    const rect4 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect4.setAttribute("width", "100%");
    rect4.setAttribute("height", "20%");
    rect4.setAttribute("y", "80%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);
    base.appendChild(rect4);

    return base;
};
const makeInboxG = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");
    rect1.setAttribute("y", "37.5%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "24.5%");
    rect2.setAttribute("width", "24%");
    rect2.setAttribute("x", "37.5%");
    rect2.setAttribute("y", "14%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);

    return base;
};
const makeInboxH = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "80%");
    rect1.setAttribute("width", "24%");
    rect1.setAttribute("x", "20%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "24%");
    rect2.setAttribute("width", "80%");
    rect2.setAttribute("x", "20%");
    rect2.setAttribute("y", "58%");

    const rect3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect3.setAttribute("height", "80%");
    rect3.setAttribute("width", "24%");
    rect3.setAttribute("x", "58%");
    rect3.setAttribute("y", "20%");

    const rect4 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect4.setAttribute("height", "24%");
    rect4.setAttribute("width", "80%");
    rect4.setAttribute("y", "20%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);
    base.appendChild(rect4);
    return base;
};
const makeInboxJ = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");
    rect1.setAttribute("y", "37.5%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "24.5%");
    rect2.setAttribute("width", "24%");
    rect2.setAttribute("x", "37.5%");
    rect2.setAttribute("y", "60%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    return base;
};
const makeInboxK = (base) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "35");
    rect.setAttribute("height", "150");
    rect.setAttribute("transform", "rotate(-45) translate(0 35)");

    // Ajout du rectangle au SVG
    base.appendChild(rect);
    return base;
};
const makeInboxL = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");

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

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);

    return base;
};
const makeInboxM = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "100%");
    rect2.setAttribute("width", "24%");
    rect2.setAttribute("x", "76%");

    const rect3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect3.setAttribute("height", "24%");
    rect3.setAttribute("width", "100%");
    rect3.setAttribute("y", "76%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);
    return base;
};
const makeInboxN = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");

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
    rect3.setAttribute("height", "24%");
    rect3.setAttribute("width", "100%");
    rect3.setAttribute("y", "76%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);
    return base;
};
const makeInboxP = (base) => {
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

    const rect4 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect4.setAttribute("height", "24%");
    rect4.setAttribute("width", "100%");
    rect4.setAttribute("y", "35%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);
    base.appendChild(rect4);
    return base;
};
const makeInboxR = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");

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

    const rect4 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect4.setAttribute("height", "24%");
    rect4.setAttribute("width", "100%");
    rect4.setAttribute("y", "45%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);
    base.appendChild(rect4);

    return base;
};

const makeInboxS = (base) => {
    // Création des éléments SVG
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const clipPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "clipPath"
    );
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Configuration des attributs
    clipPath.setAttribute("id", "clip0");
    rect.setAttribute("x", "13");
    rect.setAttribute("y", "509");
    rect.setAttribute("width", "171");
    rect.setAttribute("height", "65");
    path.setAttribute(
        "d",
        "M64.1487 510.018C68.9655 509.915 73.7823 510.25 78.5991 511.062 97.8662 514.189 117.133 524.946 136.4 531.26 150.851 536.085 165.301 538.412 179.751 537.955L183 537.641 183 572.63 179.751 572.943C165.301 573.401 150.851 571.074 136.4 566.249 117.133 559.934 97.8662 549.178 78.5991 546.051 59.332 542.804 40.0649 547.186 20.7977 556.688L13.0568 561.009 13.0568 560.999 13 560.999 13 526.052 20.7977 521.699C35.2481 514.573 49.6984 510.326 64.1487 510.018Z"
    );
    path.setAttribute("fill-rule", "evenodd");

    // Attribution de la structure
    clipPath.appendChild(rect);
    defs.appendChild(clipPath);
    g.setAttribute("clip-path", "url(#clip0)");
    g.setAttribute("transform", "translate(-13 -460)");
    g.setAttribute("style", "padding-top: 30%;");
    g.appendChild(path);

    // Ajout au SVG
    base.appendChild(defs);
    base.appendChild(g);

    return base;
};

const makeInboxT = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "80%");
    rect1.setAttribute("width", "24%");
    rect1.setAttribute("x", "20%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "24%");
    rect2.setAttribute("width", "80%");
    rect2.setAttribute("x", "20%");
    rect2.setAttribute("y", "58%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    return base;
};
const makeInboxV = (base) => {
    // Création des rectangles
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("style", "fill: #404040");
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "70%");
    rect1.setAttribute("x", "15%");
    rect1.setAttribute("y", "35%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "59%");
    rect2.setAttribute("width", "24%");
    rect2.setAttribute("x", "15%");

    const rect3 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect3.setAttribute("height", "59%");
    rect3.setAttribute("width", "24%");
    rect3.setAttribute("x", "61%");
    rect3.setAttribute("y", "41%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    base.appendChild(rect3);
    return base;
};
const makeInboxZ = (base) => {
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("height", "24%");
    rect1.setAttribute("width", "100%");
    rect1.setAttribute("y", "37.5%");

    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("height", "100%");
    rect2.setAttribute("width", "24%");
    rect2.setAttribute("x", "37.5%");

    // Ajout des rectangles au SVG
    base.appendChild(rect1);
    base.appendChild(rect2);
    return base;
};

export {
    makeInboxB,
    makeInboxC,
    makeInboxD,
    makeInboxF,
    makeInboxG,
    makeInboxH,
    makeInboxJ,
    makeInboxK,
    makeInboxL,
    makeInboxM,
    makeInboxN,
    makeInboxP,
    makeInboxR,
    makeInboxS,
    makeInboxT,
    makeInboxV,
    makeInboxZ,
};
