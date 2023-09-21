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


// JavaScript para abrir WhatsApp en una nueva pestaña con mensajes diferentes
document.getElementById("btn-wsp-1").addEventListener("click", function () {
  abrirWhatsApp("978346601", "Hola, estoy interesado en el Plan de Servicio Emprendedor 😀");
});

document.getElementById("btn-wsp-2").addEventListener("click", function () {
  abrirWhatsApp("978346601", "Hola, estoy interesado en el Plan de Servicio Empresario 😀😀");
});

document.getElementById("btn-wsp-3").addEventListener("click", function () {
  abrirWhatsApp("978346601", "Hola, estoy interesado en el Plan de Servicio Ejecutivo 😀😀😀");
});

function abrirWhatsApp(telefono, mensaje) {
  var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}

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