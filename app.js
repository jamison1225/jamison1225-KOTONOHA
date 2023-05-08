//------------- To animation start----------------
const homeimg = document.querySelector("#home-img");
const animation = document.querySelector("div.home-animation");
homeimg.addEventListener("animationend", () => {
  animation.style = "transition: all 1s; opacity:0; pointer-events:none";
});
//------------- To animation end----------------

//---------------top-btn start----------------------
const toTop = document.querySelector(".top-btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
//---------------top-btn start----------------------

//-------------main-content slideShow start-------------
let maincounter = 1;
setInterval(function () {
  document.querySelector("#main-radio" + maincounter).checked = true;
  maincounter++;
  if (maincounter > 3) {
    maincounter = 1;
  }
}, 10000);
//-------------main-content slideShow end-------------

//------------- about-container aniation start----------------
//------- left-fide-top animation start-----
function leftfidetop() {
  setTimeout(function leftfidetop() {
    let topfide = document.querySelectorAll(".left-fideTop");
    for (let i = 0; i < topfide.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = topfide[i].getBoundingClientRect().top;
      let elementVisible = 180;
      if (elementTop < windowHeight - elementVisible) {
        topfide[i].classList.add("active");
      } else {
        topfide[i].classList.remove("active");
      }
    }
  }, 1000);
}
window.addEventListener("scroll", leftfidetop);
//------- left-fide-top animation end----
//------- left-fide-bottm animation start----
function leftfidebottom() {
  let bottomfide = document.querySelectorAll(".left-fideBottom");
  for (let i = 0; i < bottomfide.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = bottomfide[i].getBoundingClientRect().top;
    let elementVisible = 180;
    if (elementTop < windowHeight - elementVisible) {
      bottomfide[i].classList.add("active");
    } else {
      bottomfide[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", leftfidebottom);
//------- left-fide-bottm animation end--------------------
//------- right-fide animation start-----
function rightfide() {
  let fides = document.querySelectorAll(".right-fide");

  for (let i = 0; i < fides.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fides[i].getBoundingClientRect().top;
    let elementVisible = 120;
    if (elementTop < windowHeight - elementVisible) {
      fides[i].classList.add("active");
    } else {
      fides[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", rightfide);
//------- right-fide animation end-----
//------------- about-container aniation end--------------------

// --------------best-title animation start --------------
function besttitle() {
  let title = document.querySelectorAll(".best-title-fide");

  for (let i = 0; i < title.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = title[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      title[i].classList.add("active");
    } else {
      title[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", besttitle);
// --------------best-title animation end --------------

//----------------- store-slideshow start-------------------
let storecounter = 1;
setInterval(function () {
  document.querySelector("#store-radio" + storecounter).checked = true;
  storecounter++;
  if (storecounter > 3) {
    storecounter = 1;
  }
}, 3500);
//----------------- store-slideshow end-------------------
