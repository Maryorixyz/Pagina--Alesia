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


if (window.matchMedia('(max-width:768px)').matches) {
  var swiperMobile = new Swiper('.swiper', {
    slidesPerView: 5, // Cambia a 1 slide por vista en dispositivos móviles
    spaceBetween: 20, // Cambia el espacio entre slides en dispositivos móviles
    // Otras opciones específicas para dispositivos móviles
  });
}