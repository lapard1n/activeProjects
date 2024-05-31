import {
  listInfo,
  inputBox,
  clearButton,
  listContainer,
} from "./appElements.js";
import { saveLocal } from "./appData.js";
import { personalObserver } from "./personalObserver.js";

/**
 * ДЕЛЕГИРОВАНИЕ СОБЫТИЙ ДЛЯ listInfo
 *
 */
function listInfoListener() {
  listInfo.addEventListener('click', (event) => {
    let eventTarget = event.target;

    if (eventTarget.matches('.todo-app__placeholder')) {
      inputBox.focus();
    }

    if ((eventTarget.matches('.todo-app__clear') || eventTarget === document.querySelector('.todo-app__strike')) && !eventTarget.hasAttribute('disabled')) {
      let allTasks = document.querySelectorAll('.task');

      allTasks.forEach(el => {
        el.classList.add('task-deletion');
      });

      setTimeout(() => {
        listContainer.innerHTML = '';
        personalObserver();
        saveLocal();
      }, 500);
    }

    personalObserver();
    saveLocal();
  })
}

/**
 * УПРАВЛЕНИЕ АНИМАЦИЕЙ clearButton
 *
 */
function clearButtonListener() {
  let animeState = false;
  let clearLine = document.querySelector('.todo-app__strike');

  clearButton.addEventListener('mouseenter', () => {
    if (!clearButton.hasAttribute("disabled")) {
      clearLine.style.animation = 'line-animation ease 500ms forwards';
      animeState = true;
    }
  })

  clearButton.parentElement.addEventListener('mouseleave', () => {
    if (animeState == true) {
      clearLine.style.animation = 'reverse-line ease 500ms forwards';
      animeState = false;
    }
  })
}

/**
 * ИНИЦИАЛИЗАЦИЯ МОДУЛЯ listInfo
 *
 */
function listInfoInit() {
  listInfoListener();
  clearButtonListener();
}

export { listInfoInit }
