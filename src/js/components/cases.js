const casesBtn = document.querySelectorAll('.cases-box-card');
const statePost = {
  1: {
    id: 1,
    title: 'Не захотели вернуть аванс в досудебном порядке, вернули через суд с неустойками и компенсациями',
    mainImg: 'https://static.tildacdn.com/tild3836-3138-4763-b466-336564646666/c08c55b509ce8e8547be.jpg',
    situation: 'Клиент заключила договор на изготовление/доставку/установку мебели, оплатила авансовый платеж. По условиям, после подписания договора, в течение 3 дней организация должна была прислать эскиз мебели для согласования конструкции и комплектации мебели, но время шло, а эскиза так и не было. Тогда клиент самостоятельно обратился в организацию с заявлением о расторжение договора, на что, путем электронного письма, получила отказ в возврате денежных средств со ссылкой на то, что производство уже запущено и денежные средства реализованы.',
    solution: 'Юрист подготовил претензию в порядке досудебного урегулирования, которая была направлена по юридическому адресу заказным письмом. Претензия была получена ответчиками, однако, осталась без ответа. Но наш специалист не опустил руки, было составлено и направлено исковое заявление для решения вопроса уже в судебном порядке. По итогу, после нескольких судебных заседаний и четкой правовой позиции по делу нам удалось добиться удовлетворения исковых требований на общую сумму 49170 рублей. Справедливость восторжествовала!!!',
    images: ['https://static.tildacdn.com/tild3033-3431-4934-a264-353733313165/1.jpg', 'https://static.tildacdn.com/tild6636-3938-4639-b939-373462613730/2.jpg', 'https://static.tildacdn.com/tild3030-6461-4536-b163-333365323935/4.jpg']
  },
  2: {
    id: 2,
    title: 'Не захотели вернуть аванс в досудебном порядке, вернули через суд с неустойками и компенсациями',
    mainImg: 'https://static.tildacdn.com/tild3836-3138-4763-b466-336564646666/c08c55b509ce8e8547be.jpg',
    situation: 'Клиент заключила договор на изготовление/доставку/установку мебели, оплатила авансовый платеж. По условиям, после подписания договора, в течение 3 дней организация должна была прислать эскиз мебели для согласования конструкции и комплектации мебели, но время шло, а эскиза так и не было. Тогда клиент самостоятельно обратился в организацию с заявлением о расторжение договора, на что, путем электронного письма, получила отказ в возврате денежных средств со ссылкой на то, что производство уже запущено и денежные средства реализованы.',
    solution: 'Юрист подготовил претензию в порядке досудебного урегулирования, которая была направлена по юридическому адресу заказным письмом. Претензия была получена ответчиками, однако, осталась без ответа. Но наш специалист не опустил руки, было составлено и направлено исковое заявление для решения вопроса уже в судебном порядке. По итогу, после нескольких судебных заседаний и четкой правовой позиции по делу нам удалось добиться удовлетворения исковых требований на общую сумму 49170 рублей. Справедливость восторжествовала!!!',
    images: ['https://static.tildacdn.com/tild3033-3431-4934-a264-353733313165/1.jpg', 'https://static.tildacdn.com/tild6636-3938-4639-b939-373462613730/2.jpg', 'https://static.tildacdn.com/tild3030-6461-4536-b163-333365323935/4.jpg']
  }
}

const createTemplate = ({title, mainImg, situation, solution, images}) => {
  const img = images.map(im => `<img src='${im}' alt="фотография дела">`).join('');
  return `
    <div class="cases-popup-header">
      <button type="button" class="cases-popup-close btn-reset">
        <svg class="t-popup__close-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 10L1 19" stroke="#d40000" stroke-width="2"></path></svg>
      </button>
      <span class="cases-popup__title">Успешная практика "Защита прав потребителей"</span>
    </div>
    <div class="cases-popup-body">
      <div class="cases-popup-container">
        <p class="cases-popup-body__title">${title}</p>
        <img class="cases-popup-body__img" src='${mainImg}' alt="фотография">
        <div class="cases-popup-body__situation">
          <p><strong>Ситуация:</strong></p>
          <p>${situation}</p>
        </div>
        <div class="cases-popup-body__solution">
          <p><strong>Решение:</strong></p>
          <p>${solution}</p>
        </div>
        <div class="cases-popup-body__img-box">
            ${img}
        </div>
      </div>
    </div>
`
}
casesBtn.forEach(caseBtn => {
  caseBtn.addEventListener('click', e => {
    const div = document.createElement('div');
    div.classList.add('cases-popup');
    div.innerHTML = createTemplate(statePost[caseBtn.dataset.post]);
    div.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(div);
    const closeBtn = document.querySelector('.cases-popup-close');
    closeBtn.addEventListener('click', e => {
      document.querySelector('.cases-popup').remove();
      document.body.style.overflow = 'visible';
    })
  })
})

