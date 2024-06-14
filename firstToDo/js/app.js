import { showLocal } from "./todoApp/appData.js";
import { inputBoxInit } from "./todoApp/inputBox.js";
import { taskFilterInit } from "./todoApp/taskFilter.js";
import { listContainerInit } from "./todoApp/listContainer.js";
import { listInfoInit } from "./todoApp/listInfo.js";
import { oopsError } from "./pageState/temporaryCrutch.js";

function pageInit() {
  /**
   * УУПС, КАЖЕТСЯ ЧТО-ТО НЕ РАБОТАЕТ...
  */
  oopsError();
}
pageInit();

function appInit() {
  /**
   * ЗАГРУЗКА ДАННЫХ ИЗ localStorage
  */
  document.addEventListener("DOMContentLoaded", showLocal);

  /**
   * УПРАВЛЕНИЕ ВВОДОМ ТЕКСТА В inputBox
  */
  inputBoxInit();

  /**
   * ФИЛЬТРАЦИЯ ЭЛЕМЕНТОВ В listContainer
  */
  taskFilterInit();

  /**
   * СОЗДАНИЕ И ДОБАВЛЕНИЕ ЭЛЕМЕНТА В listContainer ИЗ ТЕКСТА inputBox
  */
  listContainerInit();

  /**
   * ПОДСЧЕТ И ОЧИСТКА tasks, УПРАВЛЕНИЕ АНИМАЦИЕЙ listInfo
  */
  listInfoInit();
}
appInit();
