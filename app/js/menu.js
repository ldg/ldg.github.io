let mobileMenuToggle = document.querySelector('.mobile-menu-toggle'),
    mobileMenuContainer = document.querySelector('.mobile-menu-container'),
    hasSubmenu = document.querySelectorAll('.has-submenu'),
    subMenu = document.querySelectorAll('.submenu'),
    menu = subMenu.nextElementSibling,
    items = document.querySelectorAll('.item');

mobileMenuToggle.addEventListener('click', function(){
    mobileMenuContainer.classList.toggle('active');
});

function submenuToggle (){
    let submenu = this.nextElementSibling;
    submenu.classList.toggle('active');
}

for( let item of items  ) {
    item.addEventListener('click', submenuToggle, false );     
}



