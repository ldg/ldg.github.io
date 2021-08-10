//hamburger menu
let mobileMenu = document.querySelector('.mobile-menu-toggle');
let menuContainer = document.querySelector('.mobile-menu-container');

// hide menu container by default
function hideMenu() {
    menuContainer.classList.add('hide');
}
hideMenu();

//add event listener to open mobile menu
mobileMenu.addEventListener('click', function(){

    menuContainer.classList.toggle('show');
    menuContainer.classList.toggle('hide');

    // close all submenus when closing mobile menu
    // add code

});

// submenus
let submenuTrigger = document.getElementsByClassName('carat');
let subMenuEl = document.getElementsByClassName('submenu');

// hide submenus by default
function hideSubMenu() {
    for(let i = 0;i < subMenuEl.length; i++ ){
        subMenuEl[i].classList.add('submenu-hide');
    }
}
hideSubMenu();

// loop through submenus and add event listeners to toggle submenus
function submenuToggle(){
    for(let i = 0; i < submenuTrigger.length; i++ ) {

        submenuTrigger[i].addEventListener('click', function(){
            subMenuEl[i].classList.toggle('submenu-show');
            subMenuEl[i].classList.toggle('submenu-hide'); 
        })
            
    }
    // close all other open submenus
    // add code
}
submenuToggle();

