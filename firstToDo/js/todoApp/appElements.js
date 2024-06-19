/**
 * Набор элементов todoApp для быстрого доступа:
 */
const inputBox = document.getElementById('input-box');
const inputPublish = document.getElementById('input-publish');
const listContainer = document.getElementById('list-container');
const listInfo = document.getElementById('tasks-info');
const placeHolder = listInfo.querySelector('.todo-app__placeholder');
const clearButton = listInfo.querySelector('.todo-app__clear');

export {
  inputBox,
  inputPublish,
  listContainer,
  listInfo,
  placeHolder,
  clearButton
}
