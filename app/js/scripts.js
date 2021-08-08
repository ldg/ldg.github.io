let mobileMenu = document.querySelector('.mobile-menu-toggle');
let menuContainer = document.querySelector('.mobile-menu-container');

// submenus
let submenuTrigger = document.querySelector('.carat');
let subMenuEl = document.querySelector('.submenu');

console.log(subMenuEl);

function hideMenu() {
    menuContainer.classList.add('hide');
}
hideMenu();

// function hideSubMenu() {
//     subMenuEl.style.display = "none";
// }
// hideSubMenu();

mobileMenu.addEventListener('click', function(){

    menuContainer.classList.toggle('show');
    menuContainer.classList.toggle('hide');

});

submenuTrigger.addEventListener('click', function(){
    subMenuEl.classList.toggle('submenu-show');
    subMenuEl.classList.toggle('submenu-hide');
});

