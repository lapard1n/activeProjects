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
  let numberChecked = listContainer.querySelectorAll('.task.checked');

  if (listContainer.childNodes.length === 0) {
    placeHolder.textContent = 'Add your task right here~';
    clearButton.setAttribute('disabled', 'disabled');
  }
  if (listContainer.childNodes.length > 0) {
    placeHolder.textContent = 'Keep it up!';
    clearButton.removeAttribute('disabled');
  }

  tasksQuantity[0].textContent = `tasks: ${listContainer.childNodes.length}`;
  tasksQuantity[1].textContent = `checked: ${numberChecked.length}`;

  saveLocal();
}

export { personalObserver }
