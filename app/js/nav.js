const hamburger = document.getElementById('mobilemenu-toggle');
const mobileContainer = document.getElementById('mobilemenu-container');

<<<<<<< HEAD
=======
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

>>>>>>> 8a58257758c79f0fd19d64df725de162fd0b2a00
//toggle show/hide for mobile menu 
function toggleMobileMenu() {
    mobileContainer.classList.toggle('show'); 
}

//event listener for mobile menu toggle
hamburger.addEventListener('click', toggleMobileMenu, false);