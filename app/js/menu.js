let mobileMenuToggle = document.querySelector('.mobile-menu-toggle'),
    mobileMenuContainer = document.querySelector('.mobile-menu-container'),
    hasSubmenu = document.querySelectorAll('.has-submenu'),
    subMenu = document.querySelectorAll('.submenu'),
    items = document.querySelectorAll('.item');

mobileMenuToggle.addEventListener('click', function(){
    mobileMenuContainer.classList.toggle('active');
    console.log('clicked');
});

function submenuToggle (){
    
    // let submenu = this.nextElementSibling;
    // submenu.classList.toggle('active');
    if(this.nextElementSibling.classList.contains('active')){
        console.log('this contains active')
    } else {
        console.log('no active here!');
    }
}

for( let item of items  ) {

 item.addEventListener('click', submenuToggle, false );  
        
}



