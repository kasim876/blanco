(function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    const burgerActiveClass = 'burger--active';
    const menuActiveClass = 'nav--active';
    const lockScrollClass = 'stop-scroll';

    function toggleMobileMenu() {
        menu.classList.toggle(menuActiveClass);
        burger.classList.toggle(burgerActiveClass);
        document.body.classList.toggle(lockScrollClass);
    }
    
    burger.addEventListener('click', toggleMobileMenu);
})()