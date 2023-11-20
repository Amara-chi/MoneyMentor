var eye =document.querySelector(".eye");
var pd = document.querySelector(".pd")
eye.addEventListener("click", () => {
    if(pd.type == "password") {
        pd.type = "text"
    }
    else {
        pd.type = "password"
    }
})
        
        