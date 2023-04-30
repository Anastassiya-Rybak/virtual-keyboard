
const codes = [
  {
    enkey: "`",
    rukey: 'ё'
  },
  {
    enkey: "1",
    rukey: '1'
  },
  {
    enkey: "2",
    rukey: '2'
  },
  {
    enkey: "3",
    rukey: '3'
  },
  {
    enkey: "4",
    rukey: '4'
  },
  {
    enkey: "5",
    rukey: '5'
  },
  {
    enkey: "6",
    rukey: '6'
  },
  {
    enkey: "7",
    rukey: '7'
  },
  {
    enkey: "8",
    rukey: '8'
  },
  {
    enkey: "9",
    rukey: '9'
  },
  {
    enkey: "0",
    rukey: '0'
  },
  {
    enkey: "-",
    rukey: '-'
  },
  {
    enkey: "=",
    rukey: '='
  },
  {
    enkey: "Backspace",
    rukey: 'Backspace'
  },
  {
    enkey: "Tab",
    rukey: 'Tab'
  },
  {
    enkey: "q",
    rukey: 'й'
  },
  {
    enkey: "w",
    rukey: 'ц'
  },
  {
    enkey: "e",
    rukey: 'у'
  },
  {
    enkey: "r",
    rukey: 'к'
  },
  {
    enkey: "t",
    rukey: 'е'
  },
  {
    enkey: "y",
    rukey: 'н'
  },
  {
    enkey: "u",
    rukey: 'г'
  },
  {
    enkey: "i",
    rukey: 'ш'
  },
  {
    enkey: "o",
    rukey: 'щ'
  },
  {
    enkey: "p",
    rukey: 'з'
  },
  {
    enkey: "[",
    rukey: 'х'
  },
  {
    enkey: "]",
    rukey: 'ъ'
  },
  {
    enkey: "\\",
    rukey: '\\'
  },
  {
    enkey: "Delete",
    rukey: 'Delete'
  },
  {
    enkey: "CapsLock",
    rukey: 'CapsLock'
  },
  {
    enkey: "A",
    rukey: 'ф'
  },
  {
    enkey: "S",
    rukey: 'ы'
  },
  {
    enkey: "D",
    rukey: 'в'
  },
  {
    enkey: "F",
    rukey: 'а'
  },
  {
    enkey: "G",
    rukey: 'п'
  },
  {
    enkey: "H",
    rukey: 'р'
  },
  {
    enkey: "J",
    rukey: 'о'
  },
  {
    enkey: "K",
    rukey: 'л'
  },
  {
    enkey: "L",
    rukey: 'д'
  },
  {
    enkey: ";",
    rukey: 'ж'
  },
  {
    enkey: "'",
    rukey: 'э'
  },
  {
    enkey: "Enter",
    rukey: 'Enter'
  },
  {
    enkey: "Shift",
    rukey: 'Shift'
  },
  {
    enkey: "Z",
    rukey: 'я'
  },
  {
    enkey: "X",
    rukey: 'ч'
  },
  {
    enkey: "C",
    rukey: 'с'
  },
  {
    enkey: "V",
    rukey: 'м'
  },
  {
    enkey: "B",
    rukey: 'и'
  },
  {
    enkey: "N",
    rukey: 'т'
  },
  {
    enkey: "M",
    rukey: 'ь'
  },
  {
    enkey: ",",
    rukey: 'б'
  },
  {
    enkey: ".",
    rukey: 'ю'
  },
  {
    enkey: "/",
    rukey: '.'
  },
  {
    enkey: "ArrowUp",
    rukey: 'ArrowUp'
  },
  {
    enkey: "Shift",
    rukey: 'Shift'
  },
  {
    enkey: "Control",
    rukey: 'Control'
  },
  {
    enkey: "Meta",
    rukey: 'Meta'
  },
  {
    enkey: "Alt",
    rukey: 'Alt'
  },
  {
    enkey: " ",
    rukey: ' '
  },
  {
    enkey: "Alt",
    rukey: 'Alt'
  },
  {
    enkey: "Control",
    rukey: 'Control'
  },
  {
    enkey: "ArrowLeft",
    rukey: 'ArrowLeft'
  },
  {
    enkey: "ArrowDown",
    rukey: 'ArrowDown'
  },
  {
    enkey: "ArrowRight",
    rukey: 'ArrowRight'
  },
];

let translate = 'en';
let pressedKey = [];

const header = document.createElement('header');
header.className = 'header';
const title = document.createElement('h1');
title.className = 'header__title';
title.innerHTML = 'MY VIRTUAL KEYBOARD';
header.append(title);
document.querySelector('body').prepend(header);

const root = document.createElement("main");
root.id = "root-container";
document.querySelector("body").append(root);

let textAria = document.createElement("div");
textAria.className = "textaria";
root.append(textAria);

let textAriaContent = document.createElement("textarea");
textAriaContent.setAttribute("rows", "7");
textAriaContent.setAttribute("cols", "65");
textAriaContent.setAttribute("placeholder", "Ну что ж, надеюсь все пройдёт без багов. . .")
textAria.append(textAriaContent);

let keyBoard = document.createElement("div");
keyBoard.className = "keyboard";
root.append(keyBoard);

let keyBoardLine = document.createElement("div");
keyBoardLine.className = "keyboard__line";
keyBoard.append(keyBoardLine);
keyBoard.append(keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true));


function createKey (key, selector, container) {
  let keyElement = document.createElement("button");
  keyElement.className = selector;
  keyElement.setAttribute("tabindex", -1);
  if (key != "ArrowUp" && key != "ArrowLeft" && key != "ArrowDown" && key != "ArrowRight" && key != "Control" && key != "Meta" && key != "Delete"){
    keyElement.innerText = key;
  } else {
    switch (key) {
      case "ArrowUp":
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(-0.25turn)">';
        break;
      case "ArrowLeft":
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(180deg)">';
        break;
      case "ArrowDown":
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(90deg)">';
        break;
      case "ArrowRight":
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="">';
        break;
      case "Control":
        keyElement.innerHTML = "Ctrl";
        break;
      case "Meta":
        keyElement.innerHTML = "Win";
        break;
      case "Delete":
        keyElement.innerHTML = "Del";
        break;                
    }
  }
  container.append(keyElement);
}

function addKeyboard (obj, key) {
  function cirlc(start ,iterNum, line, item){
    if (item == 'enkey'){
      for(let i = start; i < iterNum; i++) {
        if (obj[i].enkey.length == 1 && obj[i].enkey != " " && obj[i].enkey != "`") {
          createKey(obj[i].enkey.toLowerCase() , "keyboard__item_light", keyBoard.children[line]);
        }else if (obj[i].enkey != " "){
          createKey(obj[i].enkey, "keyboard__item_dark", keyBoard.children[line]);
        }else{
          createKey(obj[i].enkey, "keyboard__item_light keyboard__item_space", keyBoard.children[line]);
        }
      }
    } else {
      for(let i = start; i < iterNum; i++) {
        if (obj[i].rukey.length == 1 && obj[i].rukey != " " && obj[i].rukey != "ё") {
          createKey(obj[i].rukey.toLowerCase() , "keyboard__item_light", keyBoard.children[line]);
        }else if (obj[i].rukey != " "){
          createKey(obj[i].rukey, "keyboard__item_dark", keyBoard.children[line]);
        }else{
          createKey(obj[i].rukey, "keyboard__item_light keyboard__item_space", keyBoard.children[line]);
        }
      }
    }
  }
  cirlc(0, 14, 0, key);
  cirlc(14, 29, 1, key);
  cirlc(29, 42, 2, key);
  cirlc(42, 55, 3, key);
  cirlc(55, 64, 4, key);

  keyBoard.children[3].firstElementChild.classList.add("keyboard__item_shift");
  keyBoard.children[1].firstElementChild.classList.add("keyboard__item_shift");
}

if (translate === 'en') {
  addKeyboard(codes, 'enkey');
} else {
  addKeyboard(codes, 'rukey');
}

textAriaContent.focus();

const writeSimbol = (event) => {
  event.preventDefault();

  if (!event.target.closest('button') || event.target.innerText == 'Ctrl' || event.target.innerText == 'Win' || event.target.innerText == 'Alt'){return;}

  if (event.target.innerText == 'Shift'){
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIterate = (lineNum, size) => {
      if (size == 'up'){
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toLowerCase();
          }
        }
      }
    }
    if (keyBoard.classList.contains('keyboard_uppercase')){
      getIterate(0, 'up');
      getIterate(1, 'up');
      getIterate(2, 'up');
      getIterate(3, 'up');
      getIterate(4, 'up');
      event.target.addEventListener('mouseup', (e)=>{
        keyBoard.classList.remove('keyboard_uppercase');
        getIterate(0, 'down');
        getIterate(1, 'down');
        getIterate(2, 'down');
        getIterate(3, 'down');
        getIterate(4, 'down');
      })
    }else{
      getIterate(0, 'down');
      getIterate(1, 'down');
      getIterate(2, 'down');
      getIterate(3, 'down');
      getIterate(4, 'down');
      event.target.addEventListener('mouseup', (e)=>{
        keyBoard.classList.add('keyboard_uppercase');
        getIterate(0, 'up');
        getIterate(1, 'up');
        getIterate(2, 'up');
        getIterate(3, 'up');
        getIterate(4, 'up');  
      })
    }

    return
  }

  if (event.target.innerText == 'CapsLock'){ 
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIter = (lineNum, size) => {
      if (size == 'up'){
        keyBoard.children[2].children[0].classList.add('keyboard__item_uppercase')
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toUpperCase();
          }
        }
      } else {
        keyBoard.children[2].children[0].classList.remove('keyboard__item_uppercase')
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toLowerCase();
          }
        }
      }
    }
    if (keyBoard.classList.contains('keyboard_uppercase')){
      getIter(0, 'up');
      getIter(1, 'up');
      getIter(2, 'up');
      getIter(3, 'up');
      getIter(4, 'up');
    } else {
      getIter(0, 'down');
      getIter(1, 'down');
      getIter(2, 'down');
      getIter(3, 'down');
      getIter(4, 'down');
    }
    return
  }

  if (event.target.innerText === "Backspace"){
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition - 1);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    
    textAriaContent.value = valueBeforeCursor + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  } else if (event.target.innerText === "Del") {
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition+1);
    
    textAriaContent.value = valueBeforeCursor + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition, cursorPosition);
  } else if (event.target.innerText === "Enter"){
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    
    textAriaContent.value = valueBeforeCursor + "\n" + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  } else if (event.target.innerText === "Tab"){
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    
    textAriaContent.value = valueBeforeCursor + "  " + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition + 2, cursorPosition + 2);
  } else if (event.target.classList.contains('arrowup') || event.target.closest('.arrowup')) {
    textAriaContent.value += "▲";
  } else if (event.target.classList.contains('arrowright') || event.target.closest('.arrowright')) {
    textAriaContent.value += "►";
  } else if (event.target.classList.contains('arrowdown') || event.target.closest('.arrowdown')) {
    textAriaContent.value += "▼";
  } else if (event.target.classList.contains('arrowleft') || event.target.closest('.arrowleft')) {
    textAriaContent.value += "◄";
  } else if (event.target.classList.contains("keyboard__item_space")) {
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    
    textAriaContent.value = valueBeforeCursor + " " + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  } else {
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    
    textAriaContent.value = valueBeforeCursor + event.target.innerText + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  }
};

keyBoard.addEventListener("mousedown", writeSimbol, false);

const conaction = (e) => {
  console.log(e.code);
  const addContent = (content, cursor) => {
    e.preventDefault();
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    
    textAriaContent.value = valueBeforeCursor + content + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition + cursor, cursorPosition + cursor);
  }

  if (e.code == "Backspace"){
    e.preventDefault();
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition - 1);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    
    textAriaContent.value = valueBeforeCursor + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  }

  if (e.code == "Delete") {
    e.preventDefault();
    let cursorPosition = textAriaContent.selectionStart;
    let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    let valueAfterCursor = textAriaContent.value.substring(cursorPosition+1);
    
    textAriaContent.value = valueBeforeCursor + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition, cursorPosition);
  }

  if(e.code == "Tab") {
    addContent('  ', 2)
  }

  if (e.key == 'Shift'){
    e.preventDefault();
    window.addEventListener('keydown', (ev)=>{
      if (ev.code == 'AltLeft' && pressedKey.includes('ShiftLeft')) {
        keyBoard.children[4].children[2].classList.add('keyboard__item_tap-d');
        keyBoard.children[3].children[0].classList.add('keyboard__item_tap-d');
      }
    })
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIterate = (lineNum, size) => {
      if (size == 'up'){
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toLowerCase();
          }
        }
      }
    }
    if (keyBoard.classList.contains('keyboard_uppercase')){
      getIterate(0, 'up');
      getIterate(1, 'up');
      getIterate(2, 'up');
      getIterate(3, 'up');
      getIterate(4, 'up');
      window.addEventListener('keyup', (ev)=>{
        if (ev.key == 'Shift'){
          keyBoard.classList.remove('keyboard_uppercase');
          getIterate(0, 'down');
          getIterate(1, 'down');
          getIterate(2, 'down');
          getIterate(3, 'down');
          getIterate(4, 'down');
        }
      })
    }else{
      getIterate(0, 'down');
      getIterate(1, 'down');
      getIterate(2, 'down');
      getIterate(3, 'down');
      getIterate(4, 'down');
      window.addEventListener('keyup', (ev)=>{
        if (ev.key == 'Shift'){
          keyBoard.classList.add('keyboard_uppercase');
          getIterate(0, 'up');
          getIterate(1, 'up');
          getIterate(2, 'up');
          getIterate(3, 'up');
          getIterate(4, 'up');
        }
      })
    }
  }

  if (e.code == 'CapsLock'){
    e.preventDefault();
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIter = (lineNum, size) => {
      if (size == 'up'){
        keyBoard.children[2].children[0].classList.add('keyboard__item_uppercase')
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toUpperCase();
          }
        }
      } else {
        keyBoard.children[2].children[0].classList.remove('keyboard__item_uppercase')
        for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
          if (keyBoard.children[lineNum].children[i].innerText.length == 1){
            keyBoard.children[lineNum].children[i].innerText = keyBoard.children[lineNum].children[i].innerText.toLowerCase();
          }
        }
      }
    }
    if (keyBoard.classList.contains('keyboard_uppercase')){
      getIter(0, 'up');
      getIter(1, 'up');
      getIter(2, 'up');
      getIter(3, 'up');
      getIter(4, 'up');
    } else {
      getIter(0, 'down');
      getIter(1, 'down');
      getIter(2, 'down');
      getIter(3, 'down');
      getIter(4, 'down');
    }
  }

  if (e.code == 'Space'){
    addContent(' ', 1);
    keyBoard.children[4].children[3].classList.add('keyboard__item_tap-l');
    return
  }

  if (e.code == 'Enter'){
    addContent('\n', 1);
  }

  if (e.code == 'MetaLeft'){
    e.preventDefault();
    keyBoard.children[4].children[1].classList.add('keyboard__item_tap-d');
  }

  if(e.key == 'Control'){
    e.code == 'ControlLeft' ? keyBoard.children[4].children[0].classList.add('keyboard__item_tap-d') : keyBoard.children[4].children[5].classList.add('keyboard__item_tap-d');
  }

  if (translate == 'ru'){
    e.preventDefault();
    codes.forEach(element => {
      if ('Key' + element.enkey.toUpperCase() == e.code){
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? element.rukey.toUpperCase() : element.rukey, 1);
      }
    });
    switch (e.code) {
      case 'BracketLeft':
        console.log(44);
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Х' : 'х', 1);
        break;
      case 'BracketRight':
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ъ' : 'ъ', 1);
        break;
      case 'Comma':
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Б' : 'б', 1);
        break;
      case 'Period':
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ю' : 'ю', 1);
        break;
      case 'Slash':
        addContent('.', 1);
        break;
      case 'Quote':
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Э' : `э`, 1);
        break;
      case 'Semicolon':
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ж' : 'ж', 1);
        break;
      case 'Backquote':
        addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ё' : 'ё', 1);
        keyBoard.children[0].children[0].classList.add('keyboard__item_tap-d');
        break;
    }
  }

  if (translate == 'en'){
    switch (e.code) {
      case 'BracketLeft':
        addContent('[', 1);
        break;
      case 'BracketRight':
        addContent(']', 1);
        break;
      case 'Comma':
        addContent(',', 1);
        break;
      case 'Period':
        addContent('.', 1);
        break;
      case 'Slash':
        addContent('/', 1);
        break;
      case 'Quote':
        addContent(`'`, 1);
        break;
      case 'Semicolon':
        addContent(';', 1);
        break;
      case 'Backquote':
        addContent('`', 1);
        keyBoard.children[0].children[0].classList.add('keyboard__item_tap-d');
        break;
    }
  }

  const getIter = (lineNum) => {
    for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
      if (e.key == 'Alt' || e.key == 'AltGraph'){
        e.preventDefault();
        window.addEventListener('keydown', (ev)=>{
          if (ev.code == 'ShiftLeft' && pressedKey.includes('AltLeft')) {
            keyBoard.children[4].children[2].classList.add('keyboard__item_tap-d');
            keyBoard.children[3].children[0].classList.add('keyboard__item_tap-d');
          }
        })    
        e.code == 'AltLeft' ? keyBoard.children[4].children[2].classList.add('keyboard__item_tap-d') : keyBoard.children[4].children[4].classList.add('keyboard__item_tap-d');
        window.addEventListener('keydown', (ev)=>{
          if (ev.code == 'ShiftLeft') {
            keyBoard.children[3].children[0].classList.add('keyboard__item_tap-d');
          }
        })
      }

      if (translate == 'ru'){
        codes.forEach(element => {
          if ('Key' + element.enkey.toUpperCase() == e.code){
            if (keyBoard.children[lineNum].children[i].innerHTML.toLowerCase() == element.rukey.toLowerCase()){
              keyBoard.children[lineNum].children[i].classList.add('keyboard__item_tap-l')
            }
          }
        });
      }
      if ("Key" + keyBoard.children[lineNum].children[i].textContent.toUpperCase() == e.code ||
      "Digit" + keyBoard.children[lineNum].children[i].textContent == e.code ||
      keyBoard.children[lineNum].children[i].textContent == e.code) {
        if(keyBoard.children[lineNum].children[i].innerHTML.length > 1){
          keyBoard.children[lineNum].children[i].classList.add('keyboard__item_tap-d');
        } else {
          e.preventDefault();
          keyBoard.children[lineNum].children[i].classList.add('keyboard__item_tap-l');
          let cursorPosition = textAriaContent.selectionStart;
          let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
          let valueAfterCursor = textAriaContent.value.substring(cursorPosition);

          textAriaContent.value = valueBeforeCursor + keyBoard.children[lineNum].children[i].innerText + valueAfterCursor;
      
          textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);      
        }
      } else if (keyBoard.children[lineNum].children[i].textContent == e.key){
        if (e.key.length > 1) {
          if (e.key == 'Shift') {
            e.code == 'ShiftLeft' ? keyBoard.children[3].children[0].classList.add('keyboard__item_tap-d') : keyBoard.children[3].children[12].classList.add('keyboard__item_tap-d');
            break
          }
          return
        } else {
          e.preventDefault();
          if(e.key == '`'){return;}
          keyBoard.children[lineNum].children[i].classList.add('keyboard__item_tap-l');
          if (e.key == '.' || e.key == '[' || e.key == ']' || e.key == ',' || e.key == '/' || e.key == ';' || e.key == `'`){return;}
          if (translate == 'ru'){return;}

          let cursorPosition = textAriaContent.selectionStart;
          let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
          let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
          
          textAriaContent.value = valueBeforeCursor + keyBoard.children[lineNum].children[i].innerText + valueAfterCursor;
      
          textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
        }
      } else {
        if (keyBoard.children[lineNum].children[i].classList.contains(e.code.toLowerCase())) {
          e.preventDefault();
          if (keyBoard.children[lineNum].children[i].classList.contains('arrowup')) {
            let cursorPosition = textAriaContent.selectionStart;
            let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
            let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
  
            textAriaContent.value = valueBeforeCursor + "▲" + valueAfterCursor;
        
            textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);      
          } else if (keyBoard.children[lineNum].children[i].classList.contains('arrowright')) {
            let cursorPosition = textAriaContent.selectionStart;
            let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
            let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
  
            textAriaContent.value = valueBeforeCursor + "►" + valueAfterCursor;
        
            textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);        
          } else if (keyBoard.children[lineNum].children[i].classList.contains('arrowdown')) {
            let cursorPosition = textAriaContent.selectionStart;
            let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
            let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
  
            textAriaContent.value = valueBeforeCursor + "▼" + valueAfterCursor;
        
            textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);        
          } else if (keyBoard.children[lineNum].children[i].classList.contains('arrowleft')) {
            let cursorPosition = textAriaContent.selectionStart;
            let valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
            let valueAfterCursor = textAriaContent.value.substring(cursorPosition);
  
            textAriaContent.value = valueBeforeCursor + "◄" + valueAfterCursor;
        
            textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);  
          }
          keyBoard.children[lineNum].children[i].classList.add('keyboard__item_tap-d');
        }
      }
    }
  }
  getIter(0);
  getIter(1);
  getIter(2);
  getIter(3);
  getIter(4);
}

window.addEventListener('keyup', (event) => {
  const getIter = (lineNum) => {
    for (let i = 0; i < keyBoard.children[lineNum].children.length; i++) {
      if (translate == 'ru'){
        codes.forEach(element => {
          if ('Key' + element.enkey.toUpperCase() == event.code){
            if (keyBoard.children[lineNum].children[i].innerHTML.toLowerCase() == element.rukey.toLowerCase()){
              keyBoard.children[lineNum].children[i].classList.remove('keyboard__item_tap-l');
            }
          }
        });
      }
      if ("Key" + keyBoard.children[lineNum].children[i].textContent.toUpperCase() == event.code ||
      "Digit" + keyBoard.children[lineNum].children[i].textContent == event.code ||
      keyBoard.children[lineNum].children[i].textContent == event.code) {
        if(keyBoard.children[lineNum].children[i].textContent.length > 1){
          keyBoard.children[lineNum].children[i].classList.remove('keyboard__item_tap-d');
        } else {
          keyBoard.children[lineNum].children[i].classList.remove('keyboard__item_tap-l');
        }
      }else if (keyBoard.children[lineNum].children[i].textContent == event.key){
        if(event.key == "`"){
          keyBoard.children[lineNum].children[i].classList.remove('keyboard__item_tap-d');
        } else {
          keyBoard.children[lineNum].children[i].classList.remove('keyboard__item_tap-l');
        }
      } else {
        if (keyBoard.children[lineNum].children[i].classList.contains(event.code.toLowerCase())) {
          keyBoard.children[lineNum].children[i].classList.remove('keyboard__item_tap-d');
        } else if (event.code == 'Space'){
          keyBoard.children[4].children[3].classList.remove('keyboard__item_tap-d');
        }
        if (keyBoard.children[lineNum].children[i].textContent == 'Del' || keyBoard.children[lineNum].children[i].textContent == 'Ctrl'){
          keyBoard.children[lineNum].children[i].classList.remove('keyboard__item_tap-d');
          event.code == 'ControlLeft' ? keyBoard.children[4].children[0].classList.remove('keyboard__item_tap-d') : keyBoard.children[4].children[5].classList.remove('keyboard__item_tap-d');
        }
      }
    }
  }
  getIter(0);
  getIter(1);
  getIter(2);
  getIter(3);
  getIter(4);

  if (event.code == 'MetaLeft' || event.code == 'Backquote'){
    event.code == 'Backquote' ? keyBoard.children[0].children[0].classList.remove('keyboard__item_tap-d') : keyBoard.children[4].children[1].classList.remove('keyboard__item_tap-d');
  }

  event.code == 'AltLeft' ? keyBoard.children[4].children[2].classList.remove('keyboard__item_tap-d') : keyBoard.children[4].children[4].classList.remove('keyboard__item_tap-d');
  event.code === 'ShiftRight' ? keyBoard.children[3].children[12].classList.remove('keyboard__item_tap-d') : keyBoard.children[3].children[0].classList.remove('keyboard__item_tap-d');
})

window.addEventListener("keydown", conaction);

const toTranslate = () => {
  window.addEventListener('keydown', (e)=>{ 
    if (pressedKey.indexOf(e.code) == -1){
      pressedKey.push(e.code);
    }
    if (pressedKey.includes('ShiftLeft') && pressedKey.includes('AltLeft')){
      let rememberCaps = keyBoard.children[2].children[0].classList.contains('keyboard__item_uppercase');
      translate == 'en' ? translate = 'ru' : translate = 'en';
      for(let keyboardLine of keyBoard.children){
        while (keyboardLine.firstChild) {
          keyboardLine.removeChild(keyboardLine.firstChild);
        }
      }
      if (translate === 'en') {
        addKeyboard(codes, 'enkey');
      } else {
        addKeyboard(codes, 'rukey');
      }
      rememberCaps ? keyBoard.children[2].children[0].classList.add('keyboard__item_uppercase') : keyBoard.children[2].children[0].classList.remove('keyboard__item_uppercase');

    }  
  });
  window.addEventListener('keyup', (e)=>{ 
    if (pressedKey.indexOf(e.code) != -1){
      pressedKey.splice(pressedKey.indexOf(e.code), 1);
    }
  });
}
toTranslate();
