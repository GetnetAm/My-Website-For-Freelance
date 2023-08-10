const menu=document.querySelector(".menu-icon");
const navbarmenu=document.querySelector(".navbar");

menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    navbarmenu.classList.toggle("active");
})

document.querySelectorAll(".navbar").forEach(n=> n. addEventListener("click", () =>{
    menu.classList.remove("active");
    navbarmenu.classList.remove("active");
}))
