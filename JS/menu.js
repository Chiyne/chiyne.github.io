var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.ul_horizontal');

const toggleMenu = () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('ul_horizontal_active');
}

hamburger.addEventListener('click', e => {
    //e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu;
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('ul_horizontal_active');
    

    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
    }
});
