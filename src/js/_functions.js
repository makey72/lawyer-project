// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
//import {mobileCheck} from "./functions/mobile-check";


// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
//import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
//import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';

const modal = new GraphModal();

// Реализация табов
//import GraphTabs from 'graph-tabs';
//const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Подключение анимаций по скроллу
 import AOS from 'aos';
 AOS.init();


// Подключение параллакса блоков при скролле
//import Rellax from 'rellax';
//const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);


import {validateForms} from "./functions/validate-forms";

const rules1 = [
  {
    ruleSelector: '.input-name1',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel1',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];
const rules2 = [
  {
    ruleSelector: '.input-name2',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel2',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];
const rules3 = [
  {
    ruleSelector: '.input-name3',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel3',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.form-textarea3',
    rules: [
      {
        rule: 'minLength',
        value: 0,
      }
    ]
  },
];
const rules4 = [
  {
    ruleSelector: '.input-name4',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel4',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];
const rules5 = [
  {
    ruleSelector: '.input-name5',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel5',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.form-textarea5',
    rules: [
      {
        rule: 'minLength',
        value: 0,
      }
    ]
  },
];
const rules6 = [
  {
    ruleSelector: '.input-name6',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя!'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel6',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

import Swal from './functions/sweetalert2.js';
const afterForm = () => {
  document.querySelector('.js-modal-close').click();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Форма успешно отправлена!',
    showConfirmButton: false,
    timer: 1500
  })
};

validateForms('.form1', rules1, afterForm);
validateForms('.form2', rules2, afterForm);
validateForms('.form3', rules3, afterForm);
validateForms('.form4', rules4, afterForm);
validateForms('.form5', rules5, afterForm);
validateForms('.form6', rules6, afterForm);



// CommonJS


