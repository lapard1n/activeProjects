"use strict"

const iputBox = document.getElementById('input-box');
const inputButton = document.getElementById('input-button');
const listContainer = document.getElementById('list-container');
const taskPlaceholder = document.getElementById('todo-app-placeholder');
const taskPrototype = document.getElementById('task-prototype');
taskPrototype.removeAttribute('id');
taskPrototype.remove();

// СПОСОБ СОЗДАНИЯ ЭЛЕМЕНТА ЧЕРЕЗ ДОБАВЛЕНИЕ HTML РАЗМЕТКИ
function createTask(str) {
  const task = `
    <article class="task">
      <p></p>
      <div class="task__panel">
        <img class="task__panel-button" src="./img/editDark.svg" alt="Button to change the task.">
        <span></span>
        <img class="task__panel-button" src="./img/trashDark.svg" alt="Button for deleting a task.">
      </div>
    </article>`;
  listContainer.insertAdjacentHTML('afterbegin', task);

  const taskText = document.querySelector('.task p');
  taskText.insertAdjacentText('afterbegin', str);
}

// СПОСОБ СОЗДАНИЯ ЭЛЕМЕНТА ЧЕРЕЗ КОПИРОВАНИЯ УЗЛА
function cloneTask(str) {
  const task = taskPrototype.cloneNode(true);
  const taskText = task.querySelector('p');
  taskText.insertAdjacentText('afterbegin', str);
  listContainer.prepend(task);
}

// РЕГУЛЯРКА И ФУНКЦИЯ ДЛЯ ПРОВЕРКИ ТЕКСТА В ПОЛЕ input
const regExpSpaceCheker = /\S/;
regExpSpaceCheker.test('iputBox.value');
function splitSpace(str) {
  str = str.split(' ').join('');
  return str ? true : false;
}

// СЛУШАТЕЛЬ СОБЫТИЙ ДЛЯ ПРОВЕРКИ ВВОДА В ПОЛЕ input
iputBox.addEventListener('input', () => {
  if ((iputBox.value.length === 0 || !splitSpace(iputBox.value)) && !inputButton.hasAttribute('disabled')) {
    inputButton.setAttribute('disabled', 'disabled');
  }

  if (splitSpace(iputBox.value) && inputButton.hasAttribute('disabled')) {
    inputButton.removeAttribute('disabled');
  }
})

// ФУНКЦИЯ ДЛЯ ДОБАВЛЕНИЯ ТЕКСТА ИЗ input
function addingTask(event) {
  // СПОСОБЫ УДАЛЕНИЯ ВНЕШНИХ ПРОБЕЛОВ У СТРОКИ:
  const regExpDeletionSpaces = (iputBox.value).replace(/^\s+|\s+$/g, '');
  const newString = (iputBox.value).trim();

  if (event.type === 'click' || (event.keyCode === 13 || event.code === 'Enter')) {
    if (!inputButton.hasAttribute('disabled')) {
      cloneTask(iputBox.value);
      iputBox.value = '';
    }

    if ((iputBox.value.length === 0 || !splitSpace(iputBox.value)) && !inputButton.hasAttribute('disabled')) {
      inputButton.setAttribute('disabled', 'disabled');
    }
    taskPlaceholder.textContent = "Keep it up!";
  }
}
inputButton.addEventListener('click', addingTask);
iputBox.addEventListener('keydown', addingTask);
taskPlaceholder.onclick = () => { iputBox.focus() }
