const widget = document.querySelector('.widget-communication');
const widgetBtn = document.querySelector('.widget-communication__btn');

widgetBtn.addEventListener('click', ()=>{
  widget.classList.toggle('show');
})
