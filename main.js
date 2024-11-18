var typed = new Typed(".text",{
    strings:['Customer Services & Operations.','Business Intelligence.','Meme Creation.','Food Vlogging.','Adventure Explorer.','Data Analytics.'],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop: true
})
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})