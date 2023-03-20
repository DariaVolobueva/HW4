var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 120,
    loop: true,
    slidesPerGroup: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials__arrows button:last-child",
      prevEl: ".testimonials__arrows button:first-child",
    },
    breakpoints:{
      1300:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    }
});
