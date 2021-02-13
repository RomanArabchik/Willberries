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

  for (anchor of anchors) {
    if (anchor) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(anchor);
        let anchorId = this.getAttribute('href');
        console.log(anchorId);
        document.querySelector(anchorId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  }
});
