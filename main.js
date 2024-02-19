//RESPONSIVE NAVBAR /////////////////////////////////////
function toggleNavbar() {
    document.getElementById("navbar-responsive").classList.toggle("open");
  }
  
  document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
  // NAVBAR SHRINK ////////////////////////////////////
  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }
  // BACTOP ///////////////////////////////////////////////
  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.bottom = "20px";
    } else {
      backtop.style.bottom = "-50px";
    }
  }

  // DOM elementlarni tanlash
var backToTopButton = document.querySelector(".back-to-top");

// Orqaga tepishni qo'llab-quvvatlash
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { // Agar oyna yuqoriga yoki uning o'ngidan yuqoriga o'tgan bo'lsa
        backToTopButton.classList.add("show"); // Tugmani ko'rsatish
    } else {
        backToTopButton.classList.remove("show"); // Aks holda tugmani yashirish
    }
}

// Tugmani tepa qilish
function backToTop() {
    window.scrollTo(0, 0);
}


document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector('body');
  const toggleModeButton = document.querySelector('.toggle-mode');

  toggleModeButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
  });
});


let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});