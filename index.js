let Hanberger = document.getElementById("Hanberger");

Hanberger.addEventListener("click", function name() {
    let close_img = "./images/icon-close.svg"
    let menu_img = "./images/icon-hamburger.svg"
    let menu = document.querySelector(".menu");  
    let menu_list = document.querySelector(".menu-list");  
    if (menu.alt==1) {
        menu_list.style.display = "none"
        menu.src = menu_img;
        menu.alt = 0;
    }
    else if (menu.alt == 0) {
        menu_list.style.display = "block";
        menu.src = close_img;
         menu.alt = 1;
    }

})
