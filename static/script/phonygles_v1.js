//line gen

function createline() {
  let workspace = document.querySelector(".workspace");
  let line = document.createElement("div");
  line.setAttribute("class", "line");
  workspace.appendChild(line);
}

createline();

function linelist() {
  let linelist = document.querySelectorAll(".line");
  return linelist[linelist.length - 1];
}

//patern gen

function createPhonygle(voyel) {
  let phonygle = document.createElement("div");
  let patern = document.createElement("div");
  let paternIMG = document.createElement("img");
  let boxes = document.createElement("div");
  let inbox_box = document.createElement("div");
  let inboxUn = document.createElement("div");
  let inboxDeux = document.createElement("div");
  let outbox = document.createElement("div");
  let outboxIMG = document.createElement("img");

  let listOfPhonygles = document.querySelectorAll(".phonygle");

  //appendChild
  let line = linelist();
  if (line === undefined) {
    createline();
    line = linelist();
  }
  line.appendChild(phonygle);
  phonygle.appendChild(patern);
  patern.appendChild(paternIMG);

  phonygle.appendChild(boxes);

  boxes.appendChild(outbox);
  outbox.appendChild(outboxIMG);

  boxes.appendChild(inbox_box);
  inbox_box.appendChild(inboxUn);

  inbox_box.appendChild(inboxDeux);

  //phonygles atributes
  phonygle.setAttribute("class", "phonygle");
  if (voyel !== "o") {
    phonygle.setAttribute("id", "boxes_classic");
  } else {
    phonygle.setAttribute("id", "boxes_o");
  }
  //patern atributes
  patern.setAttribute("class", "patern");
  paternIMG.style.display = "block";
  paternIMG.setAttribute(
    "src",
    "static/img/Phonygles/paterns/" + voyel + ".svg"
  );
  paternIMG.setAttribute("alt", voyel);
  //boxes atributes
  boxes.setAttribute("class", "boxes");
  //inbox atributes
  inbox_box.setAttribute("class", "inbox_box");
  inboxUn.setAttribute("class", "inbox");
  inboxUn.setAttribute("id", "vacant");
  inboxUn.style.display = "flex";
  inboxDeux.setAttribute("class", "inbox");
  inboxDeux.setAttribute("id", "vacant");
  inboxDeux.style.display = "none";
  //outbox atributes
  outbox.setAttribute("class", "outbox");

  if (listOfPhonygles != []) {
    try {
      phonygle.style.zoom = parseFloat(
        window.getComputedStyle(listOfPhonygles[0]).zoom
      );
    } catch (error) {
      
    }
  }
}

//outbox gen

function addOutbox(ob) {
  let boxesList = document.querySelectorAll(".boxes");
  let boxes = boxesList[boxesList.length - 1];
  let outboxIMG = boxes.querySelector(".outbox img");
  outboxIMG.style.display = "block";
  outboxIMG.setAttribute("src", "static/img/Phonygles/outbox/" + ob + ".svg");
}

//inbox gen

function addInbox(ib) {
  let inboxList = document.querySelectorAll(".inbox");
  let inboxUn = inboxList[inboxList.length - 2];
  let inboxDeux = inboxList[inboxList.length - 1];
  if (inboxUn.id === "vacant") {
    let inboxIMG = document.createElement("img");
    inboxUn.appendChild(inboxIMG);
    inboxIMG.setAttribute("src", "static/img/Phonygles/inbox/" + ib + ".svg");
    inboxUn.setAttribute("id", "no_vacancy");
  } else if (inboxDeux.id === "vacant") {
    inboxDeux.style.display = "flex";
    let inboxIMG = document.createElement("img");
    inboxDeux.appendChild(inboxIMG);
    inboxIMG.setAttribute("src", "static/img/Phonygles/inbox/" + ib + ".svg");
    inboxDeux.setAttribute("id", "no_vacancy");
  }
}

function addOutline() {
  let phonygleList = document.querySelectorAll(".phonygle");
  let phonygle = phonygleList[phonygleList.length - 1];
  if (!phonygle) {
    return;
  }
  if (phonygle.id !== "dot") {
    if (phonygle.style.borderBottom !== "0.75em solid black") {
      phonygle.style.borderBottom = "0.75em solid black";
    } else {
      phonygle.style.borderBottom = "0.75em solid transparent";
    }
  }
}

function newSpace() {
  let phonygle = document.createElement("div");
  let listOfPhonygles = document.querySelectorAll(".phonygle");
  let dot = document.createElement("div");

  let line = linelist();
  line.appendChild(phonygle);
  phonygle.appendChild(dot);

  phonygle.setAttribute("class", "phonygle");
  phonygle.setAttribute("id", "dot");
  dot.setAttribute("class", "dot");

  if (listOfPhonygles != []) {
    try {
      phonygle.style.zoom = parseFloat(
        window.getComputedStyle(listOfPhonygles[0]).zoom
      );
    } catch (error) {
    }
    
  }
}

function removeLastPhonygle() {
  let line = linelist();
  let child = line.lastChild;
  if (child !== null) {
    line.removeChild(child);
    return true;
  } else {
    let workspace = document.querySelector(".workspace");
    if (workspace.childNodes.length > 1)
    {
      workspace.removeChild(workspace.lastChild);
      return true;
    }
  }
  return false;
}

function compose() {
  let line = linelist();
  let phonygle = line.lastChild;
  if (phonygle.id !== "dot") {
    let box = phonygle.querySelector(".boxes");
    phonygle.removeChild(box);
    phonygle.style.marginRight = "-0.02em";
  }
}

let phonygles = ["a", "e", "i", "o", "q"];
let outbox = ["w", "u", "y"];
let inbox = ["z", "r", "t", "p", "s", "d", "f", "g", "h", "j", "l", "m", "c", "v", "b", "n", "k"];

function parser(string) {
  let temp = [];
  if (string === "") {
    return;
  }
  for(i = 0; i < string.length; i++) {
    if (temp.includes("(") || string[i] === "(") {
      temp.push(string[i]);
    }
    if (string[i] === ")") {
      temp.pop();
      temp.reverse();
      for (j = 0; j < temp.length; j++) {
        if (phonygles.includes(temp[j])) {
          createPhonygle(temp[j]);
        }
        else if (outbox.includes(temp[j])) {
          addOutbox(temp[j]);
        }
        else if (inbox.includes(temp[j])) {
          addInbox(temp[j]);
        }
        else if (temp[j] === "*") {
          compose();
        }
        else if (temp[j] === "_" || temp[j] === ".") {
          addOutline();
        }
      }
      if (temp.size !== 0)
      {
        addOutline();
      }
      temp = [];
    }
    else if (temp.includes("(")) {
      continue;
    }
    else if (string[i] === "q") {
      createPhonygle("muet");
    }
    else if (string[i] === "k") {
      addInbox("muet");
    }
    else if (string[i] === " ") {
      newSpace();
    }
    else if (string[i] === "*") {
      compose();
    }
    else if (string[i] === "_" || string[i] === ".") {
      addOutline();
    }
    else if (phonygles.includes(string[i])) {
      createPhonygle(string[i]);
    }
    else if (outbox.includes(string[i])) {
      addOutbox(string[i]);
    }
    else if (inbox.includes(string[i])) {
      addInbox(string[i]);
    }
    else {
      console.error("Erreur : caractère (" + string[i] + ") non reconnu.");
    }
  }
}


function clear() {
  let workspace = document.querySelector(".workspace");
  workspace.innerHTML = "";
  createline();
}

//keyboards events

let disable = false;

let input = document.querySelector("input");
input.addEventListener("focus", () => {
  disable = true;
});

input.addEventListener("focusout", () => {
  disable = false;
});

input.addEventListener("input", () => {
  clear();
  if (input.value.slice(-1) === "(") {
    input.value = input.value += ")";
    input.setSelectionRange(input.value.length - 1, input.value.length - 1);
  }
  parser(input.value);
});

let clear_button = document.querySelector("#clear");
clear_button.addEventListener("click", () => {
  clear();
  input.value = "";
});

document.addEventListener("keydown", (event) => {

  if (disable) {
    return;
  }

  switch (event.code) {
    case "Space":
      newSpace();
      input.value = input.value += " ";
      break;
    case "Backspace":
      
      succeded = removeLastPhonygle();
      if (!succeded) {
        return;
      }
      while (!phonygles.includes(input.value.slice(-1))) {
        input.value = input.value.slice(0, -1);
      }
      input.value = input.value.slice(0, -1);
      break;
    case "Backslash":
      compose();
      input.value = input.value += "*";
      break;

    // Phonygles

    case "KeyQ":
      createPhonygle("a");
      input.value = input.value += "a";
      break;
    case "KeyE":
      createPhonygle("e");
      input.value = input.value += "e";
      break;
    case "KeyI":
      createPhonygle("i");
      input.value = input.value += "i";
      break;
    case "KeyO":
      createPhonygle("o");
      input.value = input.value += "o";
      break;
    case "KeyA":
      createPhonygle("muet");
      input.value = input.value += "q";
      break;
    
    // Outbox

    case "KeyZ":
      addOutbox("w");
      input.value = input.value += "w";
      break;
    case "KeyU":
      addOutbox("u");
      input.value = input.value += "u";
      break;
    case "KeyY":
      addOutbox("y");
      input.value = input.value += "y";
      break;

    // Inbox

    case "KeyW":
      addInbox("z");
      input.value = input.value += "z";
      break;
    case "KeyR":
      addInbox("r");
      input.value = input.value += "r";
      break;
    case "KeyT":
      addInbox("t");
      input.value = input.value += "t";
      break;
    case "KeyP":
      addInbox("p");
      input.value = input.value += "p";
      break;
    case "KeyS":
      addInbox("s");
      input.value = input.value += "s";
      break;
    case "KeyD":
      addInbox("d");
      input.value = input.value += "d";
      break;
    case "KeyF":
      addInbox("f");
      input.value = input.value += "f";
      break;
    case "KeyG":
      addInbox("g");
      input.value = input.value += "g";
      break;
    case "KeyH":
      addInbox("h");
      input.value = input.value += "h";
      break;
    case "KeyJ":
      addInbox("j");
      input.value = input.value += "j";
      break;
    case "KeyL":
      addInbox("l");
      input.value = input.value += "l";
      break;
    case "Semicolon":
      addInbox("m");
      input.value = input.value += "m";
      break;
    case "KeyC":
      addInbox("c");
      input.value = input.value += "c";
      break;
    case "KeyV":
      addInbox("v");
      input.value = input.value += "v";
      break;
    case "KeyB":
      addInbox("b");
      input.value = input.value += "b";
      break;
    case "KeyN":
      addInbox("n");
      input.value = input.value += "n";
      break;
    case "KeyK":
      addInbox("muet");
      input.value = input.value += "k";
      break;
  
    // Underline

    case "ShiftRight":
      addOutline();
      input.value = input.value += "_";
      break;
    
    // New line
    case "Enter":
      createline();
      input.value = input.value += "\n";
      break;

    
    default:
      break;
  }

});


//toolbar
//zoom

let zoomIn = document.querySelector("#zoomIn");
let zoomOut = document.querySelector("#zoomOut");
zoomIn.addEventListener("click", () => {
  let phonygle = document.querySelectorAll(".phonygle");
  phonygle.forEach(function (element) {
    element.style.zoom = (
      parseFloat(window.getComputedStyle(element).zoom) + 0.1
    ).toString();
  });
});
zoomOut.addEventListener("click", () => {
  let phonygle = document.querySelectorAll(".phonygle");
  phonygle.forEach(function (element) {
    element.style.zoom = (
      parseFloat(window.getComputedStyle(element).zoom) - 0.1
    ).toString();
  });
});
