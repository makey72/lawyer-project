const headerFixed = document.querySelector('.header-fixed');

document.addEventListener('scroll', (e) => {
  if (document.documentElement.clientWidth > 1024) {
    pageYOffset === 0 ? headerFixed.classList.remove('show') :
      headerFixed.classList.add('show')
  }
})


