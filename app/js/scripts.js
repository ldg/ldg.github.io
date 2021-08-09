//hamburger menu
let mobileMenu = document.querySelector('.mobile-menu-toggle');
let menuContainer = document.querySelector('.mobile-menu-container');

function hideMenu() {
    menuContainer.classList.add('hide');
}
hideMenu();

mobileMenu.addEventListener('click', function(){

    menuContainer.classList.toggle('show');
    menuContainer.classList.toggle('hide');

});

// submenus
let submenuTrigger = document.getElementsByClassName('carat');
let subMenuEl = document.getElementsByClassName('submenu');

console.log(subMenuEl);
// add hide class to submenu
function hideSubMenu() {
    for(let i = 0;i < subMenuEl.length; i++ ){
        subMenuEl[i].classList.add('submenu-hide');
    }
}
hideSubMenu();

//add event listener to first submenuTrigger
// submenuTrigger[0].addEventListener('click', function(){
//     subMenuEl[0].classList.toggle('submenu-show');
//     subMenuEl[0].classList.toggle('submenu-hide'); 
// })



function submenuToggle(){
    for(let i = 0; i < submenuTrigger.length; i++ ) {

        submenuTrigger[i].addEventListener('click', function(){
            subMenuEl[i].classList.toggle('submenu-show');
            subMenuEl[i].classList.toggle('submenu-hide'); 
            console.log(i);
        })
        console.log(i);
            
    }
    console.log('submenuToggle triggered'); 
}
submenuToggle();

// submenuTrigger.addEventListener('click', function(){
//     subMenuEl.classList.toggle('submenu-show');
//     subMenuEl.classList.toggle('submenu-hide');
// });

