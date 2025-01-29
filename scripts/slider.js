(function() {
    const slideActiveClass = 'slider__item--active';
    const paginationButtonActiveClass = 'pagination__item--active';

    const slides = document.querySelectorAll('.slider__item');
    const paginationButtons = document.querySelectorAll('.pagination__item');

    let activeIndex = 0;

    function changeSlide(event) {
        slides[activeIndex].classList.remove(slideActiveClass);
        paginationButtons[activeIndex].classList.remove(paginationButtonActiveClass);

        activeIndex = event.target.getAttribute('data-slide');

        slides[activeIndex].classList.add(slideActiveClass);
        paginationButtons[activeIndex].classList.add(paginationButtonActiveClass);   
    }

    paginationButtons.forEach(btn => btn.addEventListener('click', changeSlide));
})()