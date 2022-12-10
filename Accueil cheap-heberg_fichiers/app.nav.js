const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    navbar
        .classList
        .add("hide");
    menuBtn
        .classList
        .add("show");
    body
        .classList
        .add("disabled");
}
cancelBtn.onclick = () => {
    body
        .classList
        .remove("disabled");
    navbar
        .classList
        .remove("hide");
    menuBtn
        .classList
        .remove("show");
}
window.onscroll = () => {
    this.scrollY > 20
        ? navbar
            .classList
            .add("sticky")
        : navbar
            .classList
            .remove("sticky");
}