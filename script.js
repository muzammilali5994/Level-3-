let navBar = document.querySelector("nav");
let myNav = document.getElementById("nav-bar");
let navLinks = myNav.querySelectorAll("li");
let hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener('click', ()=>{
    myNav.classList.toggle("active");
    hamMenu.classList.toggle("fa-times");
});
navLinks.forEach((navLink)=>{
    navLink.addEventListener(('click'),()=>{
        myNav.classList.remove("active");
        hamMenu.classList.toggle("fa-times");
    });
});
    scrollTopButton.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });
window.onscroll = function(){
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = (pos * 100) / calcHeight;
    document.getElementById("progres").style.width = `${scroll}%`;
    /*-----Scroll to TOP Button ------*/
    let scrollTopButton = document.getElementById("scroll-top-btn");
    if(pos > 300){
        scrollTopButton.style.display = "grid";
    }
    else{
        scrollTopButton.style.display = "none";
    }




    /*-----Sticky Navbar------*/

    if(pos > 0){
        navBar.classList.add("sticky");
    }
    else{
        navBar.classList.remove("sticky");
    }
};