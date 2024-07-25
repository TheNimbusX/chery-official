////////////////////////////////таймер

document.addEventListener("DOMContentLoaded", function () {
  // конечная дата
  const deadline = new Date(2024, 07, 01);
  // id таймера
  let timerId = null;
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $days.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
    $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
    $minutes.dataset.title = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector(".days");
  const $hours = document.querySelector(".hours");
  const $minutes = document.querySelector(".mins");
  const $seconds = document.querySelector(".secs");
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 500);
});

////////////////////////////////////////////////swiper
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 13,
  slidesPerView: 7,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 15,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    530: {
      loop: false,
      slidesPerView: 4.5,
       scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    670: {
      loop: false,
      slidesPerView: 5,
       scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },

    769: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      slidesPerView: 5.1,
      mousewheel: true,
      spaceBetween: 15,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
892: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      slidesPerView: 6,
      mousewheel: true,
      spaceBetween: 15,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },


    1024: {
       enabled: true,
      direction: "horizontal",
      loop: false,
      slidesPerView: 7,
      mousewheel: true,
      spaceBetween: 15,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
  },
  

  mousewheel: true,
  keyboard: true,
});

const swiper2 = new Swiper(".mySwiper2", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 13,
  slidesPerView: 7,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 15,
      slidesPerView: 2.7,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    530: {
      loop: false,
      slidesPerView: 4.5,
       scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    670: {
      loop: false,
      slidesPerView: 5,
       scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },

    769: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3.5,
      mousewheel: true,
      spaceBetween: 55,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
892: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      slidesPerView: 4,
      mousewheel: true,
      spaceBetween: 75,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },


    1024: {
       enabled: true,
      direction: "horizontal",
      loop: false,
      slidesPerView: 4.6,
      mousewheel: true,
      spaceBetween: 105,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
  },
  

  mousewheel: true,
  keyboard: true,
});

const swiper3 = new Swiper(".mySwiper3", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper4 = new Swiper(".mySwiper4", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper5 = new Swiper(".mySwiper5", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper6 = new Swiper(".mySwiper6", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper7 = new Swiper(".mySwiper7", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper8 = new Swiper(".mySwiper8", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper9 = new Swiper(".mySwiper9", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper10 = new Swiper(".mySwiper10", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper11 = new Swiper(".mySwiper11", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper12 = new Swiper(".mySwiper12", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper13 = new Swiper(".mySwiper13", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper14 = new Swiper(".mySwiper14", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

const swiper15 = new Swiper(".mySwiper15", {
  enabled: false,
  breakpoints: {
    360: {
      enabled: true,
      direction: "horizontal",
      loop: false,
      mousewheel: true,
      keyboard: true,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    768: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      slidesPerView: 3,
      mousewheel: true,
      spaceBetween: 0,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        dragSize: 64,
        el: ".swiper-scrollbar2",
      },
    },
    1024: {
      enabled: false,
      direction: "horizontal",
      loop: false,
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar2",
      },
    },
  },
});

///////////////////////////////////////////////fancybox

Fancybox.bind("[data-fancybox]", {});

//////////////////////////////////////////////select2

$(document).ready(function () {
  $(".js-example-basic-single").select2();
});

$(document).ready(function () {
  $(".js-example-basic-single2").select2();
});

///////////////////////////////////////////mask

IMask(document.getElementById("tel"), {
  mask: "+{7}(000)000-00-00",
});

IMask(document.getElementById("tel2"), {
  mask: "+{7}(000)000-00-00",
});

IMask(document.getElementById("tel3"), {
  mask: "+{7}(000)000-00-00",
});

IMask(document.getElementById("telPopup1"), {
  mask: "+{7}(000)000-00-00",
});

IMask(document.getElementById("telPopup2"), {
  mask: "+{7}(000)000-00-00",
});

IMask(document.getElementById("telPopup3"), {
  mask: "+{7}(000)000-00-00",
});


////////////////////////////////////yandex api

// var viewport = {
//   width: $(window).width(),
//   height: $(window).height(),
// };
// var width = viewport.width;
// var height = viewport.height;

// if (width > 768) {
//   var zoomval = 15;
//   var pin = [55.575047, 37.589261];
// } else {
//   var zoomval = 14;
//   var pin = [55.574047, 37.589261];
// }

// ymaps.ready(init);
// function init() {
//   var myMap = new ymaps.Map("map", {
//     center: pin,
//     zoom: zoomval,
//     controls: [],
//   });
//   var placemark = new ymaps.Placemark(
//     [55.581047, 37.589261],
//     {
//       hintContent: "Omoda",
//     },
//     {
//       iconLayout: "default#image",
//       iconImageHref: "./images/pin.png",
//       iconImageSize: [65, 85],
//       iconImageOffset: [-16, -16],
//       preset: "islands#green",
//     }
//   );

//   myMap.geoObjects.add(placemark);
//   myMap.controls.remove("geolocationControl"); // удаляем геолокацию
//   myMap.controls.remove("searchControl"); // удаляем поиск
//   myMap.controls.remove("trafficControl"); // удаляем контроль трафика
//   myMap.controls.remove("typeSelector"); // удаляем тип
//   myMap.controls.remove("rulerControl"); // удаляем контроль правил
//   myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
// }

///////////////////////////////////// arrow-show-more

document.getElementById("arrow-more").onclick = function () {
  (document.getElementById("option-1").className = "model-card-option-text"),
    (document.getElementById("option-2").className = "model-card-option-text"),
    (document.getElementById("option-3").className = "model-card-option-text"),
    (document.getElementById("arrow-more").className = "visually-hidden"),
    (document.getElementById("do").className = "visually-hidden");
};

document.getElementById("arrow-more2").onclick = function () {
  (document.getElementById("option-12").className = "model-card-option-text"),
    (document.getElementById("option-22").className = "model-card-option-text"),
    (document.getElementById("option-32").className = "model-card-option-text"),
    (document.getElementById("arrow-more2").className = "visually-hidden"),
    (document.getElementById("do2").className = "visually-hidden");
};

document.getElementById("arrow-more3").onclick = function () {
  (document.getElementById("option-13").className = "model-card-option-text"),
    (document.getElementById("option-23").className = "model-card-option-text"),
    (document.getElementById("option-33").className = "model-card-option-text"),
    (document.getElementById("arrow-more3").className = "visually-hidden"),
    (document.getElementById("do3").className = "visually-hidden");
};

document.getElementById("arrow-more4").onclick = function () {
  (document.getElementById("option-14").className = "model-card-option-text"),
    (document.getElementById("option-24").className = "model-card-option-text"),
    (document.getElementById("option-34").className = "model-card-option-text"),
    (document.getElementById("arrow-more4").className = "visually-hidden"),
    (document.getElementById("do4").className = "visually-hidden");
};

document.getElementById("arrow-more5").onclick = function () {
  (document.getElementById("option-15").className = "model-card-option-text"),
    (document.getElementById("option-25").className = "model-card-option-text"),
    (document.getElementById("option-35").className = "model-card-option-text"),
    (document.getElementById("arrow-more5").className = "visually-hidden"),
    (document.getElementById("do5").className = "visually-hidden");
};

document.getElementById("arrow-more6").onclick = function () {
  (document.getElementById("option-16").className = "model-card-option-text"),
    (document.getElementById("option-26").className = "model-card-option-text"),
    (document.getElementById("option-36").className = "model-card-option-text"),
    (document.getElementById("arrow-more6").className = "visually-hidden"),
    (document.getElementById("do6").className = "visually-hidden");
};

document.getElementById("arrow-more7").onclick = function () {
  (document.getElementById("option-17").className = "model-card-option-text"),
    (document.getElementById("option-27").className = "model-card-option-text"),
    (document.getElementById("option-37").className = "model-card-option-text"),
    (document.getElementById("arrow-more7").className = "visually-hidden"),
    (document.getElementById("do7").className = "visually-hidden");
};

document.getElementById("arrow-more8").onclick = function () {
  (document.getElementById("option-18").className = "model-card-option-text"),
    (document.getElementById("option-28").className = "model-card-option-text"),
    (document.getElementById("option-38").className = "model-card-option-text"),
    (document.getElementById("arrow-more8").className = "visually-hidden"),
    (document.getElementById("do8").className = "visually-hidden");
};

document.getElementById("arrow-more9").onclick = function () {
  (document.getElementById("option-19").className = "model-card-option-text"),
    (document.getElementById("option-29").className = "model-card-option-text"),
    (document.getElementById("option-39").className = "model-card-option-text"),
    (document.getElementById("arrow-more9").className = "visually-hidden"),
    (document.getElementById("do9").className = "visually-hidden");
};

document.getElementById("arrow-more10").onclick = function () {
  (document.getElementById("option-110").className = "model-card-option-text"),
    (document.getElementById("option-210").className =
      "model-card-option-text"),
    (document.getElementById("option-310").className =
      "model-card-option-text"),
    (document.getElementById("arrow-more10").className = "visually-hidden"),
    (document.getElementById("do10").className = "visually-hidden");
};

document.getElementById("arrow-more11").onclick = function () {
  (document.getElementById("option-111").className = "model-card-option-text"),
    (document.getElementById("option-211").className =
      "model-card-option-text"),
    (document.getElementById("option-311").className =
      "model-card-option-text"),
    (document.getElementById("arrow-more11").className = "visually-hidden"),
    (document.getElementById("do11").className = "visually-hidden");
};

document.getElementById("arrow-more12").onclick = function () {
  (document.getElementById("option-112").className = "model-card-option-text"),
    (document.getElementById("option-212").className =
      "model-card-option-text"),
    (document.getElementById("option-312").className =
      "model-card-option-text"),
    (document.getElementById("arrow-more12").className = "visually-hidden"),
    (document.getElementById("do12").className = "visually-hidden");
};

document.getElementById("arrow-more13").onclick = function () {
  (document.getElementById("option-113").className = "model-card-option-text"),
    (document.getElementById("option-213").className =
      "model-card-option-text"),
    (document.getElementById("option-313").className =
      "model-card-option-text"),
    (document.getElementById("arrow-more13").className = "visually-hidden"),
    (document.getElementById("do13").className = "visually-hidden");
};
////////////////////////////////////////////// бургер меню
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const blackWrapper = document.querySelector("#blackWrapper");
const headerTel = document.querySelector("#headerTel");

// Клонируем меню, чтобы задать стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);
hamb.addEventListener("click", bgRecolor);

function bgRecolor(e) {
  e.preventDefault();
  blackWrapper.classList.toggle("bgWhite");
  headerTel.classList.toggle("headerTelBlack");
}

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}
const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}






//////lazy
$(window).on("scroll", function () {
  lazyLoad.img(5);
  lazyLoad.bg(30);
});

if ($(window).scrollTop() > 10) {
  lazyLoad.img(5);
  lazyLoad.bg(30);
} 