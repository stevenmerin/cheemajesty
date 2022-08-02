// Navbar
const navBarColor = document.querySelector("nav");
const navLogoSize = document.querySelector("#navLogo");

window.onscroll = function() {
  let top = window.scrollY;
  // console.log(top);

  if(top >= 75) {
    navBarColor.classList.add("active");
    if(window.screen.width <= 600) {
      navLogoSize.style.width = "20%";
    } else {
      navLogoSize.style.width = "10%";      
    }
  } else {
    navBarColor.classList.remove("active");
    if(window.screen.width >= 1824) {
      navLogoSize.style.width = "65%";
    } 
    else {
      navLogoSize.style.width = "40%";
    }
  }
}

//  Fade in animations, Intersection Observer

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions= {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};


const appearOnScroll = new IntersectionObserver
(function (
  entries, 
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
},  
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})