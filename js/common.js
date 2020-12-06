$(function () {
  $(window).on('load scroll resize', function () {
    if ($(this).scrollTop() >= $('.intro, .gellery-section, .states').height() / 2) {
      $('.callback-bt').addClass('active');
    } else {
      $('.callback-bt').removeClass('active');
    }

    if ($(this).scrollTop() >= $('.intro, .gellery-section, .states').height() / 3) {
      $('.header').addClass('hide');
    } else {
      $('.header').removeClass('hide');
    }

    if ($(this).scrollTop() >= $('.intro, .gellery-section, .states').height() / 2) {
      $('.header').addClass('active');
      $('.header__nav').addClass('scroll-active');
      $('.header').removeClass('hide');
    } else {
      $('.header').removeClass('active');
      $('.header__nav').removeClass('scroll-active');
    }

    if (window.innerWidth > 1024) {
      $('.header__nav').removeClass('active');
      $('.header__burger-menu').children().removeClass('active');
    }
  });

  $('.questions__accordion-head').on('click', function () {
    $('.questions__accordion-body').slideUp();
    $('.questions__accordion-head-icon').removeClass('avtive');
    $(this).next('.questions__accordion-body').slideDown();
    $(this).children('.questions__accordion-head-icon').addClass('avtive');
  });

  $(window).on('scroll', function () {
    var yPos = -($(this).scrollTop() / 10);
    var coords = '50%' + yPos + 'px';
    $('.intro').css('backgroundPosition', coords);
  });

  $('.header__nav-link, .footer__menu-link').on('click', function () {
    var hash = $(this).attr('href');
    var slisedNum = hash.indexOf('#');
    var slisedHash = hash.slice(slisedNum);
    var target = $(slisedHash);
    $('.header__nav').removeClass('active');
    $('.header__burger-menu').children().removeClass('active');
    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: target.offset().top - $('.header').height()
    }, {
      duration: 1500
    });
  });

  $('.header__burger-menu').on('click', function () {
    $(this).children().toggleClass('active');
    $('.header__nav').toggleClass('active');
  });

  $.mask.definitions['9'] = false;
  $.mask.definitions['5'] = "[0-9]";
  $('[type="tel"]').mask("+998 (55) 5555555");

  $('.sale__form').on('submit', function (e) {
    e.preventDefault();
  });

  $('#hidden-content2 .modal__form').on('submit', function (e) {
    e.preventDefault();
  });

  $('#hidden-content .modal__form').on('submit', function (e) {
    e.preventDefault();
  });

  $('.sale__form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength: 11
      },
      phone: {
        required: true,
      }
    },
    submitHandler: function () {
      $('.sale__form-inp[type="text"]').val('');
      $('.sale__form-inp[type="tel"]').val('');
      Swal.fire({
        title: 'Заявка отправлена!',
        text: "Мы получили вашу заявку и в ближайшее время свяжемся с вами!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
    }
  });

  $('#hidden-content2 .modal__form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength: 11
      },
      phone: {
        required: true,
      },
      message: {
        required: true,
        minlength: 10,
        maxlength: 100
      }
    },
    submitHandler: function () {
      $.fancybox.close();
      $('.modal__form-inp[type="text"]').val('');
      $('.modal__form-inp[type="tel"]').val('');
      $('.modal__form-textare').val('');
      Swal.fire({
        title: 'Заявка отправлена!',
        text: "Мы получили вашу заявку и в ближайшее время свяжемся с вами!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
    }
  });

  $('#hidden-content .modal__form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength: 11
      },
      phone: {
        required: true,
      },
    },
    submitHandler: function () {
      $.fancybox.close();
      $('.modal__form-inp[type="text"]').val('');
      $('.modal__form-inp[type="tel"]').val('');
      Swal.fire({
        title: 'Заявка отправлена!',
        text: "Мы получили вашу заявку и в ближайшее время свяжемся с вами!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
    }
  });

  $('.videos__video-preview-icon').on('click', function () {
    $(this).next('.videos__video-preview').addClass('active');
    $(this).addClass('active');
  });

  $('[data-fancybox="gallery"]').fancybox({
    toolbar: false,
    smallBtn: true,
    protect: true,
    loop: true,
    keyboard: true
  });

  $('.reviews__slider').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.paretners__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

let mask = document.querySelector('.mask');
document.body.classList.add('active');

window.addEventListener('load', function () {
  mask.classList.add('hide');
  document.body.classList.remove('active');
  setTimeout(function () {
    mask.remove();
  }, 600);

  AOS.init();
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 700,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
});

/* Translate */
const googleTranslateConfig = {
  lang: "ru",
};

function TranslateInit() {
  let code = TranslateGetCode();

  if (code == googleTranslateConfig.lang) {
    TranslateClearCookie();
  }
  new google.translate.TranslateElement({
    pageLanguage: googleTranslateConfig.lang,
  });
  $('[data-google-lang]').on('click', function () {
    TranslateSetCookie($(this).attr("data-google-lang"))
    window.location.reload();
  });
}

function TranslateGetCode() {
  let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
  return lang.substr(-2);
}

function TranslateClearCookie() {
  $.cookie('googtrans', null);
  $.cookie("googtrans", null, {
    domain: "." + document.domain,
  });
}

function TranslateSetCookie(code) {
  $.cookie('googtrans', "/auto/" + code);
  $.cookie("googtrans", "/auto/" + code, {
    domain: "." + document.domain,
  });
}

/* Supported WebP */
function canUseWebp() {
  let elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  return false;
}

window.onload = function () {
  let images = document.querySelectorAll('[data-bg]');
  for (let i = 0; i < images.length; i++) {
    let image = images[i].getAttribute('data-bg');
    images[i].style.backgroundImage = 'url(' + image + ')';
  }

  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

  if (canUseWebp() || firefoxVer >= 65) {
    let imagesWebp = document.querySelectorAll('[data-bg-webp]');
    for (let i = 0; i < imagesWebp.length; i++) {
      let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
      imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  }
};

/* Timer */
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

var countDownFunc = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 *60)) / 1000);

  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
}, 1000);