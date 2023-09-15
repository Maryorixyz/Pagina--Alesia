
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


toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `S/.300 <span> / año </span>`;
        // starterPrice1.innerHTML = `S/.300 <span> / año </span>`;
        proPrice.innerHTML = `S/.600 <span> / año </span>`;
        emprePrice.innerHTML = `S/.800 <span> / año </span>`;

    }else{
        starterPrice.innerHTML = `S/.30 <span> / mes </span>`;
        // starterPrice1.innerHTML = `S/.30 <span> / mes </span>`;

        proPrice.innerHTML = `S/.60 <span> / mes </span>`;
        emprePrice.innerHTML = `S/.80 <span> / mes </span>`;

    }
})