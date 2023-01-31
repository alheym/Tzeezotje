import './_swiper.scss';

var swiper = new Swiper(".swiperText", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  }
});
