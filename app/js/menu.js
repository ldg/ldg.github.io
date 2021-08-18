/* Variables */
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const hasSubmenu = document.querySelector('.has-submenu');
const subMenu = document.querySelectorAll('.submenu');
const items = document.querySelectorAll('.item');

/* add evenet listener and function to toggle Mobile menu */
mobileMenuToggle.addEventListener('click', function(){
    mobileMenuContainer.classList.toggle('active');
});


/* toggle sub-menus */
function submenuToggle (){
    let submenu = this.nextElementSibling;
    submenu.classList.toggle('active');
}

/* add event listeners to submenus */
for( let item of items  ) {
    item.addEventListener('click', submenuToggle, false );     
}


/* Close Submenu From Anywhere */
// function closeSubmenu(e) {
   
//     let submenus = mobileMenuContainer.querySelectorAll('.submenu');

//     submenus.forEach( function(submenu){
//         if(submenu.classList.contains('active') ){
//             submenu.classList.remove('active');
//         }
//     })
    

//     console.log('in the mobile menu container');

//   }
// mobileMenuContainer.addEventListener('click', closeSubmenu, false);
