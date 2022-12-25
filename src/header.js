// Get the header
const header = document.getElementById("header");
const page = document.querySelector("body");
// Get the offset position of the navbar
console.log(page)


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  sticky = header.scrollHeight;
  const altoPagina = page.scrollHeight;
  const scroll = window.scrollY;
  const quedaDePagina = altoPagina-(window.innerHeight);
  

  console.log(quedaDePagina,altoPagina)
  if ((quedaDePagina > window.innerHeight) && (scroll>0)) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const navLinksInner = document.querySelectorAll(".nav-links li");


//menu-icon click event
menuIcon.addEventListener("click", () => {
  //toggle active class
  
  navLinks.classList.toggle("menu-active");

  //animate navLinks
  navLinksInner.forEach((li, index) => {
    
    if (li.style.animation) {
      li.style.animation = "";
    } else {
      li.style.animation = `navLinkAnime 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  //toggle for menu-icon animation
  menuIcon.classList.toggle("span-anime");
});
