const dropDownBtn = document.querySelector('.mobile-menu-nav-item__link--drop');
dropDownBtn.addEventListener('click', () => {
  dropDownBtn.classList.toggle('show')
})
const burgerBtn = document.querySelector('.header-burger');
const overlayBurger = document.querySelector('.mobile-menu-overlay');
const burgerMenu = document.querySelector('.mobile-menu');
burgerBtn.addEventListener('click', () => {
  if (!burgerBtn.classList.contains('open')) {
    burgerBtn.classList.add('open');
    overlayBurger.classList.add('show');
    burgerMenu.classList.add('show');
  } else {
    burgerBtn.classList.remove('open');
    overlayBurger.classList.remove('show');
    burgerMenu.classList.remove('show');
  }

})
