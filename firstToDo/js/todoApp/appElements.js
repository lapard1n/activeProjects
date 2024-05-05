/**
 * ЭЛЕМЕНТЫ todoApp
 *
 */
const inputBox = document.getElementById('input-box');
const inputPublish = document.getElementById('input-publish');
const listContainer = document.getElementById('list-container');
const listInfo = document.getElementById('tasks-info');
const numberCounter = listInfo.querySelector('.todo-app__counter');
const placeHolder = listInfo.querySelector('.todo-app__placeholder');
const clearButton = listInfo.querySelector('.todo-app__clear');
const taskPrototype = document.getElementById('task-prototype');

export {
  inputBox,
  inputPublish,
  listContainer,
  listInfo,
  numberCounter,
  placeHolder,
  clearButton,
  taskPrototype
}
