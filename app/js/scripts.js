// hamburger menu
let mobileMenu = document.querySelector('.mobile-menu-toggle');
// mobile menu container
let menuContainer = document.querySelector('.mobile-menu-container');
// submenus
let submenuTrigger = document.getElementsByClassName('carat');
let subMenuEl = document.querySelectorAll('.submenu');

// hide menu container by default
function hideMenu() {
    menuContainer.classList.add('hide');
}
hideMenu();

//add event listener to open mobile menu
mobileMenu.addEventListener('click', function(){

    // toggle mobile menu
    menuContainer.classList.toggle('show');
    menuContainer.classList.toggle('hide');
    
    //if subMenuEl has the class submenu-hide, run the close submenus function
    // for(let i = 0; i < subMenuEl.length; i++ ) {
    //     console.log('submenu for loop - ' );
    // }
    
});



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

        // close all other open submenus
        // if this is not clicked and it has the class submenu-show, then close it
        
    }
    
}
submenuToggle();

