document.addEventListener('DOMContentLoaded',()=>{
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    }
  });

  let anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      console.log(anchor);
      let anchorId = anchor.getAttribute('href');
      console.log(anchorId);
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});
