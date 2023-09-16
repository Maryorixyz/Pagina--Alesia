
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


const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
// const starterPrice1 = document.getElementById("starter-price1");

const proPrice = document.getElementById("pro-price");
const emprePrice = document.getElementById("empre-price");


toggler.addEventListener("change", () => {
  if (toggler.checked) {
    starterPrice.innerHTML = `S/.300 <span> / año </span>`;
    // starterPrice1.innerHTML = `S/.300 <span> / año </span>`;
    proPrice.innerHTML = `S/.600 <span> / año </span>`;
    emprePrice.innerHTML = `S/.800 <span> / año </span>`;

  } else {
    starterPrice.innerHTML = `S/.30 <span> / mes </span>`;
    // starterPrice1.innerHTML = `S/.30 <span> / mes </span>`;

    proPrice.innerHTML = `S/.60 <span> / mes </span>`;
    emprePrice.innerHTML = `S/.80 <span> / mes </span>`;

  }
})



// // JavaScript para redirigir a WhatsApp cuando se hace clic en el botón
// document.getElementById("enlace-whatsapp").addEventListener("click", function () {
//   var telefono = "917083624"; // Reemplaza esto con tu número de WhatsApp
//   var mensaje = "Hola, estoy interesado en el Plan de Servicio Emprendedor"; // Mensaje predeterminado
//   var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);

//   // window.location.href = url;
//   window.open(url, "_blank");
// });


// JavaScript para abrir WhatsApp en una nueva pestaña con mensajes diferentes
document.getElementById("btn-wsp-1").addEventListener("click", function () {
  abrirWhatsApp("917083624", "Hola, estoy interesado en el Plan de Servicio Emprendedor 😀");
});

document.getElementById("btn-wsp-2").addEventListener("click", function () {
  abrirWhatsApp("917083624", "Hola, estoy interesado en el Plan de Servicio Empresario 😀😀");
});

document.getElementById("btn-wsp-3").addEventListener("click", function () {
  abrirWhatsApp("917083624", "Hola, estoy interesado en el Plan de Servicio Ejecutivo 😀😀😀");
});

function abrirWhatsApp(telefono, mensaje) {
  var url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + encodeURIComponent(mensaje);

  window.open(url, "_blank");
}

