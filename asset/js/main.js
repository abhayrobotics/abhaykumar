// Hamburger
console.log('check');
function openMenu(){
      let nav__close = document.getElementById("nav__close");
    let nav__menu = document.getElementById("nav__menu");
    let nav = document.getElementById("nav");
   
    if(getComputedStyle(nav__close).display == "block"){
        nav__close.style.display ="none";
        nav__menu.style.display ="block";
        nav.classList.toggle('active')
    }
    else{
        console.log("condition not met")
        nav__close.style.display ="block";
        nav__menu.style.display ="none";
        nav.classList.toggle('active')
    }
}