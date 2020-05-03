var burger = document.getElementById("burger-menu");

burger.addEventListener("click", showNav);

function showNav() {
    var nav = document.getElementById("nav");
    var burgerRow = document.getElementsByClassName("burger-row");
    nav.classList.toggle("open-nav");
    burger.classList.toggle("change");
    burgerRow[0].classList.toggle("open-burger");
    burgerRow[1].classList.toggle("open-burger");
    burgerRow[2].classList.toggle("open-burger");
}