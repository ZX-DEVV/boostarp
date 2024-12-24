const header=document.querySelector("header");

window.addEventListener("scroll",function(){header.classList.toggle("sticky",this.window.scrollY >  0);})



let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');
menu.onclick = ( )  =>{
menu.classList.toggle('bx-x')
navmenu.classList.toggle('open')
}
// Select the "Shop Now" button
const shopNowButton = document.getElementById("shop-now");

// Add an event listener for the click event
shopNowButton.addEventListener("click", function () {
    // Redirect to the products page
    window.location.href = "file:///C:/Users/fujitsu/Desktop/Table/bostrap/product.html";
});