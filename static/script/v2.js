/* Variables globales */
const PATERNS = ["a", "e", "i", "o", "q"];
const INBOXES = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "r",
    "s",
    "t",
    "v",
    "z",
];
const OUTBOXES = ["u", "w", "y"];

/* Patterns */

import {
    makePattern
} from "./patterns.js";

/* Inbox */

import {
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
} from "./inbox.js";

const makeInbox = (type, of, neighbor = 0) => {
    const inbox = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    inbox.setAttribute("width", "160");
    inbox.setAttribute("height", "160");
    switch (of) {
        case "a":
            inbox.setAttribute("x", "300");
            break;
        case "e":
            inbox.setAttribute("x", "240");
            break;
        case "i":
            inbox.setAttribute("x", "215");
            break;
        case "o":
            inbox.setAttribute("x", "100");
            break;
        case "q":
            inbox.setAttribute("x", "235");
            break;
    }
    switch (neighbor) {
        case 0:
            inbox.setAttribute("y", "170");
            break;
        case 1:
            inbox.setAttribute("y", "80");
            break;
        case 2:
            inbox.setAttribute("y", "265");
            break;
    }
    inbox.setAttribute("overflow", "hidden");

    switch (type) {
        case "b":
            return makeInboxB(inbox);
        case "c":
            return makeInboxC(inbox);
        case "d":
            return makeInboxD(inbox);
        case "f":
            return makeInboxF(inbox);
        case "g":
            return makeInboxG(inbox);
        case "h":
            return makeInboxH(inbox);
        case "j":
            return makeInboxJ(inbox);
        case "k":
            return makeInboxK(inbox);
        case "l":
            return makeInboxL(inbox);
        case "m":
            return makeInboxM(inbox);
        case "n":
            return makeInboxN(inbox);
        case "p":
            return makeInboxP(inbox);
        case "r":
            return makeInboxR(inbox);
        case "s":
            return makeInboxS(inbox);
        case "t":
            return makeInboxT(inbox);
        case "v":
            return makeInboxV(inbox);
        case "z":
            return makeInboxZ(inbox);
    }
};

/* Outbox */

import { makeOutboxU, makeOutboxW, makeOutboxY } from "./outbox.js";

const makeOutbox = (of, type) => {
    const outbox = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    outbox.setAttribute("width", "60");
    outbox.setAttribute("height", "60");

    switch (of) {
        case "a":
            outbox.setAttribute("x", "295");
            break;
        case "e":
            outbox.setAttribute("x", "235");
            break;
        case "i":
            outbox.setAttribute("x", "95");
            break;
        case "o":
            outbox.setAttribute("x", "260");
            break;
        case "q":
            outbox.setAttribute("x", "230");
            break;
    }

    switch (type) {
        case "u":
            outbox.appendChild(makeOutboxU());
            break;
        case "w":
            outbox.appendChild(makeOutboxW());
            break;
        case "y":
            outbox.appendChild(makeOutboxY());
            break;
    }
    return outbox;
};

/* Reverse */

const addReverse = (base) => {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "35");
    rect.setAttribute("y", "520");
    rect.setAttribute("class", "underline");

    base.appendChild(rect);
    return base;
};

/* Création des phonygles */

const makePhonygle = (PhonygleObject) => {
    const options = {
        compose: PhonygleObject.compose,
        inbox: PhonygleObject.inbox,
        outbox: PhonygleObject.outbox,
        reverse: PhonygleObject.reverse,
    };
    const base = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let width;
    let pattern = (() => {
        switch (PhonygleObject.pattern) {
            case "a":
                width = 500;
                break;
            case "e":
                width = 430;
                break;
            case "i":
                width = 405;
                break;
            case "o":
                width = 300;
                break;
            case "q":
                width = 395;
                break;
        }
        return makePattern(PhonygleObject.pattern);
    })();

    let offset = 0;
    if (options.compose) {
        switch (options.compose) {
            case "a":
            case "o":
                offset = 200
                width += 200;
                break;
            case "e":
                offset = 160
                width += 160;
                break;
            case "i":
                offset = 150
                width += 150;
                break;
            default:
                break;
        }
        const compose = makePattern(options.compose);
        base.appendChild(compose);
    }

    base.setAttribute("viewBox", `0 0 ${width} 555`);

    if (options.inbox && options.inbox.length === 1) {
        pattern.appendChild(
            makeInbox(PhonygleObject.inbox[0], PhonygleObject.pattern)
        );
    } else if (options.inbox && options.inbox.length === 2) {
        pattern.appendChild(
            makeInbox(PhonygleObject.inbox[0], PhonygleObject.pattern, 1)
        );
        pattern.appendChild(
            makeInbox(PhonygleObject.inbox[1], PhonygleObject.pattern, 2)
        );
    }

    pattern.setAttribute("x", offset - 5);

    base.appendChild(pattern);

    if (options.outbox) {
        const outbox = makeOutbox(PhonygleObject.pattern, options.outbox);
        outbox.setAttribute("x", width - 60);
        base.appendChild(outbox);
    }

    if (options.reverse) {
        addReverse(base);
    }

    return base;
};

/* Fonction de rendu */

const parseCommand = (command = "") => {
    const phonyglesList = [];
    const tokens = command.toLowerCase().split("");


    tokens.forEach((token, index) => {
        if (PATERNS.includes(token)) {
            const lastPhonygle = phonyglesList.pop()

            // Gère la composition de patterns
            let toCompose = ""
            if (lastPhonygle && lastPhonygle.inbox.length === 0) {
                toCompose = lastPhonygle.pattern
            } else if (lastPhonygle) {
                phonyglesList.push(lastPhonygle)
            }
            

            phonyglesList.push({
                pattern: token,
                compose: toCompose,
                inbox: [],
                outbox: "",
                reverse: false,
            });
            toCompose = ""
        } else if (INBOXES.includes(token)) {
            const lastPhonygle = phonyglesList.pop();
            // If the last phonygle is undefined, we need to create a new phonygle
            // If the last phonygle has an inbox of length 2, we need to create a new phonygle
            if (!lastPhonygle || lastPhonygle.inbox.length >= 2) {
                // if the last phonygle is not undefined, we need to push it back to the list
                if (lastPhonygle) {
                    phonyglesList.push(lastPhonygle);
                }
                phonyglesList.push({
                    pattern: "q",
                    compose: "",
                    inbox: [token],
                    outbox: "",
                    reverse: false,
                });
                return;
            }
            lastPhonygle.inbox.push(token);
            phonyglesList.push(lastPhonygle);
        } else if (OUTBOXES.includes(token)) {
            const lastPhonygle = phonyglesList.pop();
            if (!lastPhonygle) {
                return;
            }
            lastPhonygle.outbox = token;
            phonyglesList.push(lastPhonygle);
        } else if (token === "_") {
            const lastPhonygle = phonyglesList.pop();
            if (!lastPhonygle) {
                return;
            }
            lastPhonygle.reverse = true;
            phonyglesList.push(lastPhonygle);
        }
    });

    console.log(phonyglesList);
    return phonyglesList;
};

const render = (element, command) => {
    element.innerHTML = "";
    parseCommand(command).forEach((phonygle) => {
        element.appendChild(makePhonygle(phonygle));
    });

    // const phonygle = makePhonygle({
    //     pattern: "o",
    //     compose: "i",
    //     inbox: ["f", "d"],
    //     outbox: "u",
    //     reverse: true,
    // });
    // element.appendChild(phonygle);
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "e",
    //         inbox: ["b", "b"],
    //         outbox: "u",
    //         reverse: true,
    //     })
    // );
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "i",
    //         inbox: ["b", "b"],
    //         outbox: "u",
    //         reverse: true,
    //     })
    // );
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "o",
    //         inbox: ["b"],
    //         outbox: "u",
    //         reverse: true,
    //     })
    // );
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "q",
    //         inbox: ["b", "b"],
    //         outbox: "u",
    //         reverse: true,
    //     })
    // );
};

export { render };
