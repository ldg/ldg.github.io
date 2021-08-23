const hamburger = document.getElementById('mobilemenu-toggle');
const mobileContainer = document.getElementById('mobilemenu-container');
//toggle show/hide for mobile menu 
function toggleMobileMenu() {
    let hamburger1 = document.querySelector( '.hamburger:nth-child(1)' );
    let hamburger2 = document.querySelector( '.hamburger:nth-child(2)' );
    let hamburger3 = document.querySelector( '.hamburger:nth-child(3)' );

    hamburger1.classList.toggle('rotate-right');
    hamburger2.classList.toggle('no-opacity');
    hamburger3.classList.toggle('rotate-left');

    mobileContainer.classList.toggle('show'); 
}
//event listener for mobile menu toggle
hamburger.addEventListener('click', toggleMobileMenu, false);