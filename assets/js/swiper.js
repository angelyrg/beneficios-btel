const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    // loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

