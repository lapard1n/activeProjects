import { inputBox, inputPublish } from "./appElements.js";

/**
 * РАСШИРЕНИЕ ЭЛЕМЕНТА inputBox
 *
 */
function resizeTextarea(thisInput) {
  let rowHeight = window.getComputedStyle(thisInput).lineHeight;
  rowHeight = rowHeight.replace(/\D/g, '');

  if (thisInput.scrollHeight / rowHeight <= 5) {
    thisInput.style.height = 'auto';
    thisInput.style.height = thisInput.scrollHeight + 'px';
    thisInput.parentNode.style.height = 5 + (thisInput.scrollHeight) + 'px';
  } else {
    thisInput.style.height = rowHeight * 5 + 'px';
    thisInput.parentNode.style.height = 5 + (rowHeight * 5) + 'px';
  }
}

/**
 * ПОДСЧЕТ ВВОДИМЫХ СМВОЛОВ В СТРОКЕ inputBox
 *
 */
function rowRangeFinder(thisRow, thisInput) {
  let rowRange = thisRow.querySelector('.todo-app__range');
  rowRange.textContent = `${thisInput.value.length}/404`;
}

/**
 * ПРОВЕРКА ВВОДА В ПОЛЕ inputBox
 *
 */
function inputBoxListener(thisRow, thisInput, thisButton) {
  let regExpSpaceCheker = /\S/;

  if (
    !regExpSpaceCheker.test(thisInput.value) &&
    !thisButton.hasAttribute('disabled')
  ) {
    thisButton.setAttribute('disabled', 'disabled');
  }

  if (
    regExpSpaceCheker.test(thisInput.value) &&
    thisButton.hasAttribute('disabled')
  ) {
    thisButton.removeAttribute('disabled');
  }

  resizeTextarea(thisInput);
  rowRangeFinder(thisRow, thisInput);
}

/**
 * ИНИЦИАЛИЗАЦИЯ МОДУЛЯ inputBox И ФИЛЬТРА tasks
 *
 */
function inputBoxInit() {
  resizeTextarea(inputBox);
  rowRangeFinder(inputBox.parentElement, inputBox);
  inputBox.addEventListener('input', () => inputBoxListener(inputBox.parentElement, inputBox, inputPublish));
}

export { resizeTextarea, rowRangeFinder, inputBoxListener, inputBoxInit }
