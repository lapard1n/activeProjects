const headerMenu = document.querySelector('.header__menu');
const headerHeight = document.querySelector('.header').offsetHeight;
const errorWindow = `
  <section class="warning-window">
    <div class="warning-window__message">
      <p>Oops, that feature doesn't work yet... 😸</p>
    </div>
    <span class="warning-window__angle"></span>
  </section>
`;

/**
 * ВОЗВРАЩАЕТ АКТУАЛЬНЫЙ ЭЛЕМЕНТ warning-window
 *
 */
function newErrorWindow() {
  return document.querySelector('.warning-window');
}

/**
 * ПРИ КЛИКЕ СОВЗДАЕТСЯ НОВОЕ ОКНО warning-window
 *
 */
function oopsError() {
  headerMenu.addEventListener('click', (e) => {
    let isLang = e.target.matches('.header__lang span');
    let isTheme = e.target.closest('.header__theme');

    if (isLang || isTheme && !newErrorWindow()) {
      headerMenu.insertAdjacentHTML('beforeend', errorWindow);

      setTimeout(() => {
        newErrorWindow().style.top = `${headerHeight - 10}px`;
        newErrorWindow().style.opacity = '100%';
      }, 0);

      setTimeout(() => {
        newErrorWindow().style.opacity = '0';
        setTimeout(() => {
          newErrorWindow().parentNode.removeChild(newErrorWindow());
        }, 500);
      }, 2000);
    }
  })
}

export { oopsError }
