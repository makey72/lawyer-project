const page = document.querySelector('.page__body');
const ready = () => {
  setTimeout(()=>{
    document.body.style.opacity = '1';
    console.log(1)
  }, 200)
}
document.addEventListener('DOMContentLoaded', ready);

