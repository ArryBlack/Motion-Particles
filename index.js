const openMobileMenu= document.querySelector(".open_mobile_menu");
const closeMobileMenu= document.querySelector(".close_mobile_menu");
openMobileMenu.addEventListener("click", toggleMenu);
closeMobileMenu.addEventListener("click", toggleMenu);
function toggleMenu(){
    const mobileNav=document.querySelector(".mobile_nav");

    mobileNav.classList.toggle("toggle_menu");
    openMobileMenu.classList.toggle("d_none");
    closeMobileMenu.classList.toggle("d_none");
}