/* ======================= typing animation ======================= */
var typed = new Typed(".typing", {
    strings:["","Web Developer","Backend Developer", "Fullstack Developer", "Power Apps Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ======================= menu opener ======================= */
// lehet még extrázni, ha nyitva van más ikon
const asidewitcherToggle = document.querySelector(".nav-toggler");
asidewitcherToggle.addEventListener("click", () => {
    document.querySelector(".aside").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".aside").classList.contains("open")) {
        document.querySelector(".aside").classList.remove("open");
    }
})