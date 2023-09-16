const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  delay: 200,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },

  slidesPerView: 5,
  spaceBetween: 0,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    scale: 0.85,
    stretch: 10,
    depth: 0
  },

});