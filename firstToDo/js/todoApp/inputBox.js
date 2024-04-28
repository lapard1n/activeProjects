import { inputBox, inputPublish } from "./appElements.js";

/**
 * РАСШИРЕНИЕ ЭЛЕМЕНТА input:
 *
 */
function resizeTextarea() {
  let rowHeight = window.getComputedStyle(inputBox).lineHeight;
  rowHeight = rowHeight.replace(/\D/g, '');

  if (inputBox.scrollHeight / rowHeight <= 5) {
    inputBox.style.height = 'auto';
    inputBox.style.height = inputBox.scrollHeight + 'px';
    inputBox.parentNode.style.height = 5 + (inputBox.scrollHeight) + 'px';
  } else {
    inputBox.style.height = rowHeight * 5 + 'px';
    inputBox.parentNode.style.height = 5 + (rowHeight * 5) + 'px';
  }
}

/**
 * ПОДСЧЕТ ВВОДИМЫХ СМВОЛОВ В СТРОКЕ input:
 *
 */
function rowRangeFinder() {
  let rowRange = document.querySelector('.todo-app__range');
  rowRange.textContent = `${inputBox.value.length}/404`;
}

/**
 * ПРОВЕРКА ВВОДА В ПОЛЕ input:
 *
 */
function inputBoxListener() {
  inputBox.addEventListener('input', () => {
    let regExpSpaceCheker = /\S/;

    if (!regExpSpaceCheker.test(inputBox.value) && !inputPublish.hasAttribute('disabled')) {
      inputPublish.setAttribute('disabled', 'disabled');
    }

    if (regExpSpaceCheker.test(inputBox.value) && inputPublish.hasAttribute('disabled')) {
      inputPublish.removeAttribute('disabled');
    }

    resizeTextarea();
    rowRangeFinder();
  })
}

function inputBoxInit() {
  resizeTextarea();
  rowRangeFinder();
  inputBoxListener();
}

export { resizeTextarea, rowRangeFinder, inputBoxInit }
