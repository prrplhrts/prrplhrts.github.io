function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.style.overflow = "hidden"; 
    document.querySelector(".menu-button").style.display = "none";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.overflow = "auto";
    document.querySelector(".menu-button").style.display = "inline-block";
}
document.querySelectorAll('.slider-nav a').forEach(function(nav) {
    nav.addEventListener('click', function(event) {
      event.preventDefault();  
  
      const slideId = nav.getAttribute('href').slice(1);  
      const slideElement = document.getElementById(slideId);
     
      slideElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center', 
      });
    });
  });