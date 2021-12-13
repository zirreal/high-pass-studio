document.addEventListener('DOMContentLoaded', () => {

    // TABS
    const tabsButtons = document.querySelectorAll('.services-tabs__btn');
    const worksContent = document.querySelectorAll('.services-works__wrapper');
    const worksContentInside = document.querySelectorAll('.services-works__inside');
    const itemsContent = document.querySelectorAll('.services__items');
    const itemsContentInside = document.querySelectorAll('.services__items-inside');

    const removeActiveClass = () => {
        tabsButtons.forEach(item => {
            item.classList.remove('services-tabs__btn-active')
        })
        worksContent.forEach(item => {
            item.classList.remove('services-works__wrapper-active');
        })
        itemsContent.forEach(item => {
            item.classList.remove('services__items-active');
        })
        worksContentInside.forEach(item => {
            item.classList.remove('services-works__inside-active');
        })
        itemsContentInside.forEach(item => {
            item.classList.remove('services__items-inside-active');
        })
    }

    tabsButtons.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const path  = e.target.dataset.btn;
            removeActiveClass();

            document.querySelector(`[data-works="${path}"]`).classList.add('services-works__wrapper-active');
            document.querySelector(`[data-items="${path}"]`).classList.add('services__items-active');
            document.querySelector(`[data-btn="${path}"]`).classList.add('services-tabs__btn-active');

            if(document.querySelector(`[data-works="${path}"]`).classList.contains('services-works__wrapper-active')) {
                setTimeout(() => {
                    worksContentInside.forEach(item => {
                        item.classList.add('services-works__inside-active');
                    })
                },10);
            }

            if(document.querySelector(`[data-items="${path}"]`).classList.contains('services__items-active')) {
                setTimeout(() => {
                    itemsContentInside.forEach(item => {
                        item.classList.add('services__items-inside-active');
                    })
                },10);
            }


        })
    });


    // CLOSE MAP-INFO
    const closeBtn = document.querySelector('.close-btn');
    const info = document.querySelector('.contacts__map-info');

    closeBtn.addEventListener('click', () => {
        info.classList.remove('contacts__map-info-active')
    })

})