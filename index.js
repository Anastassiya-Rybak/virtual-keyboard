const codes = [
  {
    enkey: '`',
    rukey: 'ё',
    shiftkey: '~',
  },
  {
    enkey: '1',
    rukey: '1',
    shiftkey: '!',
  },
  {
    enkey: '2',
    rukey: '2',
    shiftkey: '@',
  },
  {
    enkey: '3',
    rukey: '3',
    shiftkey: '#',
  },
  {
    enkey: '4',
    rukey: '4',
    shiftkey: '$',
  },
  {
    enkey: '5',
    rukey: '5',
    shiftkey: '%',
  },
  {
    enkey: '6',
    rukey: '6',
    shiftkey: '^',
  },
  {
    enkey: '7',
    rukey: '7',
    shiftkey: '&',
  },
  {
    enkey: '8',
    rukey: '8',
    shiftkey: '*',
  },
  {
    enkey: '9',
    rukey: '9',
    shiftkey: '(',
  },
  {
    enkey: '0',
    rukey: '0',
    shiftkey: ')',
  },
  {
    enkey: '-',
    rukey: '-',
    shiftkey: '_',
  },
  {
    enkey: '=',
    rukey: '=',
    shiftkey: '+',
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

let translate = localStorage.getItem('translate');

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

const textAria = document.createElement('section');
textAria.className = 'textaria';
root.append(textAria);

const textAriaContent = document.createElement('textarea');
textAriaContent.setAttribute('rows', '7');
textAriaContent.setAttribute('cols', '65');
textAriaContent.setAttribute('placeholder', 'Ну что ж, надеюсь все пройдёт без багов. . .');
textAria.append(textAriaContent);

const keyBoard = document.createElement('section');
keyBoard.className = 'keyboard';
root.append(keyBoard);

const keyBoardLine = document.createElement('div');
keyBoardLine.className = 'keyboard__line';
keyBoard.append(keyBoardLine);
keyBoard.append(keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true));
keyBoard.append(keyBoardLine.cloneNode(true), keyBoardLine.cloneNode(true));

const note = document.createElement('section');
note.className = 'notes';
root.append(note);

const howTranslate = document.createElement('p');
howTranslate.innerHTML = 'To change the language use this shortcut on phisical keyboard: \n <span>LeftShift + LeftAlt</span>';

const workOS = document.createElement('p');
workOS.innerHTML = 'This app was developed on Windiws OS';
note.append(howTranslate, workOS);

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
          switch (kbCol[line].children[i].innerText) {
            case '-':
              kbCol[line].children[i].innerText = '_';
              break;
            case '=':
              kbCol[line].children[i].innerText = '+';
              break;
            case '\\':
              kbCol[line].children[i].innerText = '|';
              break;
            case ']':
              kbCol[line].children[i].innerText = '}';
              break;
            case '[':
              kbCol[line].children[i].innerText = '{';
              break;
            case '\'':
              kbCol[line].children[i].innerText = '"';
              break;
            case ';':
              kbCol[line].children[i].innerText = ':';
              break;
            case '/':
              kbCol[line].children[i].innerText = '?';
              break;
            case '.':
              kbCol[line].children[i].innerText = '>';
              break;
            case ',':
              kbCol[line].children[i].innerText = '<';
              break;
            case '`':
              kbCol[line].children[i].innerText = '~';
              break;
            default:
              break;
          }
        }
      } else {
        for (let i = 0; i < kbCol[line].children.length; i += 1) {
          if (kbCol[line].children[i].innerText.length === 1) {
            kbCol[line].children[i].innerText = kbCol[line].children[i].innerText.toLowerCase();
          }
          switch (kbCol[line].children[i].innerText) {
            case '_':
              kbCol[line].children[i].innerText = '-';
              break;
            case '+':
              kbCol[line].children[i].innerText = '=';
              break;
            case '|':
              kbCol[line].children[i].innerText = '\\';
              break;
            case '}':
              kbCol[line].children[i].innerText = ']';
              break;
            case '{':
              kbCol[line].children[i].innerText = '[';
              break;
            case '"':
              kbCol[line].children[i].innerText = '\'';
              break;
            case ':':
              kbCol[line].children[i].innerText = ';';
              break;
            case '?':
              kbCol[line].children[i].innerText = '/';
              break;
            case '>':
              kbCol[line].children[i].innerText = '.';
              break;
            case '<':
              kbCol[line].children[i].innerText = ',';
              break;
            case '~':
              kbCol[line].children[i].innerText = '`';
              break;
            default:
              break;
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

const reg1 = /[QWERTYUIOPqwertyuiop]/;
const reg2 = /[ASDFGHJKLasdfghjkl]/;
const reg3 = /[ZXCVBNMzxcvbnm]/;

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
    const getIter = (cLine, size) => {
      if (size === 'up') {
        kbCol[2].children[0].classList.add('keyboard__item_uppercase');
        for (let i = 0; i < kbCol[cLine].children.length; i += 1) {
          if (kbCol[cLine].children[i].innerText.length === 1) {
            kbCol[cLine].children[i].innerText = kbCol[cLine].children[i].innerText.toUpperCase();
          }
        }
      } else {
        kbCol[2].children[0].classList.remove('keyboard__item_uppercase');
        for (let i = 0; i < kbCol[cLine].children.length; i += 1) {
          if (kbCol[cLine].children[i].innerText.length === 1) {
            kbCol[cLine].children[i].innerText = kbCol[cLine].children[i].innerText.toLowerCase();
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
  switch (code) { // Отрисовка символов и реализация функциональности по нажатию на клавиши.
    case 'Backspace':
      addDTap(kbCol[0].children[13]);
      toBackspace();
      break;
    case 'Delete':
      addDTap(kbCol[1].children[14]);
      toDelete();
      break;
    case 'Tab':
      addDTap(kbCol[1].children[0]);
      e.preventDefault();
      addContent('  ', 2);
      break;
    case 'CapsLock':
      addDTap(kbCol[2].children[0]);
      toCapsLock();
      break;
    case 'Space':
      addLTap(kbCol[4].children[3]);
      e.preventDefault();
      addContent(' ', 1);
      break;
    case 'Enter':
      addDTap(kbCol[2].children[12]);
      e.preventDefault();
      addContent('\n', 1);
      break;
    case 'MetaLeft':
      e.preventDefault();
      addDTap(kbCol[4].children[1]);
      break;
    case 'ControlLeft':
      addDTap(kbCol[4].children[0]);
      e.preventDefault();
      break;
    case 'ControlRight':
      addDTap(kbCol[4].children[5]);
      e.preventDefault();
      break;
    case 'AltLeft':
      addDTap(kbCol[4].children[2]);
      e.preventDefault();
      break;
    case 'AltRight':
      addDTap(kbCol[4].children[4]);
      e.preventDefault();
      break;
    case 'Backslash':
      addLTap(kbCol[1].children[13]);
      e.preventDefault();
      addContent('\\', 1);
      break;
    case 'BracketLeft':
      addLTap(kbCol[1].children[11]);
      e.preventDefault();
      if (translate === 'en') { symbol = '['; } else if (pressedKey.includes('CapsLock') || pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = 'Х';
      } else { symbol = 'х'; }
      addContent(symbol, 1);
      break;
    case 'BracketRight':
      addLTap(kbCol[1].children[12]);
      e.preventDefault();
      if (translate === 'en') { symbol = ']'; } else if (pressedKey.includes('CapsLock') || pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = 'Ъ';
      } else { symbol = 'ъ'; }
      addContent(symbol, 1);
      break;
    case 'Comma':
      addLTap(kbCol[3].children[8]);
      e.preventDefault();
      if (translate === 'en') { symbol = ','; } else if (pressedKey.includes('CapsLock') || pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = 'Б';
      } else { symbol = 'б'; }
      addContent(symbol, 1);
      break;
    case 'Period':
      addLTap(kbCol[3].children[9]);
      e.preventDefault();
      if (translate === 'en') { symbol = '.'; } else if (pressedKey.includes('CapsLock') || pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = 'Ю';
      } else { symbol = 'ю'; }
      addContent(symbol, 1);
      break;
    case 'Slash':
      addLTap(kbCol[3].children[10]);
      e.preventDefault();
      if (translate === 'en') { symbol = '/'; } else if (pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = ',';
      } else { symbol = '.'; }
      addContent(symbol, 1);
      break;
    case 'Quote':
      addLTap(kbCol[2].children[11]);
      e.preventDefault();
      if (translate === 'en') { symbol = '\''; } else if (pressedKey.includes('CapsLock') || pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = 'Э';
      } else { symbol = 'э'; }
      addContent(symbol, 1);
      break;
    case 'Semicolon':
      addLTap(kbCol[2].children[12]);
      e.preventDefault();
      if (translate === 'en') { symbol = ';'; } else if (pressedKey.includes('CapsLock') || pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = 'Ж';
      } else { symbol = 'ж'; }
      addContent(symbol, 1);
      break;
    case 'Backquote':
      addDTap(kbCol[0].children[0]);
      e.preventDefault();
      if (translate === 'en') { symbol = '`'; } else if (pressedKey.includes('CapsLock') || pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = 'Ё';
      } else { symbol = 'ё'; }
      addContent(symbol, 1);
      break;
    case 'Minus':
      addLTap(kbCol[0].children[11]);
      e.preventDefault();
      if (pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = '_';
      } else { symbol = '-'; }
      addContent(symbol, 1);
      break;
    case 'Equal':
      addLTap(kbCol[0].children[12]);
      e.preventDefault();
      if (pressedKey.includes('ShiftLeft') || pressedKey.includes('ShiftRight')) {
        symbol = '+';
      } else { symbol = '='; }
      addContent(symbol, 1);
      break;
    default:
      break;
  }

  if (key === 'Shift') { // Перегенерация контента клавиатуры на противоположный регистр.
    e.preventDefault();
    if (code === 'ShiftLeft') { addDTap(kbCol[3].children[0]); } else { addDTap(kbCol[3].children[12]); }
    window.addEventListener('keydown', (ev) => {
      if (ev.code === 'AltLeft' && pressedKey.includes('ShiftLeft')) {
        addDTap(kbCol[4].children[2]);
        addDTap(kbCol[3].children[0]);
      }
    });
    keyBoard.classList.toggle('keyboard_uppercase');
    const getIterate = (kLine, size) => {
      if (size === 'up') {
        for (let i = 0; i < kbCol[kLine].children.length; i += 1) {
          if (kbCol[kLine].children[i].innerText.length === 1) {
            kbCol[kLine].children[i].innerText = kbCol[kLine].children[i].innerText.toUpperCase();
          }
          switch (kbCol[kLine].children[i].innerText) {
            case '-':
              kbCol[kLine].children[i].innerText = '_';
              break;
            case '=':
              kbCol[kLine].children[i].innerText = '+';
              break;
            case '\\':
              kbCol[kLine].children[i].innerText = '|';
              break;
            case ']':
              kbCol[kLine].children[i].innerText = '}';
              break;
            case '[':
              kbCol[kLine].children[i].innerText = '{';
              break;
            case '\'':
              kbCol[kLine].children[i].innerText = '"';
              break;
            case ';':
              kbCol[kLine].children[i].innerText = ':';
              break;
            case '/':
              kbCol[kLine].children[i].innerText = '?';
              break;
            case '.':
              kbCol[kLine].children[i].innerText = '>';
              break;
            case ',':
              kbCol[kLine].children[i].innerText = '<';
              break;
            case '`':
              kbCol[kLine].children[i].innerText = '~';
              break;
            default:
              break;
          }
        }
      } else {
        for (let i = 0; i < kbCol[kLine].children.length; i += 1) {
          if (kbCol[kLine].children[i].innerText.length === 1) {
            kbCol[kLine].children[i].innerText = kbCol[kLine].children[i].innerText.toLowerCase();
          }
          switch (kbCol[kLine].children[i].innerText) {
            case '_':
              kbCol[kLine].children[i].innerText = '-';
              break;
            case '+':
              kbCol[kLine].children[i].innerText = '=';
              break;
            case '|':
              kbCol[kLine].children[i].innerText = '\\';
              break;
            case '}':
              kbCol[kLine].children[i].innerText = ']';
              break;
            case '{':
              kbCol[kLine].children[i].innerText = '[';
              break;
            case '"':
              kbCol[kLine].children[i].innerText = '\'';
              break;
            case ':':
              kbCol[kLine].children[i].innerText = ';';
              break;
            case '?':
              kbCol[kLine].children[i].innerText = '/';
              break;
            case '>':
              kbCol[kLine].children[i].innerText = '.';
              break;
            case '<':
              kbCol[kLine].children[i].innerText = ',';
              break;
            case '~':
              kbCol[kLine].children[i].innerText = '`';
              break;
            default:
              break;
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

  if (code.includes('Digit')) {
    e.preventDefault();
    symbol = code.slice(-1);

    Array.from(kbCol[0].children).forEach((elem) => {
      if (elem.textContent === symbol) {
        addLTap(elem);
        addContent(elem.textContent, 1);
      }
    });
  }

  if (code.slice(0, 5) === 'Arrow') {
    e.preventDefault();
    switch (code) {
      case 'ArrowUp':
        addDTap(kbCol[3].children[11]);
        addContent('▲', 1);
        break;
      case 'ArrowRight':
        addDTap(kbCol[4].children[8]);
        addContent('►', 1);
        break;
      case 'ArrowDown':
        addDTap(kbCol[4].children[7]);
        addContent('▼', 1);
        break;
      case 'ArrowLeft':
        addDTap(kbCol[4].children[6]);
        addContent('◄', 1);
        break;
      default:
        break;
    }
  }

  if (translate === 'ru' && code.includes('Key')) { // Вывод русских букв с нажатия клавиш.
    e.preventDefault();
    symbol = code.slice(-1).toLowerCase();
    symbol = codes.find((obj) => obj.enkey.toLowerCase() === symbol).rukey;

    Array.from(kbCol[line].children).forEach((elem) => {
      if (elem.textContent.toLowerCase() === symbol) {
        addLTap(elem);
        addContent(elem.textContent, 1);
      }
    });
  }

  if (translate === 'en' && code.includes('Key')) { // Вывод английских букв с нажатия клавиш.
    e.preventDefault();
    Array.from(kbCol[line].children).forEach((elem) => {
      if (`Key${elem.textContent.toUpperCase()}` === code) {
        addLTap(elem);
        addContent(elem.textContent, 1);
      }
    });
  }
};

const disconaction = (e) => {
  let line;
  let symbol;
  const { code } = e;

  if (pressedKey.indexOf(code) !== -1) {
    pressedKey.splice(pressedKey.indexOf(code), 1);
  }

  if (reg1.test(code.slice(-1))) { line = 1; } else if (reg2.test(code.slice(-1))) {
    line = 2;
  } else if (reg3.test(code.slice(-1))) {
    line = 3;
  }

  if (!code.includes('Key') && !code.includes('Digit')) {
    switch (code) {
      case 'Backspace':
        delDTap(kbCol[0].children[13]);
        break;
      case 'Delete':
        delDTap(kbCol[1].children[14]);
        break;
      case 'ShiftLeft':
        delDTap(kbCol[3].children[0]);
        break;
      case 'ShiftRight':
        delDTap(kbCol[3].children[12]);
        break;
      case 'Tab':
        delDTap(kbCol[1].children[0]);
        break;
      case 'CapsLock':
        delDTap(kbCol[2].children[0]);
        break;
      case 'Space':
        delLTap(kbCol[4].children[3]);
        break;
      case 'Enter':
        delDTap(kbCol[2].children[12]);
        break;
      case 'MetaLeft':
        delDTap(kbCol[4].children[1]);
        break;
      case 'ControlLeft':
        delDTap(kbCol[4].children[0]);
        break;
      case 'ControlRight':
        delDTap(kbCol[4].children[5]);
        break;
      case 'AltLeft':
        delDTap(kbCol[4].children[2]);
        break;
      case 'AltRight':
        delDTap(kbCol[4].children[4]);
        break;
      case 'Backslash':
        delLTap(kbCol[1].children[13]);
        break;
      case 'BracketLeft':
        delLTap(kbCol[1].children[11]);
        break;
      case 'BracketRight':
        delLTap(kbCol[1].children[12]);
        break;
      case 'Comma':
        delLTap(kbCol[3].children[8]);
        break;
      case 'Period':
        delLTap(kbCol[3].children[9]);
        break;
      case 'Slash':
        delLTap(kbCol[3].children[10]);
        break;
      case 'Quote':
        delLTap(kbCol[2].children[11]);
        break;
      case 'Semicolon':
        delLTap(kbCol[2].children[12]);
        break;
      case 'Backquote':
        delDTap(kbCol[0].children[0]);
        break;
      case 'Minus':
        delLTap(kbCol[0].children[11]);
        break;
      case 'Equal':
        delLTap(kbCol[0].children[12]);
        break;
      default:
        break;
    }
    if (code.slice(0, 5) === 'Arrow') {
      switch (code) {
        case 'ArrowUp':
          delDTap(kbCol[3].children[11]);
          break;
        case 'ArrowRight':
          delDTap(kbCol[4].children[8]);
          break;
        case 'ArrowDown':
          delDTap(kbCol[4].children[7]);
          break;
        case 'ArrowLeft':
          delDTap(kbCol[4].children[6]);
          break;
        default:
          break;
      }
    }
  }
  if (code.includes('Digit')) {
    symbol = code.slice(-1);

    Array.from(kbCol[0].children).forEach((elem) => {
      if (elem.textContent === symbol) {
        delLTap(elem);
      }
    });
  }

  if (translate === 'ru' && code.includes('Key')) {
    symbol = code.slice(-1).toLowerCase();
    symbol = codes.find((obj) => obj.enkey.toLowerCase() === symbol).rukey;

    Array.from(kbCol[line].children).forEach((elem) => {
      if (elem.textContent.toLowerCase() === symbol) {
        delLTap(elem);
      }
    });
  }

  if (translate === 'en' && code.includes('Key')) {
    Array.from(kbCol[line].children).forEach((elem) => {
      if (`Key${elem.textContent.toUpperCase()}` === code) {
        delLTap(elem);
      }
    });
  }
};

window.addEventListener('keyup', disconaction);

window.addEventListener('keydown', conaction);

const toTranslate = () => {
  window.addEventListener('keydown', (e) => {
    if (pressedKey.indexOf(e.code) === -1) {
      pressedKey.push(e.code);
    }
    if (pressedKey.includes('ShiftLeft') && pressedKey.includes('AltLeft')) {
      const rememberCaps = kbCol[2].children[0].classList.contains('keyboard__item_uppercase');
      if (translate === 'en') {
        translate = 'ru';
        localStorage.setItem('translate', 'ru');
      } else {
        translate = 'en';
        localStorage.setItem('translate', 'en');
      }
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
};
toTranslate();
