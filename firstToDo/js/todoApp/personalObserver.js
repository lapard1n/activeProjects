import {
  listInfo,
  listContainer,
  placeHolder,
  clearButton,
} from "./appElements.js";
import { saveLocal } from "./appData.js";

/**
 * ОБРАБОТКА СОДЕРЖИМОГО listContainer И ОТОБРАЖЕНИЕ В listInfo
 *
 */
function personalObserver() {
  let tasksQuantity = listInfo.querySelectorAll('.todo-app__counter-value');
  let numberChecked = listContainer.querySelectorAll('.task__content.checked');

  tasksQuantity[0].textContent = `tasks: ${listContainer.childNodes.length}`;
  tasksQuantity[1].textContent = `checked: ${numberChecked.length}`;

  if (listContainer.childNodes.length === 0) {
    placeHolder.textContent = 'Add your task right here~';
    clearButton.setAttribute('disabled', 'disabled');
  }
  if (listContainer.childNodes.length > 0) {
    placeHolder.textContent = 'Keep it up!';
    clearButton.removeAttribute('disabled');
  }

  saveLocal();
}

export { personalObserver }
