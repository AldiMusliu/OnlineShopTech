// Make mobile navigation work

let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector(".nav");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function () {
  navHeader.classList.toggle("open-nav");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

 allLinks.forEach(function (link) {
   link.addEventListener("click", function (e) {
     e.preventDefault();
     const href = link.getAttribute("href");

     // Scroll to other links
     if (href !== "#" && href.startsWith("#")) {
       const sectionEl = document.querySelector(href);
       sectionEl.scrollIntoView({ behavior: "smooth" });
     }
   });
 });