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
      praise = $('.praise'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      closePrs = $('.praise__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closePrs.on('click', function () {
    praise.toggleClass('praise--visible');
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
  
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName:  {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: "Вопрос обязателен",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          praise.toggleClass('praise--visible');
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName:  {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required",
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: "Вопрос обязателен"
      },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          praise.toggleClass('praise--visible');
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName:  {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required",
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          praise.toggleClass('praise--visible');
        }
      });
    }
  });

  $('[type="tel"]').mask('+7 (000) 000-00-00',{placeholder: "+7(___) ___-__-__"});

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.786786, 49.142331],
            zoom: 17,
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom')

});

var check_if_load = false;
$(document).ready(function () {
  $('#map').mouseenter(function () {
    if (!check_if_load) {
      check_if_load = true;
      loadScript("https://api-maps.yandex.ru/2.1/?apikey=855cdcb8-f608-4649-b239-02a21e9bd816&lang=ru_RU", function () {
        ymaps.ready(initMap);
      });
    }
  });
function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
});

});