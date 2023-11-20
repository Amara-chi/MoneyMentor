var ham = document.querySelector(".hamburger")
var hamMenu = document.querySelector(".nl1")

ham.addEventListener("click", () => {
    ham.classList.toggle("active")
    hamMenu.classList.toggle("active")
})