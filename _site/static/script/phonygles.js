
//line gen

function createline(){
  let workspace = document.querySelector(".workspace")
  let line = document.createElement("div");
  line.setAttribute('class', 'line');
  workspace.appendChild(line);
}

createline();

function linelist(){
  let linelist = document.querySelectorAll('.line');
  return linelist[linelist.length -1];
}

//patern gen

function createPhonygle(voyel){
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
  if (line === undefined){
    createline()
    line = linelist()
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
  phonygle.setAttribute('class', 'phonygle');
  if(voyel !== "o"){
    phonygle.setAttribute('id', 'boxes_classic');
  }else{
    phonygle.setAttribute('id', 'boxes_o');
  };
  //patern atributes
  patern.setAttribute('class', 'patern');
  paternIMG.style.display = "block";
  paternIMG.setAttribute('src', 'static/img/Phonygles/paterns/' + voyel + '.svg');
  paternIMG.setAttribute('alt', voyel);
  //boxes atributes
  boxes.setAttribute('class', 'boxes');
  //inbox atributes
  inbox_box.setAttribute('class', 'inbox_box');
  inboxUn.setAttribute('class', 'inbox');
  inboxUn.setAttribute('id', 'vacant');
  inboxUn.style.display = "flex";
  inboxDeux.setAttribute('class', 'inbox');
  inboxDeux.setAttribute('id', 'vacant');
  inboxDeux.style.display = "none";
  //outbox atributes
  outbox.setAttribute('class', 'outbox');

  if (listOfPhonygles != []){
    phonygle.style.zoom = parseFloat(window.getComputedStyle(listOfPhonygles[0]).zoom)
  }
}

//outbox gen

function addOutbox(ob){
  let boxesList = document.querySelectorAll(".boxes");
  let boxes = boxesList[boxesList.length -1];
  let outboxIMG = boxes.querySelector(".outbox img")
  outboxIMG.style.display = "block";
  outboxIMG.setAttribute('src', 'static/img/Phonygles/outbox/'+ ob +'.svg');
}

//inbox gen

function addInbox(ib){
  let inboxList = document.querySelectorAll(".inbox");
  let inboxUn = inboxList[inboxList.length -2];
  let inboxDeux = inboxList[inboxList.length -1];
  if (inboxUn.id === "vacant"){
    let inboxIMG = document.createElement("img");
    inboxUn.appendChild(inboxIMG);
    inboxIMG.setAttribute('src','static/img/Phonygles/inbox/'+ib+'.svg');
    inboxUn.setAttribute('id', 'no_vacancy');
  }else if (inboxDeux.id === "vacant"){
    inboxDeux.style.display = "flex";
    let inboxIMG = document.createElement("img");
    inboxDeux.appendChild(inboxIMG);
    inboxIMG.setAttribute('src','static/img/Phonygles/inbox/'+ib+'.svg');
    inboxDeux.setAttribute('id', 'no_vacancy');
  }
}

function addOutline(){
  let phonygleList = document.querySelectorAll(".phonygle");
  let phonygle = phonygleList[phonygleList.length -1];
  if (phonygle.id !== "dot"){
    if (phonygle.style.borderBottom !== "0.75em solid black"){
      phonygle.style.borderBottom = "0.755em solid black";
    }else{
      phonygle.style.borderBottom = "0.75em solid transparent";
    }
  }
}

//keyboards events

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      let phonygle = document.createElement("div");
      let listOfPhonygles = document.querySelectorAll(".phonygle");
      let dot = document.createElement("div");

      let line = linelist();
      line.appendChild(phonygle);
      phonygle.appendChild(dot);

      phonygle.setAttribute('class', 'phonygle');
      phonygle.setAttribute('id', 'dot');
      dot.setAttribute('class', 'dot');

      if (listOfPhonygles != []){
        phonygle.style.zoom = parseFloat(window.getComputedStyle(listOfPhonygles[0]).zoom)
      }
    }
  });

document.addEventListener('keydown', event => {
    if (event.code === 'Backspace') {
        let line = linelist();
        let child = line.lastChild;
        if (child !== null){
          line.removeChild(child);
        }
        else{
          let workspace = document.querySelector(".workspace");
          workspace.removeChild(workspace.lastChild)
        }
    }
  });

  //compose phonygles
document.addEventListener('keydown', event => {
  if (event.code === 'Backslash') {
    let line = linelist();
    let phonygle = line.lastChild;
    if (phonygle.id !== "dot"){
      let box = phonygle.querySelector(".boxes");
      phonygle.removeChild(box);
      phonygle.style.marginRight = "-0.02em";
    }
  }
});


//patern key event

document.addEventListener('keydown', event => {
    if (event.code === 'KeyQ') {
      createPhonygle("a");
    }
  });

document.addEventListener('keydown', event => {
  if (event.code === 'KeyE') {
    createPhonygle("e");
  }
});

document.addEventListener('keydown', event => {
  if (event.code === 'KeyI') {
    createPhonygle("i");
  }
});

document.addEventListener('keydown', event => {
  if (event.code === 'KeyO') {
    createPhonygle("o");
  }
});

document.addEventListener('keydown', event => {
  if (event.code === 'KeyA') {
    createPhonygle("muet");
  }
});

//outbox key event

document.addEventListener('keydown', event => {
  if (event.code === 'KeyZ') {
    addOutbox("w");
  }
});

document.addEventListener('keydown', event => {
  if (event.code === 'KeyU') {
    addOutbox("u");
  }
});

document.addEventListener('keydown', event => {
  if (event.code === 'KeyY') {
    addOutbox("y");
  }
});

//inbox key event

document.addEventListener('keydown', event => {
  if (event.code === 'KeyW') {
    addInbox("z");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyR') {
    addInbox("r");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyT') {
    addInbox("t");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyP') {
    addInbox("p");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyS') {
    addInbox("s");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyD') {
    addInbox("d");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyF') {
    addInbox("f");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyG') {
    addInbox("g");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyH') {
    addInbox("h");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyJ') {
    addInbox("j");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyL') {
    addInbox("l");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'Semicolon') {
    addInbox("m");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyC') {
    addInbox("c");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyV') {
    addInbox("v");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyB') {
    addInbox("b");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyN') {
    addInbox("n");
  }
});
document.addEventListener('keydown', event => {
  if (event.code === 'KeyK') {
    addInbox("muet");
  }
});

//underline phonygle

document.addEventListener('keydown', event => {
  if (event.code === 'ShiftRight') {
    addOutline();
  }
});

//create a new line
document.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    createline();
  }
});

//toolbar
//zoom

let zoomIn = document.querySelector("#zoomIn");
let zoomOut = document.querySelector("#zoomOut");
zoomIn.addEventListener('click', () => {
  let phonygle = document.querySelectorAll(".phonygle");
  phonygle.forEach(
    function(element){
    element.style.zoom = (parseFloat(window.getComputedStyle(element).zoom) + 0.1).toString();
    }
  )
});
zoomOut.addEventListener('click', () => {
  let phonygle = document.querySelectorAll(".phonygle");
  phonygle.forEach(
    function(element){
    element.style.zoom = (parseFloat(window.getComputedStyle(element).zoom) - 0.1).toString();
    }
  )
});