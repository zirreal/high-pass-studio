document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
  
      renderBullet: function (index, className) {
        return (
          `<span class="'
          ${className}
          '">${index + 1}</span>`
        );
      },
    }
  });

  const buttons = document.querySelectorAll('.swiper-button');

  const removeActive = () => {
    buttons.forEach(btn => {
      btn.classList.remove('swiper-button-active');
    })
  }

  buttons.forEach(item => {
    item.addEventListener('click', (e) => {
      removeActive();
      e.target.classList.add('swiper-button-active');
    })
  })

});