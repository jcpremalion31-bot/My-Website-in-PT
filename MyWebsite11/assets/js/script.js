const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

function showSkill(imagePath){
    const viewer = document.getElementById("skillViewer");

    if (viewer.style.display === "block" && viewer.src.includes(imagePath)) {
        viewer.style.display = "none";
    } else {
        viewer.src = imagePath;
        viewer.style.display = "block";
    }
}

// ==============================
// Welcome Message
// ==============================
window.addEventListener("load", () => {
    alert("Welcome to James Premalion's Personal Website!");
});

// ==============================
// Dark Mode Toggle
// ==============================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}

// ==============================
// Mobile Navigation
// ==============================
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// ==============================
// Live Date and Time
// ==============================
function updateClock() {

    const clock = document.getElementById("clock");

    if(clock){

        const now = new Date();

        clock.innerHTML = now.toLocaleString();

    }
}

setInterval(updateClock,1000);

// ==============================
// Contact Form Validation
// ==============================
function validateForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please complete all fields.");

        return false;

    }

    alert("Thank you! Your message has been submitted.");

    return false;
}

// ==============================
// Back To Top Button
// ==============================
window.onscroll = function(){

    let btn = document.getElementById("topBtn");

    if(btn){

        if(document.documentElement.scrollTop > 200){

            btn.style.display="block";

        }else{

            btn.style.display="none";

        }

    }

}

function topFunction(){

    document.body.scrollTop=0;

    document.documentElement.scrollTop=0;

}

// ==============================
// Typing Effect
// ==============================
const text = "BS Information Technology Student | Future Web Developer";

let i = 0;

function typing(){

    let typingText = document.getElementById("typing");

    if(typingText){

        if(i < text.length){

            typingText.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,80);

        }

    }

}

typing();