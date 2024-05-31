/**
 * СОЗДАНИЕ ФИЛЬТРА tasks
 */
function taskFilter() {
  const filterButton = document.querySelector('.todo-app__filter-button');
  const filterButtonImg = filterButton.firstElementChild;
  const filterList = document.querySelector('.todo-app__filter-list');
  const filterListElements = filterList.querySelectorAll('.todo-app__filter-element');

  filterButton.addEventListener('click', () => {
    if (filterList.clientHeight == 0) {
      filterButtonImg.classList.remove('way-down');
      filterButtonImg.classList.add('way-up');

      filterList.style.top = 'calc(100% - 1px)';
      filterList.style.maxHeight = '100px';
    }

    if (filterList.clientHeight != 0) {
      filterButtonImg.classList.remove('way-up');
      filterButtonImg.classList.add('way-down');

      filterList.style.top = '0px';
      filterList.style.maxHeight = '0px';
    }
  })

  filterList.addEventListener('click', () => {
    let eventTarget = event.target;

    if (eventTarget.hasAttribute('data-checked')) {
      console.log('checked');
    }
    if (eventTarget.hasAttribute('data-unchecked')) {
      console.log('unchecked');
    }
  })
}

export { taskFilter };
