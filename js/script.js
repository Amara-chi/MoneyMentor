var btnA = document.querySelector(".button-area");
var indicates = document.querySelector(".indicate");
var nav = document.querySelector("nav");
var text = document.querySelector(".text");
var imgg = document.querySelector(".main-img")
var nl_first = document.querySelector(".nl-first");
var section = document.querySelector("section");
var hamspan = document.querySelector(".ham-span");
var hs2 = document.querySelector(".hs2");
var hs3 = document.querySelector(".hs3");
// var white = document.querySelector(".white");

function clicked() {
    btnA.classList.toggle("active")
    if(btnA.classList.contains("active")){
        nav.classList.add("active");
        nl_first.classList.add("active");
        section.classList.add("active");
        hamspan.classList.add("active");
        hs2.classList.add("active");
        hs3.classList.add("active");
        // white.classList.add("active");
        indicates.innerHTML="Dark";
        indicates.classList.add("active")
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'gold';
        text.classList.add("active")
        imgg.getAttribute("src")
        imgg.setAttribute("src","dom-pic.jpg")
    }
    else {
        nav.classList.remove("active");
        section.classList.remove("active");
        nl_first.classList.remove("active");
        hamspan.classList.remove("active");
        hs2.classList.remove("active");
        hs3.classList.remove("active");
        // white.classList.remove("active");
        indicates.textContent = "Light";
        indicates.classList.remove("active");
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        text.classList.remove("active")
        imgg.setAttribute("src","image-product-desktop.jpg")
    }
}
clicked()


