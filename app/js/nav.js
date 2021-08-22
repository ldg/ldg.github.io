const hamburger = document.getElementById('mobilemenu-toggle');
const mobileContainer = document.getElementById('mobilemenu-container');

// set mobile menu default to hidden
// function setMobileMenuDefault(){
//     let w = window.innerWidth;
//     if( w <= 1024){
//         mobileContainer.classList.add('hide');
//     } else {
//         mobileContainer.classList.remove('hide');
//     }
//     console.log(w);
// }
// setMobileMenuDefault();

//toggle show/hide for mobile menu 
function toggleMobileMenu() {
    mobileContainer.classList.toggle('show'); 
}

//event listener for mobile menu toggle
hamburger.addEventListener('click', toggleMobileMenu, false);