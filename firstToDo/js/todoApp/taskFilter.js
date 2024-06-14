const appFilter = document.querySelector('.todo-app__filter');
const filterButton = appFilter.querySelector('.todo-app__filter-button');
const filterButtonImg = filterButton.firstElementChild;
const filterList = appFilter.querySelector('.todo-app__filter-list');

/**
 * АНИМАЦИЯ ПОЯВЛЕНИЯ СПИСКА filterList И ПЕРЕВОРОТА СТРЕЛКИ filter
 *
 */
function filterAnimation() {
  filterButton.addEventListener('click', () => {
    if (filterList.clientHeight == 0) {
      filterListOpening();
    }

    if (filterList.clientHeight != 0) {
      filterListClosing();
    }
  })
}

function filterListOpening() {
  filterButtonImg.classList.remove('way-down');
  filterButtonImg.classList.add('way-up');

  filterList.style.top = 'calc(100% - 1px)';
  filterList.style.maxHeight = '100px';
}

function filterListClosing() {
  filterButtonImg.classList.remove('way-up');
  filterButtonImg.classList.add('way-down');

  filterList.style.top = '0px';
  filterList.style.maxHeight = '0px';
}

/**
 * ЗАМЕНА ЭЛЕМЕНТОВ ИЗ СПИСКА filterList В ПОЛЕ filterRow
 *
 */
function filterSwap() {
  filterList.addEventListener('click', (e) => {
    let selectedItem = e.target;

    if (selectedItem.matches('.todo-app__filter-element')) {
      let inTheRow = appFilter.querySelector('.todo-app__filter-row span');
      let rowData = {
        id: inTheRow.getAttribute('id'),
        text: inTheRow.textContent
      };

      inTheRow.setAttribute('id', selectedItem.getAttribute('id'));
      inTheRow.textContent = selectedItem.textContent;
      selectedItem.setAttribute('id', rowData.id);
      selectedItem.textContent = rowData.text;
    }

    let filterListArray = Array.from(filterList.children);
    filterListArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
    let documentFragment = document.createDocumentFragment();

    filterListArray.forEach(element => {
      documentFragment.append(element);
    });
    filterList.replaceChildren(documentFragment);

    setTimeout(() => {
      filterListClosing();
    }, 400);
  })
}

/**
 * ФИЛЬТРАЦИЯ tasks ПО КЛАССУ task__content checked/task__content
 *
 */
function taskFiltering() {
  console.log('тут будет код');
}

/**
 * ИНИЦИАЛИЗАЦИЯ МОДУЛЯ taskFilter
 *
 */
function taskFilterInit() {
  filterAnimation();
  filterSwap();
  taskFiltering();
}

export { taskFilterInit };
