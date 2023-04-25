const codes = {
  0: "`",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "0",
  11: "-",
  12: "=",
  13: "Backspace",
  14: "Tab",
  15: "q",
  16: "w",
  17: "e",
  18: "r",
  19: "t",
  20: "y",
  21: "u",
  22: "i",
  23: "o",
  24: "p",
  25: "[",
  26: "]",
  27: "\\",
  28: "Delete",
  29: "CapsLock",
  30: "A",
  31: "S",
  32: "D",
  33: "F",
  34: "G",
  35: "H",
  36: "J",
  37: "K",
  38: "L",
  39: ";",
  40: "'",
  41: "Enter",
  42: "Shift",
  43: "Z",
  44: "X",
  45: "C",
  46: "V",
  47: "B",
  48: "N",
  49: "M",
  50: ",",
  51: ".",
  52: "/",
  53: "ArrowUp",
  54: "Shift",
  55: "Control",
  56: "Meta",
  57: "Alt",
  58: " ",
  59: "Alt",
  60: "Control",
  61: "ArrowLeft",
  62: "ArrowDown",
  63: "ArrowRight"
};


const root = document.createElement('div');
root.id = 'root-container';
document.querySelector('body').prepend(root);

let textAria = document.createElement('div');
textAria.className = 'textaria';
root.append(textAria);

let textAriaContent = document.createElement('p');
textAria.append(textAriaContent);

let keyBoard = document.createElement('div');
keyBoard.className = 'keyboard';
root.append(keyBoard);

let keyBoardLine = document.createElement('div');
keyBoardLine.className = 'keyboard__line';
keyBoard.append(keyBoardLine);
keyBoard.append(keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true));


function createKey (key, selector, container) {
  let keyElement = document.createElement('button');
  keyElement.className = selector;
  if (key != "ArrowUp" && key != "ArrowLeft" && key != "ArrowDown" && key != "ArrowRight" && key != "Control" && key != "Meta" && key != "Delete"){
    keyElement.innerText = key;
  } else {
    switch (key) {
      case "ArrowUp":
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(-0.25turn)">';
        break;
      case "ArrowLeft":
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(180deg)">';
        break;
      case "ArrowDown":
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(90deg)">';
        break;
      case "ArrowRight":
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="">';
        break;
      case "Control":
        keyElement.innerHTML = 'Ctrl';
        break;
      case "Meta":
        keyElement.innerHTML = 'Win';
        break;
      case "Delete":
        keyElement.innerHTML = 'Del';
        break;                
    }
  }
  container.append(keyElement);
}

function addKeyboard (obj) {
  function cirlc(start ,iterNum, line){
    for(let i = start; i < iterNum; i++) {
      if (obj[i].length == 1 && obj[i] != " " && obj[i] != "`") {
        createKey(obj[i].toLowerCase() , 'keyboard__item_light', keyBoard.children[line]);
      }else if (obj[i] != " "){
        createKey(obj[i], 'keyboard__item_dark', keyBoard.children[line]);
      }else{
        createKey(obj[i], 'keyboard__item_light keyboard__item_space', keyBoard.children[line])
      }
    }
  };
  cirlc(0, 14, 0);
  cirlc(14, 29, 1);
  cirlc(29, 42, 2);
  cirlc(42, 55, 3);
  cirlc(55, 64, 4);

  keyBoard.children[3].firstElementChild.classList.add('keyboard__item_shift');
  keyBoard.children[1].firstElementChild.classList.add('keyboard__item_shift');
}

addKeyboard(codes);
