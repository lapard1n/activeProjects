import {
  listContainer,
  inputBox,
  inputPublish
} from "./appElements.js";
import { personalObserver } from "./personalObserver.js";
import {
  resizeTextarea,
  rowRangeFinder,
  inputBoxListener
} from "./inputBox.js";
import {
  taskFiltering,
  refreshFilter
} from "./taskFilter.js";
const taskPrototype = document.getElementById('task-prototype');

/**
 * Удаление прототипа task и атрибута прототипа 'id':
 */
function removePrototypeTask() {
  taskPrototype.removeAttribute('id');
  listContainer.innerHTML = '';
}

/**
 * Создание элемента task через копирования узла:
 *
 * @param {string} str Текст из строки ввода.
 */
function cloneTask(str) {
  const task = taskPrototype.cloneNode(true);
  const taskText = task.querySelector('.task__content p');
  taskText.innerText = str;
  listContainer.prepend(task);
}

/**
 * Добавление нового элемента task в listContainer:
 *
 * @param {object} e Объект события.
 */
function addingTask(e) {
  const regExpSpaceCheker = /\S/;

  if (
    e.type === 'click' ||
    (e.key === 'Enter' || e.code === 'Enter') &&
    !e.shiftKey
  ) {
    e.preventDefault();

    if (!inputPublish.hasAttribute('disabled')) {
      cloneTask(inputBox.value.trim());
      inputBox.parentNode.style.height = '30px';
      inputBox.setAttribute('rows', 1);
      inputBox.value = '';
    }

    if (
      !regExpSpaceCheker.test(inputBox.value) &&
      !inputPublish.hasAttribute('disabled')
    ) {
      inputPublish.setAttribute('disabled', 'disabled');
    }

    if (inputPublish.hasAttribute('disabled')) {
      resizeTextarea(inputBox);
      rowRangeFinder(inputBox.parentElement, inputBox);
    }

    refreshFilter();
    personalObserver();
  }
}

/**
 * Созданиен панели редактирования текста в task:
 *
 * @param {object} e Объект события.
 */
function changingTask(e) {
  const eventTarget = e.target.closest('.task');
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
 * Замена текста из панели редактирования в task:
 *
 * @param {object} e Объект события.
 */
function pasteText(e) {
  const eventTarget = e.target.closest('.task');
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
 * Удаление панели редактирования при загрузке страницы:
 *
 * @event document#DOMContentLoaded
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
 * Делегирование событий для listContainer:
 *
 * @param {object} e Объект события.
 * @fires listContainer#click
 * @fires listContainer#keydown
 */
function tasksEditor(e) {
  const eventTarget = e.target;
  const taskElement = eventTarget.closest('.task');
  const taskContent = taskElement.querySelector('.task__content');

  if (e.type === 'click') {
    if (eventTarget.matches('[data-delete]')) {
      taskElement.classList.add('task-deletion');

      setTimeout(() => {
        taskElement.remove();
        personalObserver();
      }, 500);
    }

    if (eventTarget.matches('[data-change]')) {
      changingTask(e);
    }

    if (eventTarget.matches('.todo-app__row_editor button')) {
      pasteText(e);
    }

    if (
      eventTarget.matches('.task__content') ||
      eventTarget.matches('p')
    ) {
      taskContent.classList.toggle('checked');
      taskContent.classList.toggle('unchecked');
    }

    if (
      (eventTarget.matches('.task__content') ||
        eventTarget.matches('p')) &&
      document.querySelector('.todo-app__filter-element_target').matches('#all') === false
    ) {
      taskElement.classList.toggle('task-deletion');
      setTimeout(() => {
        taskElement.classList.toggle('task-deletion');
        taskFiltering();
        personalObserver();
      }, 500);
    }
  }

  if (
    (e.key === 'Enter' || e.code === 'Enter') &&
    !e.shiftKey &&
    eventTarget.matches('.todo-app__row_editor textarea')
  ) {
    pasteText(e);
  }

  personalObserver();
}

/**
 * Инициализация модуля listContainer:
 */
function listContainerInit() {
  removePrototypeTask();
  inputPublish.addEventListener('click', addingTask);
  inputBox.addEventListener('keydown', addingTask);
  listContainer.addEventListener('click', tasksEditor);
  listContainer.addEventListener('keydown', tasksEditor);
  removeEditors();
}

export { listContainerInit }
