const makePatternA = () => {
    // Création du motif SVG
    const pattern = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    pattern.setAttribute("class", "pattern");
    pattern.setAttribute("y", "15");

    // Création de l'ellipse extérieure (bordure)
    const outerEllipse = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "ellipse"
    );
    outerEllipse.setAttribute("cx", "120");
    outerEllipse.setAttribute("cy", "235");
    outerEllipse.setAttribute("rx", "100"); 
    outerEllipse.setAttribute("ry", "215"); 
    outerEllipse.setAttribute("fill", "none"); 
    outerEllipse.setAttribute("stroke", "black"); // Couleur de la bordure
    outerEllipse.setAttribute("stroke-width", "35"); // Épaisseur de la bordure

    // Ajout des ellipses au motif
    pattern.appendChild(outerEllipse);

    return pattern;
};


const makePatternE = () => {
    // Création de l'élément SVG principal
    const pattern = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    pattern.setAttribute("width", "100%");
    pattern.setAttribute("height", "100%");
    pattern.setAttribute("y", "15");

    // Création du groupe
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("clip-path", "url(pathPatternE)");
    group.setAttribute("transform", "scale(0.925) translate(-583 -124)");

    // Création du chemin
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("id", "pathPatternE");
    path.setAttribute(
        "d",
        "M584 125 597.957 129.999C648.345 148.366 677.471 161.391 699.691 175.247 726.522 191.924 741 211.009 741 229.493 741 237.621 738.357 245.267 732.612 253.696 723.936 266.4 690.727 290.124 673.608 303.066 656.488 316.007 625.153 335.686 624.89 349.333 624.627 362.981 636.742 370.757 666.024 389.944 683.751 402.147 715.031 418.663 725.832 429.982 739.506 444.251 743.413 457.918 739.219 476.763 732.956 504.879 709.516 533.779 657.98 576.706 646.993 585.872 609.427 612.027 588.643 625.125L584 628 584 589.712 584.522 589.479C590.373 586.739 600.423 581.245 612.708 570.806 632.362 554.103 684.826 512.978 696.876 491.694 709.872 468.739 704.129 460.599 694.685 449.064 686.374 438.912 658.688 424.904 647.007 417.459 635.326 410.014 628.392 406.742 624.6 404.394 600.872 389.342 589.209 376.879 585.015 361.948 583.694 357.131 583.694 348.1 585.015 343.284 586.681 337.203 590.818 329.557 595.816 323.295 605.411 311.374 616.729 302.163 653.672 276.454 681.306 257.248 689.977 252.066 698.657 242.799 703.354 237.784 709.411 225.479 694.865 212.394 676.315 197.643 646.988 183.676 589.218 162.507L584 160.615 584 125Z"
    );

    // Ajout du chemin au groupe
    group.appendChild(path);

    const wrapper = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    wrapper.appendChild(group);

    // Ajout du clipPath et du groupe au SVG principal
    pattern.appendChild(wrapper);

    return pattern;
};

const makePatternI = () => {
    // Création de l'élément SVG principal
    const pattern = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    pattern.setAttribute("height", "100%");
    pattern.setAttribute("width", "100%");
    pattern.setAttribute("y", "15");
    pattern.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    // Création du premier rectangle
    const rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect1.setAttribute("width", "35");
    rect1.setAttribute("height", "465");

    // Création du deuxième rectangle
    const rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    rect2.setAttribute("width", "150");
    rect2.setAttribute("height", "35");
    rect2.setAttribute("y", "200");

    // Ajout des rectangles au SVG
    pattern.appendChild(rect1);
    pattern.appendChild(rect2);

    // Ajout du SVG au document
    return pattern;
};

const makePatternO = () => {
    const pattern = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    pattern.setAttribute("y", "15");
    pattern.setAttribute("class", "pattern");

    const patternRect1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    patternRect1.setAttribute("width", "35");
    patternRect1.setAttribute("height", "465");

    const patternRect2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );
    patternRect2.setAttribute("width", "200");
    patternRect2.setAttribute("height", "35");

    pattern.appendChild(patternRect1);
    pattern.appendChild(patternRect2);

    return pattern;
};

const makePatternSilent = () => {
    const pattern = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    pattern.setAttribute("height", "100%");
    pattern.setAttribute("width", "100%");
    pattern.setAttribute("y", "15");

    // Création du rectangle
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "35");
    rect.setAttribute("height", "150");
    rect.setAttribute("transform", "rotate(-45) translate(0 35)");

    // Ajout du rectangle au SVG
    pattern.appendChild(rect);

    return pattern;
};

const makePatternSpace = () => {
    const pattern = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );
    pattern.setAttribute("height", "100%");
    pattern.setAttribute("width", "100");
    pattern.setAttribute("y", "15");

    return pattern;
}

const makePattern = (kind) => {
    switch (kind) {
        case "a":
            return makePatternA();
        case "e":
            return makePatternE();
        case "i":
            return makePatternI();
        case "o":
            return makePatternO();
        case " ":
            return makePatternSpace();
        case "q":
        default:
            return makePatternSilent();
    }
}

export {
    makePattern
};
