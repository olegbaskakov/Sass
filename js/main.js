document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const closeModal = document.querySelector('.modal__popup');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });


  console.log(event);

  

  closeBtn.addEventListener('click', switchModal);
  closeModal.addEventListener('click', switchModal);
  

});