const codes = [
  {
    enkey: '`',
    rukey: 'ё',
  },
  {
    enkey: '1',
    rukey: '1',
  },
  {
    enkey: '2',
    rukey: '2',
  },
  {
    enkey: '3',
    rukey: '3',
  },
  {
    enkey: '4',
    rukey: '4',
  },
  {
    enkey: '5',
    rukey: '5',
  },
  {
    enkey: '6',
    rukey: '6',
  },
  {
    enkey: '7',
    rukey: '7',
  },
  {
    enkey: '8',
    rukey: '8',
  },
  {
    enkey: '9',
    rukey: '9',
  },
  {
    enkey: '0',
    rukey: '0',
  },
  {
    enkey: '-',
    rukey: '-',
  },
  {
    enkey: '=',
    rukey: '=',
  },
  {
    enkey: 'Backspace',
    rukey: 'Backspace',
  },
  {
    enkey: 'Tab',
    rukey: 'Tab',
  },
  {
    enkey: 'q',
    rukey: 'й',
  },
  {
    enkey: 'w',
    rukey: 'ц',
  },
  {
    enkey: 'e',
    rukey: 'у',
  },
  {
    enkey: 'r',
    rukey: 'к',
  },
  {
    enkey: 't',
    rukey: 'е',
  },
  {
    enkey: 'y',
    rukey: 'н',
  },
  {
    enkey: 'u',
    rukey: 'г',
  },
  {
    enkey: 'i',
    rukey: 'ш',
  },
  {
    enkey: 'o',
    rukey: 'щ',
  },
  {
    enkey: 'p',
    rukey: 'з',
  },
  {
    enkey: '[',
    rukey: 'х',
  },
  {
    enkey: ']',
    rukey: 'ъ',
  },
  {
    enkey: '\\',
    rukey: '\\',
  },
  {
    enkey: 'Delete',
    rukey: 'Delete',
  },
  {
    enkey: 'CapsLock',
    rukey: 'CapsLock',
  },
  {
    enkey: 'A',
    rukey: 'ф',
  },
  {
    enkey: 'S',
    rukey: 'ы',
  },
  {
    enkey: 'D',
    rukey: 'в',
  },
  {
    enkey: 'F',
    rukey: 'а',
  },
  {
    enkey: 'G',
    rukey: 'п',
  },
  {
    enkey: 'H',
    rukey: 'р',
  },
  {
    enkey: 'J',
    rukey: 'о',
  },
  {
    enkey: 'K',
    rukey: 'л',
  },
  {
    enkey: 'L',
    rukey: 'д',
  },
  {
    enkey: ';',
    rukey: 'ж',
  },
  {
    enkey: "'",
    rukey: 'э',
  },
  {
    enkey: 'Enter',
    rukey: 'Enter',
  },
  {
    enkey: 'Shift',
    rukey: 'Shift',
  },
  {
    enkey: 'Z',
    rukey: 'я',
  },
  {
    enkey: 'X',
    rukey: 'ч',
  },
  {
    enkey: 'C',
    rukey: 'с',
  },
  {
    enkey: 'V',
    rukey: 'м',
  },
  {
    enkey: 'B',
    rukey: 'и',
  },
  {
    enkey: 'N',
    rukey: 'т',
  },
  {
    enkey: 'M',
    rukey: 'ь',
  },
  {
    enkey: ',',
    rukey: 'б',
  },
  {
    enkey: '.',
    rukey: 'ю',
  },
  {
    enkey: '/',
    rukey: '.',
  },
  {
    enkey: 'ArrowUp',
    rukey: 'ArrowUp',
  },
  {
    enkey: 'Shift',
    rukey: 'Shift',
  },
  {
    enkey: 'Control',
    rukey: 'Control',
  },
  {
    enkey: 'Meta',
    rukey: 'Meta',
  },
  {
    enkey: 'Alt',
    rukey: 'Alt',
  },
  {
    enkey: ' ',
    rukey: ' ',
  },
  {
    enkey: 'Alt',
    rukey: 'Alt',
  },
  {
    enkey: 'Control',
    rukey: 'Control',
  },
  {
    enkey: 'ArrowLeft',
    rukey: 'ArrowLeft',
  },
  {
    enkey: 'ArrowDown',
    rukey: 'ArrowDown',
  },
  {
    enkey: 'ArrowRight',
    rukey: 'ArrowRight',
  },
];

let translate = 'en';
const pressedKey = [];

const header = document.createElement('header');
header.className = 'header';
const title = document.createElement('h1');
title.className = 'header__title';
title.innerHTML = 'MY VIRTUAL KEYBOARD';
header.append(title);
document.querySelector('body').prepend(header);

const root = document.createElement('main');
root.id = 'root-container';
document.querySelector('body').append(root);

const textAria = document.createElement('div');
textAria.className = 'textaria';
root.append(textAria);

const textAriaContent = document.createElement('textarea');
textAriaContent.setAttribute('rows', '7');
textAriaContent.setAttribute('cols', '65');
textAriaContent.setAttribute('placeholder', 'Ну что ж, надеюсь все пройдёт без багов. . .');
textAria.append(textAriaContent);

const keyBoard = document.createElement('div');
keyBoard.className = 'keyboard';
root.append(keyBoard);

const keyBoardLine = document.createElement('div');
keyBoardLine.className = 'keyboard__line';
keyBoard.append(keyBoardLine);
keyBoard.append(keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true));
keyBoard.append(keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true));

const createKey = (key, selector, container) => {
  const keyElement = document.createElement('button');
  keyElement.className = selector;
  keyElement.setAttribute('tabindex', -1);
  if (key !== 'ArrowUp' && key !== 'ArrowLeft' && key !== 'ArrowDown' && key !== 'ArrowRight' && key !== 'Control' && key !== 'Meta' && key !== 'Delete') {
    keyElement.innerText = key;
  } else {
    switch (key) {
      case 'ArrowUp':
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(-0.25turn)">';
        break;
      case 'ArrowLeft':
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(180deg)">';
        break;
      case 'ArrowDown':
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="" style="transform: rotate(90deg)">';
        break;
      case 'ArrowRight':
        keyElement.classList.add(key.toLowerCase());
        keyElement.innerHTML = '<img src="./icons/arrow.png" alt="">';
        break;
      case 'Control':
        keyElement.innerHTML = 'Ctrl';
        break;
      case 'Meta':
        keyElement.innerHTML = 'Win';
        break;
      case 'Delete':
        keyElement.innerHTML = 'Del';
        break;
      default:
        break;
    }
  }
  container.append(keyElement);
};

const addKeyboard = (obj, key) => {
  function cirlc(start, iterNum, line, item) {
    if (item === 'enkey') {
      for (let i = start; i < iterNum; i += 1) {
        if (obj[i].enkey.length === 1 && obj[i].enkey !== ' ' && obj[i].enkey !== '`') {
          createKey(obj[i].enkey.toLowerCase(), 'keyboard__item_light', keyBoard.children[line]);
        } else if (obj[i].enkey !== ' ') {
          createKey(obj[i].enkey, 'keyboard__item_dark', keyBoard.children[line]);
        } else {
          createKey(obj[i].enkey, 'keyboard__item_light keyboard__item_space', keyBoard.children[line]);
        }
      }
    } else {
      for (let i = start; i < iterNum; i += 1) {
        if (obj[i].rukey.length === 1 && obj[i].rukey !== ' ' && obj[i].rukey !== 'ё') {
          createKey(obj[i].rukey.toLowerCase(), 'keyboard__item_light', keyBoard.children[line]);
        } else if (obj[i].rukey !== ' ') {
          createKey(obj[i].rukey, 'keyboard__item_dark', keyBoard.children[line]);
        } else {
          createKey(obj[i].rukey, 'keyboard__item_light keyboard__item_space', keyBoard.children[line]);
        }
      }
    }
  }
  cirlc(0, 14, 0, key);
  cirlc(14, 29, 1, key);
  cirlc(29, 42, 2, key);
  cirlc(42, 55, 3, key);
  cirlc(55, 64, 4, key);

  keyBoard.children[3].firstElementChild.classList.add('keyboard__item_shift');
  keyBoard.children[1].firstElementChild.classList.add('keyboard__item_shift');
};

const kbCol = keyBoard.children;

if (translate === 'en') {
  addKeyboard(codes, 'enkey');
} else {
  addKeyboard(codes, 'rukey');
}

textAriaContent.focus();

const addContent = (content, cursor) => {
  const cursorPosition = textAriaContent.selectionStart;
  const valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
  const valueAfterCursor = textAriaContent.value.substring(cursorPosition);

  textAriaContent.value = valueBeforeCursor + content + valueAfterCursor;

  textAriaContent.setSelectionRange(cursorPosition + cursor, cursorPosition + cursor);
};

const addDTap = (elem) => elem.classList.add('keyboard__item_tap-d');
const delDTap = (elem) => elem.classList.remove('keyboard__item_tap-d');
const addLTap = (elem) => elem.classList.add('keyboard__item_tap-l');
const delLTap = (elem) => elem.classList.remove('keyboard__item_tap-l');

const printSimbol = (event) => {
  event.preventDefault();

  if (!event.target.closest('button') || event.target.innerText === 'Ctrl' || event.target.innerText === 'Win' || event.target.innerText === 'Alt') { return; }

  if (event.target.innerText === 'Shift') {
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIterate = (line, size) => {
      if (size === 'up') {
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toLowerCase();
          }
        }
      }
    };
    if (keyBoard.classList.contains('keyboard_uppercase')) {
      getIterate(0, 'up');
      getIterate(1, 'up');
      getIterate(2, 'up');
      getIterate(3, 'up');
      getIterate(4, 'up');
      event.target.addEventListener('mouseup', () => {
        keyBoard.classList.remove('keyboard_uppercase');
        getIterate(0, 'down');
        getIterate(1, 'down');
        getIterate(2, 'down');
        getIterate(3, 'down');
        getIterate(4, 'down');
      });
    } else {
      getIterate(0, 'down');
      getIterate(1, 'down');
      getIterate(2, 'down');
      getIterate(3, 'down');
      getIterate(4, 'down');
      event.target.addEventListener('mouseup', () => {
        keyBoard.classList.add('keyboard_uppercase');
        getIterate(0, 'up');
        getIterate(1, 'up');
        getIterate(2, 'up');
        getIterate(3, 'up');
        getIterate(4, 'up');
      });
    }
    return;
  }

  if (event.target.innerText === 'CapsLock') {
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIter = (line, size) => {
      if (size === 'up') {
        kbCol[2].children[0].classList.add('keyboard__item_uppercase');
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toUpperCase();
          }
        }
      } else {
        kbCol[2].children[0].classList.remove('keyboard__item_uppercase');
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toLowerCase();
          }
        }
      }
    };
    if (keyBoard.classList.contains('keyboard_uppercase')) {
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
    return;
  }

  if (event.target.innerText === 'Backspace') {
    const cursorPosition = textAriaContent.selectionStart;
    const valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition - 1);
    const valueAfterCursor = textAriaContent.value.substring(cursorPosition);

    textAriaContent.value = valueBeforeCursor + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  } else if (event.target.innerText === 'Del') {
    const cursorPosition = textAriaContent.selectionStart;
    const valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    const valueAfterCursor = textAriaContent.value.substring(cursorPosition + 1);

    textAriaContent.value = valueBeforeCursor + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition, cursorPosition);
  } else if (event.target.innerText === 'Enter') {
    event.preventDefault();
    addContent('\n', 1);
  } else if (event.target.innerText === 'Tab') {
    addContent('  ', 2);
  } else if (event.target.classList.contains('arrowup') || event.target.closest('.arrowup')) {
    addContent('▲', 1);
  } else if (event.target.classList.contains('arrowright') || event.target.closest('.arrowright')) {
    addContent('►', 1);
  } else if (event.target.classList.contains('arrowdown') || event.target.closest('.arrowdown')) {
    addContent('▼', 1);
  } else if (event.target.classList.contains('arrowleft') || event.target.closest('.arrowleft')) {
    addContent('◄', 1);
  } else if (event.target.classList.contains('keyboard__item_space')) {
    addContent(' ', 1);
  } else {
    addContent(event.target.innerText, 1);
  }
};

keyBoard.addEventListener('mousedown', printSimbol, false);

const conaction = (e) => {
  let line;
  let symbol;
  const { code } = e;
  const { key } = e;

  if (reg1.test(code.slice(-1))) { line = 1; } else if (reg2.test(code.slice(-1))) {
    line = 2;
  } else if (reg3.test(code.slice(-1))) {
    line = 3;
  }

  const toBackspace = () => {
    e.preventDefault();
    const cursorPosition = textAriaContent.selectionStart;
    const valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition - 1);
    const valueAfterCursor = textAriaContent.value.substring(cursorPosition);
    textAriaContent.value = valueBeforeCursor + valueAfterCursor;
    textAriaContent.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  };
  const toDelete = () => {
    e.preventDefault();
    const cursorPosition = textAriaContent.selectionStart;
    const valueBeforeCursor = textAriaContent.value.substring(0, cursorPosition);
    const valueAfterCursor = textAriaContent.value.substring(cursorPosition + 1);

    textAriaContent.value = valueBeforeCursor + valueAfterCursor;

    textAriaContent.setSelectionRange(cursorPosition, cursorPosition);
  };
  const toCapsLock = () => {
    e.preventDefault();
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIter = (line, size) => {
      if (size === 'up') {
        kbCol[2].children[0].classList.add('keyboard__item_uppercase');
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toUpperCase();
          }
        }
      } else {
        kbCol[2].children[0].classList.remove('keyboard__item_uppercase');
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toLowerCase();
          }
        }
      }
    };
    if (keyBoard.classList.contains('keyboard_uppercase')) {
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
  };

  switch (code) {
    case 'Backspace':
      toBackspace();
      break;
    case 'Delete':
      toDelete();
      break;
    case 'Tab':
      e.preventDefault();
      addContent('  ', 2);
      break;
    case 'CapsLock':
      toCapsLock();
      break;
    case 'Space':
      e.preventDefault();
      addContent(' ', 1);
      break;
    case 'Enter':
      e.preventDefault();
      addContent('\n', 1);
      break;
    case 'MetaLeft':
      e.preventDefault();
      addDTap(kbCol[4].children[1]);
      break;
    case 'Backslash':
      e.preventDefault();
      addContent('\\', 1);
      break;
    case 'BracketLeft':
      e.preventDefault();
      if (translate === 'en') { symbol = '['; } else { break; }
      addContent(symbol, 1);
      break;
    case 'BracketRight':
      e.preventDefault();
      if (translate === 'en') { symbol = ']'; } else { break; }
      addContent(symbol, 1);
      break;
    case 'Comma':
      e.preventDefault();
      if (translate === 'en') { symbol = ','; } else { break; }
      addContent(symbol, 1);
      break;
    case 'Period':
      e.preventDefault();
      if (translate === 'en') { symbol = '.'; } else { break; }
      addContent(symbol, 1);
      break;
    case 'Slash':
      e.preventDefault();
      if (translate === 'en') { symbol = '/'; } else { break; }
      addContent(symbol, 1);
      break;
    case 'Quote':
      e.preventDefault();
      if (translate === 'en') { symbol = '\''; } else { break; }
      addContent(symbol, 1);
      break;
    case 'Semicolon':
      e.preventDefault();
      if (translate === 'en') { symbol = ';'; } else { break; }
      addContent(symbol, 1);
      break;
    case 'Backquote':
      e.preventDefault();
      if (translate === 'en') { symbol = '`'; } else { break; }
      addContent(symbol, 1);
      break;
    default:
      break;
  }

  if (key === 'Shift') {
    e.preventDefault();
    window.addEventListener('keydown', (ev) => {
      if (ev.code === 'AltLeft' && pressedKey.includes('ShiftLeft')) {
        addDTap(kbCol[4].children[2]);
        addDTap(kbCol[3].children[0]);
      }
    });
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIterate = (line, size) => {
      if (size === 'up') {
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toLowerCase();
          }
        }
      }
    };

    if (keyBoard.classList.contains('keyboard_uppercase')) {
      getIterate(0, 'up');
      getIterate(1, 'up');
      getIterate(2, 'up');
      getIterate(3, 'up');
      getIterate(4, 'up');
      window.addEventListener('keyup', (ev) => {
        if (ev.key === 'Shift') {
          keyBoard.classList.remove('keyboard_uppercase');
          getIterate(0, 'down');
          getIterate(1, 'down');
          getIterate(2, 'down');
          getIterate(3, 'down');
          getIterate(4, 'down');
        }
      });
    } else {
      getIterate(0, 'down');
      getIterate(1, 'down');
      getIterate(2, 'down');
      getIterate(3, 'down');
      getIterate(4, 'down');
      window.addEventListener('keyup', (ev) => {
        if (ev.key === 'Shift') {
          keyBoard.classList.add('keyboard_uppercase');
          getIterate(0, 'up');
          getIterate(1, 'up');
          getIterate(2, 'up');
          getIterate(3, 'up');
          getIterate(4, 'up');
        }
      });
    }
  }

  if (translate === 'ru') {
    e.preventDefault();
    codes.forEach((element) => {
      if (`Key${element.enkey.toUpperCase()}` === e.code) {

      }
    });
    // switch (e.code) {
    //   case 'BracketLeft':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Х' : 'х', 1);
    //     break;
    //   case 'BracketRight':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ъ' : 'ъ', 1);
    //     break;
    //   case 'Comma':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Б' : 'б', 1);
    //     break;
    //   case 'Period':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ю' : 'ю', 1);
    //     break;
    //   case 'Slash':
    //     addContent('.', 1);
    //     break;
    //   case 'Quote':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Э' : 'э', 1);
    //     break;
    //   case 'Semicolon':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ж' : 'ж', 1);
    //     break;
    //   case 'Backquote':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? 'Ё' : 'ё', 1);
    //     addDTap(kbCol[0].children[0]);
    //     break;
    //   case 'Minus':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? '_' : '-', 1);
    //     addLTap(kbCol[0].children[0]);
    //     break;
    //   case 'Equal':
    //     addContent((pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight') || keyBoard.classList.contains('keyboard_uppercase')) ? '+' : '=', 1);
    //     addLTap(kbCol[0].children[0]);
    //     break;
    //   default:
    //     break;
    // }
  }

  if (translate === 'en' && code.includes('Key')) {
    e.preventDefault();
    Array.from(kbCol[line].children).forEach((elem) => {
      if (`Key${elem.textContent.toUpperCase()}` === code) { addContent(elem.textContent, 1); }
    });
  }

  // const getIter = (line) => {
  //   for (let i = 0; i < kbCol[line].children.length; i += 1) {
  //     if (e.key === 'Alt' || e.key === 'AltGraph') {
  //       e.preventDefault();
  //       window.addEventListener('keydown', (ev) => {
  //         if (ev.code === 'ShiftLeft' && pressedKey.includes('AltLeft')) {
  //           addDTap(kbCol[4].children[2]);
  //           addDTap(kbCol[3].children[0]);
  //         }
  //       });
  //       if (e.code === 'AltLeft') { addDTap(kbCol[4].children[2]); } else { addDTap(kbCol[4].children[4]); }
  //       window.addEventListener('keydown', (ev) => {
  //         if (ev.code === 'ShiftLeft') {
  //           addDTap(kbCol[3].children[0]);
  //         }
  //       });
  //     }

  //     if (translate === 'ru') {
  //       codes.forEach((element) => {
  //         if (`Key${element.enkey.toUpperCase()}` === e.code) {
  //           if (kbCol[line].children[i].innerHTML.toLowerCase() === element.rukey.toLowerCase()) {
  //             addLTap(kbCol[line].children[i]);
  //           }
  //         }
  //       });
  //     }
  //     if (`Key${kbCol[line].children[i].textContent.toUpperCase()}` === e.code
  //     || `Digit${kbCol[line].children[i].textContent}` === e.code
  //     || kbCol[line].children[i].textContent === e.code) {
  //       if (kbCol[line].children[i].innerHTML.length > 1) {
  //         addDTap(kbCol[line].children[i]);
  //       } else {
  //         e.preventDefault();
  //         addLTap(kbCol[line].children[i]);
  //         addContent(kbCol[line].children[i].innerText, 1);
  //       }
  //     } else if (kbCol[line].children[i].textContent === e.key) {
  //       if (e.key.length > 1) {
  //         if (e.key === 'Shift') {
  //           if (e.code === 'ShiftLeft') { addDTap(kbCol[3].children[0]); } else { addDTap(kbCol[3].children[12]); }
  //           break;
  //         }
  //         // return;
  //       } else {
  //         e.preventDefault();
  //         if (e.key === '`') { return; }
  //         addLTap(kbCol[line].children[i]);
  //         if (e.key === '.' || e.key === '[' || e.key === ']' || e.key === ',' || e.key === '/' || e.key === ';' || e.key === '\'') { return; }
  //         if (translate === 'ru') { return; }

  //         const cursorPosition = textAriaContent.selectionStart;
  //         const value1 = textAriaContent.value.substring(0, cursorPosition);
  //         const value2 = textAriaContent.value.substring(cursorPosition);

  //         textAriaContent.value = value1 + kbCol[line].children[i].innerText + value2;

  //         textAriaContent.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
  //       }
  //     } else if (kbCol[line].children[i].classList.contains(e.code.toLowerCase())) {
  //       e.preventDefault();
  //       if (kbCol[line].children[i].classList.contains('arrowup')) {
  //         e.preventDefault();
  //         addContent('▲', 1);
  //       } else if (kbCol[line].children[i].classList.contains('arrowright')) {
  //         addContent('►', 1);
  //       } else if (kbCol[line].children[i].classList.contains('arrowdown')) {
  //         addContent('▼', 1);
  //       } else if (kbCol[line].children[i].classList.contains('arrowleft')) {
  //         addContent('◄', 1);
  //       }
  //       addDTap(kbCol[line].children[i]);
  //     }
  //   }
  // };
  // getIter(0);
  // getIter(1);
  // getIter(2);
  // getIter(3);
  // getIter(4);
};

window.addEventListener('keyup', (event) => {
  const getIter = (line) => {
    for (let i = 0; i < kbCol[line].children.length; i += 1) {
      if (translate === 'ru') {
        codes.forEach((elem) => {
          if (`Key${elem.enkey.toUpperCase()}` === event.code) {
            while (kbCol[line].children[i].innerHTML.toLowerCase() === elem.rukey.toLowerCase()) {
              delLTap(kbCol[line].children[i]);
            }
          }
        });
      }
      if (`Key${kbCol[line].children[i].textContent.toUpperCase()}` === event.code
      || `Digit${kbCol[line].children[i].textContent}` === event.code
      || kbCol[line].children[i].textContent === event.code) {
        if (kbCol[line].children[i].textContent.length > 1) {
          delDTap(kbCol[line].children[i]);
        } else {
          delLTap(kbCol[line].children[i]);
        }
      } else if (kbCol[line].children[i].textContent === event.key) {
        if (event.key === '`') {
          delDTap(kbCol[line].children[i]);
        } else {
          delLTap(kbCol[line].children[i]);
        }
      } else {
        if (kbCol[line].children[i].classList.contains(event.code.toLowerCase())) {
          delDTap(kbCol[line].children[i]);
        } else if (event.code === 'Space') {
          delDTap(kbCol[4].children[3]);
        }
        if (kbCol[line].children[i].textContent === 'Del' || kbCol[line].children[i].textContent === 'Ctrl') {
          delDTap(kbCol[line].children[i]);
          if (event.code === 'ControlLeft') { delDTap(kbCol[4].children[0]); } else { delDTap(kbCol[4].children[5]); }
        }
      }
    }
  };
  getIter(0);
  getIter(1);
  getIter(2);
  getIter(3);
  getIter(4);

  if (event.code === 'MetaLeft' || event.code === 'Backquote') {
    if (event.code === 'Backquote') { delDTap(kbCol[0].children[0]); } else { delDTap(kbCol[4].children[1]); }
  }

  if (event.code === 'AltLeft') { delDTap(kbCol[4].children[2]); } else { delDTap(kbCol[4].children[4]); }
  if (event.code === 'ShiftRight') { delDTap(kbCol[3].children[12]); } else { delDTap(kbCol[3].children[0]); }
});

window.addEventListener('keydown', conaction);

const toTranslate = () => {
  window.addEventListener('keydown', (e) => {
    if (pressedKey.indexOf(e.code) === -1) {
      pressedKey.push(e.code);
    }
    if (pressedKey.includes('ShiftLeft') && pressedKey.includes('AltLeft')) {
      const rememberCaps = kbCol[2].children[0].classList.contains('keyboard__item_uppercase');
      if (translate === 'en') { translate = 'ru'; } else { translate = 'en'; }
      for (let i = 0; i < kbCol.length; i += 1) {
        while (kbCol[i].firstChild) {
          kbCol[i].removeChild(kbCol[i].firstChild);
        }
      }
      if (translate === 'en') {
        addKeyboard(codes, 'enkey');
      } else {
        addKeyboard(codes, 'rukey');
      }
      if (rememberCaps) { kbCol[2].children[0].classList.add('keyboard__item_uppercase'); } else { kbCol[2].children[0].classList.remove('keyboard__item_uppercase'); }
    }
  });
  window.addEventListener('keyup', (e) => {
    if (pressedKey.indexOf(e.code) !== -1) {
      pressedKey.splice(pressedKey.indexOf(e.code), 1);
    }
  });
};
toTranslate();
