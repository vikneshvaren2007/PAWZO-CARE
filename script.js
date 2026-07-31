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