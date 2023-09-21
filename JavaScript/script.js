const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");
const emprePrice = document.getElementById("empre-price");


toggler.addEventListener("change", () => {
  if (toggler.checked) {
    starterPrice.innerHTML = `S/.300 <span> / año </span>`;
     proPrice.innerHTML = `S/.600 <span> / año </span>`;
    emprePrice.innerHTML = `S/.800 <span> / año </span>`;

  } else {
    starterPrice.innerHTML = `S/.30 <span> / mes </span>`;
    proPrice.innerHTML = `S/.60 <span> / mes </span>`;
    emprePrice.innerHTML = `S/.80 <span> / mes </span>`;

  }
})

//
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el => observer.observe(el)));


//***NAVBAR FIXED */
window.addEventListener("scroll", function () {
  var divSuperior = document.getElementById("div-Superior");
  var navbar = document.getElementById("header-navbar");
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > divSuperior.offsetHeight) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
  } else {
    navbar.style.position = "static";
  }
});

window.addEventListener("scroll", function () {
  var divSuperior = document.getElementById("div-Superior");
  var navbar = document.getElementById("header-navbar");
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > divSuperior.offsetHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});


/*MENU HAMBURGUESA*/

const botonmenu = document.querySelector(".bar-btn");
const listamenu = document.querySelector(".navbar-list");
const enlacesMenu = document.querySelectorAll(".navbar-list li a");

botonmenu.addEventListener("click", () => {
  listamenu.classList.toggle("aparecemenu");
})

enlacesMenu.forEach(enlace => {
  enlace.addEventListener("click", () => {
    listamenu.classList.remove("aparecemenu");
  });
});