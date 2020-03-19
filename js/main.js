/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  const closeModal = (event) => {
    if (event.target === modal || event.keyCode  === 27);
      modal.classList.remove('modal--visible');
  }
 
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  modal.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  modal.on('click', function (event) {
    if( $(event.target).is('.modal')) {
		modal.removeClass('modal--visible');
		}
  });

  $(document).keydown(function(event){
    if(event.which=='27'){
      modal.removeClass('modal--visible');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('.upbutton').is(':hidden')) {
            $('.upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('.upbutton').stop(true, false).fadeOut('fast'); }
  });
  $('.upbutton').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 17 + bullets.width() +17);
  bullets.css('left', prev.width() +17);

  new WOW().init();  

});