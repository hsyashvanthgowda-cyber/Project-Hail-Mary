// Loader
window.onload = function(){
  document.getElementById("loader").style.display="none";
}

// Cursor glow
document.addEventListener("mousemove",e=>{
  const c=document.querySelector(".cursor");
  c.style.left=e.clientX+"px";
  c.style.top=e.clientY+"px";
});

// Scroll reveal
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-50){
      el.classList.add("active");
    }
  });
});

// Back to top
window.onscroll=()=>{
  topBtn.style.display=window.scrollY>300?"block":"none";
}

function scrollTop(){
  window.scrollTo({top:0,behavior:"smooth"});
}

// Mobile menu
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

// Theme toggle
function toggleTheme(){
  document.body.classList.toggle("light");
}

// EmailJS
emailjs.init("K5YVg_CoQ5VB9CVV3");

document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();
  emailjs.sendForm("service_uw1527f","template_1sbh83q",this)
  .then(()=>alert("Message Sent!"));
});
