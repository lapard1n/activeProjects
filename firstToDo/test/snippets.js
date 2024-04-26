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

// ОБРЕЗАНИЕ ВНЕШНИХ ПРОБЕЛОВ СТРОКИ
const regExpDeletionSpaces = (iputBox.value).replace(/^\s+|\s+$/g, '');
const newString = (iputBox.value).trim();

// ИМЕНОВАНИЕ ДАННЫХ ПО ИХ СОДЕРЖАНИЮ И ИНДЕКСУ В localstorage:
let counters = document.querySelectorAll('.todo-app__counter-value');
let textArray = Array.from(counters).map(el => {
  return el.textContent;
})
textArray.forEach((element, index) => {
  let nameElement = element.match(/\b[a-zA-Z]+\b/gi).join('') + '_' + index;
  localStorage.setItem(`${nameElement}`, element);
})

// ПРОВЕРКА ТЕКСТА В ПОЛЕ input:
function splitSpace(str) {
  str = str.split(' ').join('');
  console.log(str);
  return str ? true : false;
}
