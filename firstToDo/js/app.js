import { showLocal } from "./todoApp/appData.js";
import { inputBoxInit } from "./todoApp/inputBox.js";
import { listContainerInit } from "./todoApp/listContainer.js";
import { listInfoInit } from "./todoApp/listInfo.js";

function pageInit() {

}
pageInit();

function appInit() {
  /**
   * ЗАГРУЗКА ДАННЫХ ИЗ localStorage:
  */
  document.addEventListener("DOMContentLoaded", showLocal);

  /**
   * УПРАВЛЕНИЕ ВВОДОМ ТЕКСТА В inputBox:
  */
  inputBoxInit();

  /**
   * СОЗДАНИЕ И ДОБАВЛЕНИЕ ЭЛЕМЕНТА В listContainer ИЗ ТЕКСТА inputBox:
  */
  listContainerInit();

  /**
   * ПОДСЧЕТ И ОЧИСТКА tasks, УПРАВЛЕНИЕ АНИМАЦИЕЙ listInfo:
  */
  listInfoInit();
}
appInit();
