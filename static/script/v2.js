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

/* Création des phonygles */

const makePhonygle = (PhonygleObject) => {
    const options = {
        inbox: PhonygleObject.inbox,
        outbox: PhonygleObject.outbox,
        underline: PhonygleObject.underline,
    };
    const base = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let pattern = (() => {
        switch (PhonygleObject.pattern) {
            case "a":
                base.setAttribute("width", "570");
                return makePatternA();
            case "e":
                base.setAttribute("width", "460");
                return makePatternE();
            case "i":
                base.setAttribute("width", "435");
                return makePatternI();
            case "o":
                base.setAttribute("width", "350");
                return makePatternO();
            case "q":
                base.setAttribute("width", "425");
                return makePatternSilent();
            default:
                return undefined;
        }
    })();

    base.setAttribute("height", "555");

    if (options.inbox && options.inbox.length === 1) {
        pattern.appendChild(makeInbox("b", PhonygleObject.pattern));
    } else if (options.inbox && options.inbox.length === 2) {
        pattern.appendChild(makeInbox("b", PhonygleObject.pattern, 1));
        pattern.appendChild(makeInbox("b", PhonygleObject.pattern, 2));
    }

    base.appendChild(pattern);

    return base;
};

/* Fonction de rendu */

const parseCommand = (command) => {
    const PhonygleObject = {
        pattern: "",
        inbox: [],
        outbox: [],
        underline: false,
    };
    return PhonygleObject;
};

const render = (element) => {
    const phonygle = makePhonygle({
        pattern: "a",
        inbox: ["b", "b"],
        outbox: ["u"],
        underline: true,
    });
    element.appendChild(phonygle);
    element.appendChild(
        makePhonygle({
            pattern: "e",
            inbox: ["b", "b"],
            outbox: ["u"],
            underline: true,
        })
    );
    element.appendChild(
        makePhonygle({
            pattern: "i",
            inbox: ["b", "b"],
            outbox: ["u"],
            underline: true,
        })
    );
    element.appendChild(
        makePhonygle({
            pattern: "o",
            inbox: ["b"],
            outbox: ["u"],
            underline: true,
        })
    );
    element.appendChild(
        makePhonygle({
            pattern: "q",
            inbox: ["b", "b"],
            outbox: ["u"],
            underline: true,
        })
    );
};

export { render };
