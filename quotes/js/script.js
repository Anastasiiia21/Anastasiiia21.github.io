    var menu = document.querySelector(".menu-open");
    var popup = document.querySelector(".modal-menu");
    var close = document.querySelector(".menu-close");

    menu.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-menu-show");
    });  

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-menu-show");
    });  
