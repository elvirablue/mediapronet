document.addEventListener("DOMContentLoaded",() => {
  // init Swiper:

  let mainSwiper = new Swiper('.swiper-main', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })

  let tabSwiper = new Swiper('.swiper-tabs', {
    slidesPerView: 'auto',
    freeMode: true,
    simulateTouch: false,
  })
})
