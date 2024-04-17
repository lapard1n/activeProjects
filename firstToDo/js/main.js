"use strict"

const iputBox = document.getElementById('input-box');
const inputPublish = document.getElementById('input-publish');
const listContainer = document.getElementById('list-container');
const listInfo = document.getElementById('tasks-info');
const numberCounter = listInfo.querySelector('.todo-app__counter');
const placeHolder = listInfo.querySelector('.todo-app__placeholder');

const taskPrototype = document.getElementById('task-prototype');
taskPrototype.removeAttribute('id');
listContainer.innerHTML = '';

// СОХРАНЕНИЕ ДАННЫХ В localstorage:
function saveLocal() {
  localStorage.setItem('tasks', listContainer.innerHTML);
  localStorage.setItem('counter', numberCounter.innerHTML);
  localStorage.setItem('placeholder', placeHolder.textContent);
}
function showLocal() {
  listContainer.innerHTML = localStorage.getItem('tasks');
  numberCounter.innerHTML = localStorage.getItem('counter');
  placeHolder.textContent = localStorage.getItem('placeholder');
}
showLocal();

// СОЗДАНИЕ ЭЛЕМЕНТА ЧЕРЕЗ ДОБАВЛЕНИЕ HTML РАЗМЕТКИ:
function createTask(str) {
  const taskText = document.querySelector('.task p');
  const task = `
    <article class="task">
      <p></p>
      <div class="task__panel">
        <img class="task__panel-button" src="./img/editDark.svg" alt="Button to change the task.">
        <img class="task__panel-button" src="./img/trashDark.svg" alt="Button for deleting a task.">
      </div>
    </article>`;

  listContainer.insertAdjacentHTML('afterbegin', task);
  taskText.insertAdjacentText('afterbegin', str);
}

// СОЗДАНИЕ ЭЛЕМЕНТА ЧЕРЕЗ КОПИРОВАНИЯ УЗЛА:
function cloneTask(str) {
  const task = taskPrototype.cloneNode(true);
  const taskText = task.querySelector('p');
  taskText.insertAdjacentText('afterbegin', str);
  listContainer.prepend(task);
}

// РЕГУЛЯРКА И ФУНКЦИЯ ПРОВЕРКИ ТЕКСТА В ПОЛЕ input:
const regExpSpaceCheker = /\S/;
regExpSpaceCheker.test('iputBox.value');
function splitSpace(str) {
  str = str.split(' ').join('');
  return str ? true : false;
}

// СЛУШАТЕЛЬ СОБЫТИЙ ПРОВЕРКИ ВВОДА В ПОЛЕ input:
iputBox.addEventListener('input', () => {
  if ((iputBox.value.length === 0 || !splitSpace(iputBox.value)) && !inputPublish.hasAttribute('disabled')) {
    inputPublish.setAttribute('disabled', 'disabled');
  }

  if (splitSpace(iputBox.value) && inputPublish.hasAttribute('disabled')) {
    inputPublish.removeAttribute('disabled');
  }
})

// ДОБАВЛЕНИЕ ТЕКСТА ИЗ input:
function addingTask(event) {
  if (event.type === 'click' || (event.keyCode === 13 || event.code === 'Enter')) {
    if (!inputPublish.hasAttribute('disabled')) {
      cloneTask(iputBox.value);
      iputBox.value = '';
    }

    if ((iputBox.value.length === 0 || !splitSpace(iputBox.value)) && !inputPublish.hasAttribute('disabled')) {
      inputPublish.setAttribute('disabled', 'disabled');
    }

    personalObserver();
    saveLocal();
  }
}

// СЛУШАТЕЛИ СОБЫТИЙ ДОБАВЛЕНИЯ ТЕКСТА В todo-app__list:
inputPublish.addEventListener('click', addingTask);
iputBox.addEventListener('keydown', addingTask);

//ФУНКЦИЯ ОБРАБОТКИ СОДЕРЖИМОГО todo-app__info:
function personalObserver() {
  let clearButton = listInfo.querySelector('.todo-app__clear');
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
}

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ В todo-app__list:
listContainer.addEventListener('click', (e) => {
  let eventTarget = e.target;
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
})

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ ДЛЯ todo-app__info:
listInfo.addEventListener('click', (e) => {
  let eventTarget = e.target;

  if (eventTarget.matches('.todo-app__placeholder')) {
    iputBox.focus();
  }

  if (eventTarget.matches('.todo-app__clear') && !eventTarget.hasAttribute('disabled')) {
    listContainer.innerHTML = '';

    personalObserver();
    saveLocal();
  }
})

const clearButtonNew = listInfo.querySelector('.todo-app__clear');
clearButtonNew.addEventListener('mouseenter', (event) => {

  if (event.target === clearButtonNew && !event.target.hasAttribute('disabled')) {
    let clearLine = document.createElement('span');
    clearLine.classList.add('line-animation');
    clearLine.style.animation = 'line-animation 500ms forwards';
    clearButtonNew.append(clearLine);
  }
})
listInfo.querySelector('.todo-app__clear').addEventListener('mouseleave', (event) => {
  if (event.target === clearButtonNew) {
    let clearLine = clearButtonNew.querySelectorAll('span');
    clearLine.forEach(element => {
      element.style.animation = 'reverse-line 500ms forwards';
      setTimeout(() => { element.remove(); }, 500);
    })
  }
})

/* USELESS SNIPPETS:
const regExpDeletionSpaces = (iputBox.value).replace(/^\s+|\s+$/g, '');
const newString = (iputBox.value).trim();

let counters = document.querySelectorAll('.todo-app__counter-value');
let textArray = Array.from(counters).map(el => {
  return el.textContent;
})

textArray.forEach((element, index) => {
  let nameElement = element.match(/\b[a-zA-Z]+\b/gi).join('') + '_' + index;
  localStorage.setItem(`${nameElement}`, element);
})
*/
