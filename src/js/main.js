document.addEventListener("DOMContentLoaded", () => {
  // TABS
  const tabsButtons = document.querySelectorAll(".services-tabs__btn");
  const worksContent = document.querySelectorAll(".services-works__wrapper");
  const worksContentInside = document.querySelectorAll(".services-works__inside");
  const itemsContent = document.querySelectorAll(".services__items");
  const itemsContentInside = document.querySelectorAll(".services__items-inside");
  const block = document.querySelector(".services__items-two");
  const promo = document.querySelector(".services-promo__block");

  const removeClass = (items, activeClass) => {
    items.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const removeActiveClasses = () => {
    // tabsButtons.forEach(item => {
    //     item.classList.remove('services-tabs__btn-active')
    // });
    removeClass(tabsButtons, "services-tabs__btn-active");
    removeClass(worksContent, "services-works__wrapper-active");
    removeClass(itemsContent, "services__items-active");
    removeClass(worksContentInside, "services-works__inside-active");
    removeClass(itemsContentInside, "services__items-inside-active");
    // worksContent.forEach(item => {
    //     item.classList.remove('services-works__wrapper-active');
    // });
    // itemsContent.forEach(item => {
    //     item.classList.remove('services__items-active');
    // });
    // worksContentInside.forEach(item => {
    //     item.classList.remove('services-works__inside-active');
    // });
    // itemsContentInside.forEach(item => {
    //     item.classList.remove('services__items-inside-active');
    // });
    promo.classList.remove("change-position");
  };

  tabsButtons.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const path = e.target.dataset.btn;
      removeActiveClasses();

      document.querySelector(`[data-works="${path}"]`).classList.add("services-works__wrapper-active");
      document.querySelector(`[data-items="${path}"]`).classList.add("services__items-active");
      document.querySelector(`[data-btn="${path}"]`).classList.add("services-tabs__btn-active");

      if (
        document.querySelector(`[data-works="${path}"]`).classList.contains("services-works__wrapper-active")
      ) {
        setTimeout(() => {
          worksContentInside.forEach((item) => {
            item.classList.add("services-works__inside-active");
          });
        }, 10);
      }

      if (
        document.querySelector(`[data-items="${path}"]`).classList.contains("services__items-active")
      ) {
        setTimeout(() => {
          itemsContentInside.forEach((item) => {
            item.classList.add("services__items-inside-active");
          });
        }, 10);
      }

      // mini-promo-position

      if (window.innerWidth <= 994) {
        if (block.classList.contains("services__items-active")) {
          promo.classList.add("change-position");
        }
      }
    });
  });

  // CLOSE MAP-INFO
  const closeBtn = document.querySelector(".close-btn");
  const info = document.querySelector(".contacts__map-info");

  closeBtn.addEventListener("click", () => {
    info.classList.remove("contacts__map-info-active");
  });

  // OPEN SEARCH INPUT
  const searchButton = document.querySelector(".search-form__btn--994");
  const searchInput = document.querySelector(".search-form__open");
  const closeSearchBtn = document.querySelector(".search-form__close-btn");

  const activateSearch = () => {
    searchInput.classList.add("active");
    searchButton.classList.add("hide");
    document.querySelector(".header__phone").classList.add("hide");
  };

  const deactivateSearch = () => {
    searchInput.classList.remove("active");
    searchButton.classList.remove("hide");
    document.querySelector(".header__phone").classList.remove("hide");
  };

  searchButton.addEventListener("click", () => {
    if (window.innerWidth <= 994) {
      activateSearch();

      closeSearchBtn.addEventListener("click", () => {
        deactivateSearch();
      });
    }

    if (window.innerWidth <= 455) {
      activateSearch();
      document.querySelector(".header__logo").classList.add("hide");

      closeSearchBtn.addEventListener("click", () => {
        searchInput.classList.remove("active");
        setTimeout(() => {
          searchButton.classList.remove("hide");
          document.querySelector(".header__phone").classList.remove("hide");
          document.querySelector(".header__logo").classList.remove("hide");
        }, 50);
      });
    }
  });

  // OPEN BURGER MENU
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const menuCloseBtn = document.querySelector(".menu__close-btn");

  burger.addEventListener("click", () => {
    burger.classList.add("burger--active");
    menu.classList.add("menu--active");
  });

  menuCloseBtn.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
  });
});