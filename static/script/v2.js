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
    makePatternA,
    makePatternE,
    makePatternI,
    makePatternO,
    makePatternSilent,
} from "./patterns.js";

/* Inbox */

import { makeInboxB } from "./inbox.js";

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

    return makeInboxB(inbox);
};

/* Outbox */

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
        inbox: PhonygleObject.inbox,
        outbox: PhonygleObject.outbox,
        reverse: PhonygleObject.reverse,
    };
    const base = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let width;
    let pattern = (() => {
        switch (PhonygleObject.pattern) {
            case "a":
                width = "570";
                return makePatternA();
            case "e":
                width = "460";
                return makePatternE();
            case "i":
                width = "435";
                return makePatternI();
            case "o":
                width = "350";
                return makePatternO();
            case "q":
                width = "425";
                return makePatternSilent();
            default:
                return undefined;
        }
    })();

    base.setAttribute("viewBox", `0 0 ${width} 555`);

    if (options.inbox && options.inbox.length === 1) {
        pattern.appendChild(makeInbox("b", PhonygleObject.pattern));
    } else if (options.inbox && options.inbox.length === 2) {
        pattern.appendChild(makeInbox("b", PhonygleObject.pattern, 1));
        pattern.appendChild(makeInbox("b", PhonygleObject.pattern, 2));
    }

    base.appendChild(pattern);

    if (options.reverse) {
        addReverse(base);
    }

    return base;
};

/* Fonction de rendu */

const parseCommand = (command) => {
    const phonyglesList = [];
    const tokens = command.split("");

    tokens.forEach((element) => {
        if (PATERNS.includes(element)) {
            phonyglesList.push({
                pattern: element,
                inbox: [],
                outbox: [],
                reverse: false,
            });
        } else if (INBOXES.includes(element)) {
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
                    inbox: [element],
                    outbox: [],
                    reverse: false,
                });
                return;
            }
            lastPhonygle.inbox.push(element);
            phonyglesList.push(lastPhonygle);
        }
    });

    return phonyglesList;
};

const render = (element, command) => {
    element.innerHTML = "";
    parseCommand(command).forEach((phonygle) => {
        element.appendChild(makePhonygle(phonygle));
    });

    // const phonygle = makePhonygle({
    //     pattern: "a",
    //     inbox: ["b", "b"],
    //     outbox: ["u"],
    //     reverse: true,
    // });
    // element.appendChild(phonygle);
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "e",
    //         inbox: ["b", "b"],
    //         outbox: ["u"],
    //         reverse: true,
    //     })
    // );
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "i",
    //         inbox: ["b", "b"],
    //         outbox: ["u"],
    //         reverse: true,
    //     })
    // );
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "o",
    //         inbox: ["b"],
    //         outbox: ["u"],
    //         reverse: true,
    //     })
    // );
    // element.appendChild(
    //     makePhonygle({
    //         pattern: "q",
    //         inbox: ["b", "b"],
    //         outbox: ["u"],
    //         reverse: true,
    //     })
    // );
};

export { render };
