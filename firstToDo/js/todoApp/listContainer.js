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
  rowRangeFinder,
  inputBoxListener
} from "./inputBox.js";

/**
 * УДАЛЕНИЕ ПРОТОТИПА task
 */
function removePrototypeTask() {
  taskPrototype.removeAttribute('id');
  listContainer.innerHTML = '';
}

/**
 * СОЗДАНИЕ ЭЛЕМЕНТА task ЧЕРЕЗ КОПИРОВАНИЯ УЗЛА
 *
 */
function cloneTask(str) {
  const task = taskPrototype.cloneNode(true);
  const taskText = task.querySelector('.task__content p');
  taskText.innerText = str;
  listContainer.prepend(task);
}

/**
 * ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА task В list listContainer
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
      resizeTextarea(inputBox);
      rowRangeFinder(inputBox.parentElement, inputBox);
    }

    personalObserver();
    saveLocal();
  }
}

/**
 * ИЗМЕНЕНИЕ ТЕКСТА В task
 *
 */
function changingTask(event) {
  const eventTarget = event.target.closest('.task');
  const textElement = eventTarget.querySelector('.task__content');
  const textItself = textElement.querySelector('p');
  const newRow = inputBox.parentElement.cloneNode(true);
  const newInput = newRow.querySelector('.todo-app__input');
  const newPublish = newRow.querySelector('.todo-app__publish');

  eventTarget.querySelector('img[data-change]').remove();
  newRow.querySelector('.todo-app__input').value = textItself.textContent;
  newRow.querySelector('.todo-app__publish').textContent = 'Edit';
  newRow.classList.add('todo-app__row_editor');
  textElement.classList.add('task__content_editing');
  textItself.replaceWith(newRow);

  inputBoxListener(newRow, newInput, newPublish);
  newRow.addEventListener('input', () => inputBoxListener(newRow, newInput, newPublish));

  newPublish.addEventListener('click', () => pasteText(event));
  newInput.addEventListener('keydown', () => pasteText(event));
}

/**
 * ЗАМЕНА ТЕКСТА В task
 *
 */
function pasteText(event) {
  if (event.type === 'click' || (event.key === 'Enter' || event.code === 'Enter') && !event.shiftKey) {
    console.log(event.type);
  }
}

/**
 * ДЕЛЕГИРОВАНИЕ СОБЫТИЙ В listContainer
 *
 */
function tasksEditor(event) {
  let eventTarget = event.target;
  let taskElement = eventTarget.closest('.task');
  let taskContent = taskElement.querySelector('.task__content');

  if (eventTarget.hasAttribute('data-delete')) {
    taskElement.remove();
  }

  if (eventTarget.hasAttribute('data-change')) {
    changingTask(event);
  }

  if (eventTarget.matches('.task__content') ||
    eventTarget == taskElement.querySelector('p')) {
    taskContent.classList.toggle('checked');
  }

  personalObserver();
  saveLocal();
}

/**
 * ИНИЦИАЛИЗАЦИЯ МОДУЛЯ listContainer
 *
 */
function listContainerInit() {
  removePrototypeTask();
  inputPublish.addEventListener('click', addingTask);
  inputBox.addEventListener('keydown', addingTask);
  listContainer.addEventListener('click', tasksEditor);
}

export { listContainerInit }
