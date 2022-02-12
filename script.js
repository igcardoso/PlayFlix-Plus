function channels() {
  window.alert('Conteúdo de transmissão Ao vivo dos canais do YouTube oficiais de TV online.');
}

function trailer(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';
  else
    document.getElementById(el).style.display = 'none';
}

function titleTrailerCartais(el) {
  var display = document.getElementById(el).style.display;
  if (display == "block")
    document.getElementById(el).style.display = 'none';
  else
    document.getElementById(el).style.display = 'block';
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});