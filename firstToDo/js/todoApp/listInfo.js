import {
  listInfo,
  inputBox,
  clearButton,
  listContainer,
} from "./appElements.js";
import { saveLocal } from "./appData.js";
import { personalObserver } from "./personalObserver.js";

/**
 * ДЕЛЕГИРОВАНИЕ СОБЫТИЙ ДЛЯ listInfo:
 *
 */
function listInfoListener() {
  listInfo.addEventListener('click', (event) => {
    let eventTarget = event.target;

    if (eventTarget.matches('.todo-app__placeholder')) {
      inputBox.focus();
    }

    if ((eventTarget.matches('.todo-app__clear') || eventTarget === clearButton.querySelector('span')) && !eventTarget.hasAttribute('disabled')) {
      listContainer.innerHTML = '';

      personalObserver();
      saveLocal();
    }
  })
}

/**
 * УПРАВЛЕНИЕ АНИМАЦИЕЙ clearButton:
 *
 */
function clearButtonListener() {
  clearButton.addEventListener('mouseenter', (event) => {
    if (event.target === clearButton && event.target !== clearButton.querySelector('span') && !event.target.hasAttribute('disabled')) {
      let clearLine = document.createElement('span');
      clearLine.classList.add('line-animation');
      clearLine.style.animation = 'line-animation ease 500ms forwards';
      clearButton.append(clearLine);
    }
  })

  clearButton.addEventListener('mouseleave', (event) => {
    if (event.target === clearButton && event.target !== clearButton.querySelector('span')) {
      let clearLine = clearButton.querySelectorAll('span');
      clearLine.forEach(element => {
        element.style.animation = 'reverse-line ease 500ms forwards';
        setTimeout(() => { element.remove() }, 500);
      })
    }
  })
}

/**
 * Description placeholder
 */
function listInfoInit() {
  listInfoListener();
  clearButtonListener();
}

export { listInfoInit }

// КРЧ, рассказываю, берешь и оборачиваешь button в родителя, делаешь ему позитионе релативе, и адаптируешь под размеры контента и накладываешь в итоге анимацию поверх буттона, а не внутри него - база
