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
import { upDownScroll } from "./upDownButton.js";


/**
 * УДАЛЕНИЕ ПРОТОТИПА task
 *
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

  eventTarget.classList.add('task_editing');
  newRow.classList.add('todo-app__row_editor');
  newInput.value = textItself.innerText;
  newPublish.textContent = 'Edit';
  textElement.append(newRow);

  eventTarget.querySelector('img[data-change]').style.display = 'none';
  textItself.style.display = 'none';

  inputBoxListener(newRow, newInput, newPublish);
  newRow.addEventListener('input', () => inputBoxListener(newRow, newInput, newPublish));
}

/**
 * ЗАМЕНА ТЕКСТА В task
 *
 */
function pasteText(event) {
  const eventTarget = event.target.closest('.task');
  const textItself = eventTarget.querySelector('p');
  const newRow = eventTarget.querySelector('.todo-app__row_editor');
  const newInput = newRow.querySelector('.todo-app__input');
  const newPublish = newRow.querySelector('.todo-app__publish');

  if (!newPublish.hasAttribute('disabled')) {
    textItself.innerText = newInput.value.trim();
    newRow.remove();

    eventTarget.querySelector('img[data-change]').style.display = 'block';
    textItself.style.display = 'block';
    eventTarget.classList.remove('task_editing');
  }
}

/**
 * ВОЗВРАЩЕНИЕ ИЗМЕНЯЕМОГО task В ПЕРВОНАЧАЛЬНОЕ СОСТОЯНИЕ
 *
 */
function removeEditors() {
  document.addEventListener("DOMContentLoaded", () => {
    const mainTasks = listContainer.querySelectorAll('.task_editing');
    mainTasks.forEach(task => {
      task.querySelector('.todo-app__row_editor').remove();
      task.querySelector('p').style.display = 'block';
      task.querySelector('img[data-change]').style.display = 'block';
      task.classList.remove('task_editing');
    });
  });
}

/**
 * ДЕЛЕГИРОВАНИЕ СОБЫТИЙ В listContainer
 *
 */
function tasksEditor(event) {
  let eventTarget = event.target;
  let taskElement = eventTarget.closest('.task');
  let taskContent = taskElement.querySelector('.task__content');

  if (event.type === 'click') {
    if (eventTarget.matches('[data-delete]')) {
      taskElement.classList.add('task-deletion');
      setTimeout(() => {
        taskElement.remove();
        personalObserver();
        saveLocal();
      }, 500);
    }

    if (eventTarget.matches('[data-change]')) {
      changingTask(event);
    }

    if (eventTarget.matches('.todo-app__row_editor button')) {
      pasteText(event);
    }

    if (eventTarget.matches('.task__content') || eventTarget.matches('p')) {
      taskContent.classList.toggle('checked');
    }
  }

  if (
    (event.key === 'Enter' || event.code === 'Enter')
    && !event.shiftKey
    && eventTarget.matches('.todo-app__row_editor textarea')
  ) {
    pasteText(event);
  }

  personalObserver();
  saveLocal();
}

/**
 * ИНИЦИАЛИЗАЦИЯ МОДУЛЯ listContainer И СКРОЛЛА СТАРНИЦЫ
 *
 */
function listContainerInit() {
  removePrototypeTask();
  inputPublish.addEventListener('click', addingTask);
  inputBox.addEventListener('keydown', addingTask);
  listContainer.addEventListener('click', tasksEditor);
  listContainer.addEventListener('keydown', tasksEditor);
  removeEditors();
  upDownScroll();
}

export { listContainerInit }
