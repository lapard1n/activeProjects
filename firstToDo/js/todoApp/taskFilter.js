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

  })

  filterListElements.forEach(el => {
    el.addEventListener('click', () => {
      let newTarget = event.target;
      let lastTarget = document.querySelector('.todo-app__filter-row span');
      let setTarget = newTarget.cloneNode(true);
      console.log(setTarget);

      setTarget.classList.remove('todo-app__filter-element');
      setTarget.classList.add('todo-app__filter-element_target');
      lastTarget.replaceWith(setTarget);

      lastTarget.classList.remove('todo-app__filter-element_target');
      lastTarget.classList.add('todo-app__filter-element');
      newTarget.replaceWith(lastTarget);
    })
  })
}

export { taskFilter };
