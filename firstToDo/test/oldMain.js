"use strict"

const inputBox = document.getElementById('input-box');
const inputPublish = document.getElementById('input-publish');
const listContainer = document.getElementById('list-container');
const listInfo = document.getElementById('tasks-info');
const numberCounter = listInfo.querySelector('.todo-app__counter');
const placeHolder = listInfo.querySelector('.todo-app__placeholder');
const clearButton = listInfo.querySelector('.todo-app__clear');

const taskPrototype = document.getElementById('task-prototype');
taskPrototype.removeAttribute('id');
listContainer.innerHTML = '';

// СОХРАНЕНИЕ ДАННЫХ В localstorage:
function saveLocal() {
  localStorage.setItem('tasks', listContainer.innerHTML);
  localStorage.setItem('counter', numberCounter.innerHTML);
  localStorage.setItem('placeholder', placeHolder.textContent);
  localStorage.setItem('clear', clearButton.hasAttribute('disabled'));
}
function showLocal() {
  listContainer.innerHTML = localStorage.getItem('tasks');
  numberCounter.innerHTML = localStorage.getItem('counter');
  placeHolder.textContent = localStorage.getItem('placeholder');
  if (localStorage.getItem('clear') === 'true') {
    clearButton.setAttribute('disabled', 'disabled');
  }
  if (localStorage.getItem('clear') === 'false') {
    clearButton.removeAttribute('disabled');
  }
}
showLocal();

// РАСШИРЕНИЕ ЭЛЕМЕНТА input:
function resizeTextarea() {
  let rowHeight = window.getComputedStyle(inputBox).lineHeight;
  rowHeight = rowHeight.replace(/\D/g, '');

  if (inputBox.scrollHeight / rowHeight <= 5) {
    inputBox.style.height = 'auto';
    inputBox.style.height = inputBox.scrollHeight + 'px';
    inputBox.parentNode.style.height = 5 + (inputBox.scrollHeight) + 'px';
  } else {
    inputBox.style.height = rowHeight * 5 + 'px';
    inputBox.parentNode.style.height = 5 + (rowHeight * 5) + 'px';
  }
}
resizeTextarea();

// ПОДСЧЕТ ВВОДИМЫХ СМВОЛОВ В СТРОКЕ input:
function rowRangeFinder() {
  let rowRange = document.querySelector('.todo-app__range');
  rowRange.textContent = `${inputBox.value.length}/404`;
}
rowRangeFinder();

// ПРОВЕРКА ВВОДА В ПОЛЕ input:
const regExpSpaceCheker = /\S/;
inputBox.addEventListener('input', () => {
  if (!regExpSpaceCheker.test(inputBox.value) && !inputPublish.hasAttribute('disabled')) {
    inputPublish.setAttribute('disabled', 'disabled');
  }

  if (regExpSpaceCheker.test(inputBox.value) && inputPublish.hasAttribute('disabled')) {
    inputPublish.removeAttribute('disabled');
  }

  resizeTextarea();
  rowRangeFinder();
})

// СОЗДАНИЕ ЭЛЕМЕНТА task ЧЕРЕЗ КОПИРОВАНИЯ УЗЛА:
function cloneTask(str) {
  const task = taskPrototype.cloneNode(true);
  const taskText = task.querySelector('p');
  taskText.innerText = str;
  listContainer.prepend(task);
}

// ДОБАВЛЕНИЕ ТЕКСТА ИЗ input:
function addingTask(event) {
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
inputPublish.addEventListener('click', addingTask);
inputBox.addEventListener('keydown', addingTask);

// ОБРАБОТКА СОДЕРЖИМОГО todo-app__info:
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
// window.addEventListener('load', personalObserver);

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ В todo-app__list:
listContainer.addEventListener('click', (event) => {
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
})

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ ДЛЯ todo-app__info:
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

// УПРАВЛЕНИЕ АНИМАЦИЕЙ line-animation:
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

// КРЧ, рассказываю, берешь и оборачиваешь button в родителя, делаешь ему позитионе релативе, и адаптируешь под размеры контента и накладываешь в итоге анимацию поверх буттона, а не внутри него - база
