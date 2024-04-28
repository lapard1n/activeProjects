import {
  taskPrototype,
  listContainer,
  inputBox,
  inputPublish,
} from "./appElements.js";
import { saveLocal } from "./appData.js";
import { personalObserver } from "./personalObserver.js";
import {
  resizeTextarea,
  rowRangeFinder
} from "./inputBox.js";

/**
 * УДАЛЕНИЕ ПРОТОТИПА task:
 */
function removePrototypeTask() {
  taskPrototype.removeAttribute('id');
  listContainer.innerHTML = '';
}

/**
 * СОЗДАНИЕ ЭЛЕМЕНТА task ЧЕРЕЗ КОПИРОВАНИЯ УЗЛА:
 *
 */
function cloneTask(str) {
  const task = taskPrototype.cloneNode(true);
  const taskText = task.querySelector('p');
  taskText.innerText = str;
  listContainer.prepend(task);
}

/**
 * ДОБАВЛЕНИЕ ТЕКСТА ИЗ inputBox:
 *
 */
function addingTask(event) {
  let regExpSpaceCheker = /\S/;

  if (event.type === 'click' || (event.key === 'Enter' || event.code === 'Enter') && !event.shiftKey) {
    event.preventDefault();

    if (!inputPublish.hasAttribute('disabled')) {
      cloneTask(inputBox.value.trim());
      inputBox.parentNode.style.height = '30px';
      inputBox.setAttribute('rows', 1);
      inputBox.value = '';
    }

    if (!regExpSpaceCheker.test(inputBox.value) && !inputPublish.hasAttribute('disabled')) {
      inputPublish.setAttribute('disabled', 'disabled');
    }

    if (inputPublish.hasAttribute('disabled')) {
      resizeTextarea();
      rowRangeFinder();
    }

    personalObserver();
    saveLocal();
  }
}

/**
 * ДЕЛЕГИРОВАНИЕ СОБЫТИЙ В listContainer:
 *
 */
function tasksEditor(event) {
  let eventTarget = event.target;
  let taskElement = eventTarget.closest('.task');

  if (eventTarget.hasAttribute('data-delete')) {
    taskElement.remove();
  }

  if (eventTarget.hasAttribute('data-change')) {
    console.log('change');
  }

  if (eventTarget.tagName === 'P') {
    if (!taskElement.classList.contains('checked')) {
      taskElement.classList.add('checked');
    } else {
      taskElement.classList.remove('checked');
    }
  }

  personalObserver();
  saveLocal();
}

/**
 * СОБЫТИЯ ДОБАВЛЕНИЯ ТЕКСТА В listContainer:
 *
 */
function listContainerInit() {
  removePrototypeTask();
  inputPublish.addEventListener('click', addingTask);
  inputBox.addEventListener('keydown', addingTask);
  listContainer.addEventListener('click', tasksEditor);
}

export { listContainerInit }
