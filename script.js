// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 15,
//     strech: 0,
//     depth: 300,
//     modifier: 1,
//     slideShadows: true,
//   },
//   loop: true,
// });

let sections = document.querySelectorAll('section');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 900;
    let height = sec.offsetHeight + 800;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
  })
}