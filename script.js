// ===============================
// PAZWA CARE - script.js
// ===============================

// Smooth scrolling for menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "#111";
        header.style.boxShadow = "none";
    }

});

// Book Now button


// Fade-in animation on scroll
const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

document.querySelectorAll(".card,.review,.contact").forEach((el)=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all 0.8s ease";

observer.observe(el);

});

// Welcome message
window.onload=function(){

console.log("Welcome to Pazwa Care Website");

};

// Current year in footer
const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Pazwa Care | All Rights Reserved";

}

const images = [
    "images/image.png",
    "images/image2.png"
];

let current = 0;
const heroImage = document.getElementById("heroImage");

setInterval(() => {
    current = (current + 1) % images.length;
    heroImage.src = images[current];
}, 2000);
function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
}
function openMenu(){
    document.getElementById("sideMenu").style.right = "0";
}

function closeMenu(){
    document.getElementById("sideMenu").style.right = "-260px";
}
const swiper = new Swiper(".reviewSwiper", {
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
    slidesPerView:3,
    spaceBetween:30,

    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
});
