$(".help__container__content").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
});

/* toggle Menu */
const toggle = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__menu");

let showMenu = false;

toggle.addEventListener("click", () => {
  menu.classList.add("is-show");
});

window.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("is-show");
  }
});
