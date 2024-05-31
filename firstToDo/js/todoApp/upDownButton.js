/**
 * СОЗДАНИЕ КНОПКИ СКРОЛЛА СТРАНИЦЫ
 *
 */
function upDownScroll() {
  const wrapper = document.querySelector('.wrapper')
  const todoApp = document.querySelector('.todo-app');
  const scrollButton = document.querySelector('.scroll-arrow');
  const buttonImg = scrollButton.firstElementChild;

  /**
   * ПОЛУЧАЮ СУММУ ВЕРХНИХ ОТСТУПОВ wrapper
   *
   */
  let wrapperStyles = window.getComputedStyle(wrapper);
  let wrapperUpSize = Number(wrapperStyles.marginTop.replace(/\D/g, '')) +
    Number(wrapperStyles.paddingTop.replace(/\D/g, ''));

  /**
   * НАБЛЮДАТЕЛЬ РАЗМЕРА У todoApp
   *
   */
  const listObserver = new ResizeObserver(() => {
    if (todoApp.scrollHeight > (document.documentElement.clientHeight - wrapperUpSize)) {
      scrollButton.style.visibility = 'visible';
      scrollButton.style.opacity = '60%';
    } else {
      scrollButton.style.opacity = '0%';
      setTimeout(() => {
        scrollButton.style.visibility = 'hidden';
      }, 250);
    }
  });
  listObserver.observe(todoApp);

  /**
   * ПЕРЕМЕЩЕНИЕ НА СТАНИЦЕ ПО КЛИКУ
   *
   */
  scrollButton.addEventListener('click', () => {
    if (window.scrollY === 0) {
      window.scroll({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
      buttonImg.classList.remove('way-down');
      buttonImg.classList.add('way-up');
      buttonImg.classList.add('inprocess');
    }

    if (window.scrollY > 0) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      buttonImg.classList.remove('way-up');
      buttonImg.classList.add('way-down');
      buttonImg.classList.add('inprocess');
    }
  });

  /**
   * АНИМАЦИЯ ПОДСВЕЧИВАНИЯ ПРИ НАВЕДЕНИИ
   *
   */
  scrollButton.addEventListener('mouseenter', () => {
    scrollButton.style.opacity = '100%';
  })
  scrollButton.addEventListener('mouseleave', () => {
    scrollButton.style.opacity = '60%';
  })

  /**
   * ПЕРЕМЕЩЕНИЕ НА СТАНИЦЕ ПРИ СКРОЛЛЕ
   *
   */
  window.addEventListener('scroll', () => {
    if (
      window.scrollY === 0 ||
      window.scrollY === document.documentElement.scrollHeight - window.innerHeight
    ) {
      buttonImg.classList.remove('inprocess');
    }

    if (window.scrollY > 0 && !buttonImg.classList.contains('inprocess')) {
      buttonImg.classList.remove('way-down');
      buttonImg.classList.add('way-up');
    }

    if (window.scrollY === 0 && !buttonImg.classList.contains('inprocess')) {
      buttonImg.classList.remove('way-up');
      buttonImg.classList.add('way-down');
    }
  })
}

export { upDownScroll };
