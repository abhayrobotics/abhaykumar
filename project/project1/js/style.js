
// hamburger navigation
function menu(){
    // console.log("preseent")

    var list = document.querySelector(".list")
    var toggle = document.querySelector(".toggle")
    

    list.classList.toggle("active")
    toggle.classList.toggle("rotate")

}

// on scroll

ScrollOut({
    threshold : 0.3,
    // once: true
})
