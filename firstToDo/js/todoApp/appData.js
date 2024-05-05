import {
  listContainer,
  numberCounter,
  placeHolder,
  clearButton
} from "./appElements.js";

/**
 * СОХРАНЕНИЕ ДАННЫХ В localStorage
 *
 */
function saveLocal() {
  localStorage.setItem('tasks', listContainer.innerHTML);
  localStorage.setItem('counter', numberCounter.innerHTML);
  localStorage.setItem('placeholder', placeHolder.textContent);
  localStorage.setItem('clear', clearButton.hasAttribute('disabled'));
}

/**
 * ЗАГРУЗКА ДАННЫХ ИЗ localStorage
 *
 */
function showLocal() {
  listContainer.innerHTML = localStorage.getItem('tasks');
  numberCounter.innerHTML = localStorage.getItem('counter');
  placeHolder.textContent = localStorage.getItem('placeholder');
  if (localStorage.getItem('clear') === 'true') {
    clearButton.setAttribute('disabled', 'disabled');
  }
  if (localStorage.getItem('clear') === 'false') {
    clearButton.removeAttribute('disabled');
  }
}

export { saveLocal, showLocal }
