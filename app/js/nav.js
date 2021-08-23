const hamburger = document.getElementById('mobilemenu-toggle');
const mobileContainer = document.getElementById('mobilemenu-container');
//toggle show/hide for mobile menu 
function toggleMobileMenu() {
    mobileContainer.classList.toggle('show'); 
}
//event listener for mobile menu toggle
hamburger.addEventListener('click', toggleMobileMenu, false);