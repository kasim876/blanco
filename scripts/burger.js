(function() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    const burgerActiveClass = 'burger--active';
    const menuActiveClass = 'header__nav--active';
    const lockScrollClass = 'stop-scroll';

    function toggleNavMenu() {
        menu.classList.toggle(menuActiveClass);
        burger.classList.toggle(burgerActiveClass);
        document.body.classList.toggle(lockScrollClass);
    }
    
    burger.addEventListener('click', toggleNavMenu);
})()