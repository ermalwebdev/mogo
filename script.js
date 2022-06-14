"use strict";
const btnsCloseOpen = document.querySelectorAll(
  ".btn-list-1, .btn-list-2, .btn-list-3"
);
const btnRightTesti = document.querySelector(".btn-right");
const btnLeftTesti = document.querySelector(".btn-left");
const slider = document.querySelectorAll(".sliders");
const cardItems = document.querySelectorAll(".card-1, .card-2, .card-3");
const gridItems = document.querySelectorAll(
  ".grid-item-1, .grid-item-2, .grid-item-3, .grid-item-4, .grid-item-5, .grid-item-6, .grid-item-7"
);
const childsGrid = document.querySelectorAll(
  ".item-grid-1, .item-grid-2, .item-grid-3, .item-grid-4, .item-grid-5, .item-grid-6, .item-grid-7"
);
const openMapBtn = document.querySelector(".btn-open");
const closeMapBtn = document.querySelector(".btn-close");
const mapOpenSection = document.querySelector(".map-open");
const mapCloseSection = document.querySelector(".close-map");
const map = document.querySelector(".map-section");
const buttonsRepresent = document.querySelectorAll(
  ".btn-select-1, .btn-select-2, .btn-select-3, .btn-select-4"
);
const listHeaderItems = document.querySelectorAll(".list-top-items");
const menuMobile = document.querySelector(".menu-mobile");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const openIcon = document.querySelector(".menuIcon");

// Mobile Hamburger
hamburger.addEventListener("click", function () {
  if (menuMobile.classList.contains("showMenu")) {
    menuMobile.classList.remove("showMenu");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    menuMobile.classList.add("showMenu");
    closeIcon.style.display = "block!important";
    openIcon.style.display = "none";
  }
});

//List Top Header
listHeaderItems.forEach((button) => {
  button.addEventListener("click", function () {
    listHeaderItems.forEach((btn) => btn.classList.remove("active-list"));
    this.classList.add("active-list");
  });
});
// Buttons Represent
let buttonsIntro = function (btnOrder, pageSet) {
  if ((buttonsRepresent[btnOrder].style.borderTop = "3px solid #ffffff")) {
    buttonsRepresent[btnOrder].style.borderTop = "3px solid #f38181";
    window.scrollTo(0, pageSet);
  }
};
buttonsRepresent[0].addEventListener("click", function () {
  if (window.innerWidth <= 480) {
    buttonsIntro(0, 633);
  } else if (window.innerWidth <= 768) {
    buttonsIntro(0, 640);
  } else if (window.innerWidth <= 1024) {
    buttonsIntro(0, 478);
  } else {
    buttonsIntro(0, 1007);
  }
});
buttonsRepresent[1].addEventListener("click", function () {
  if (window.innerWidth <= 480) {
    buttonsIntro(1, 5293);
  } else if (window.innerWidth <= 768) {
    buttonsIntro(1, 4524);
  } else if (window.innerWidth <= 1024) {
    buttonsIntro(1, 4216);
  } else {
    buttonsIntro(1, 3925);
  }
});
buttonsRepresent[2].addEventListener("click", function () {
  buttonsIntro(2, 10000);
});
buttonsRepresent[3].addEventListener("click", function () {
  buttonsIntro(3, 10000);
});
window.addEventListener("scroll", function () {
  if (window.pageYOffset <= 300) {
    for (let i = 0; i < buttonsRepresent.length; i++) {
      buttonsRepresent[i].style.borderTop = "3px solid #ffffff";
    }
    menuMobile.classList.remove("showMenu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  }
});

// window.scrollTo(0, 100)
// Buttons Represent
// Amazing services section
let showHiddenText = function (givenNumber) {
  if (
    document
      .querySelector(`.text-list-info-${givenNumber}`)
      .classList.contains("hidden")
  ) {
    document
      .querySelector(`.text-list-info-${givenNumber}`)
      .classList.toggle("hidden");
    document
      .querySelector(`.btn-list-${givenNumber}`)
      .classList.toggle("rotate-element");
  } else {
    document
      .querySelector(`.text-list-info-${givenNumber}`)
      .classList.toggle("hidden");
    document
      .querySelector(`.btn-list-${givenNumber}`)
      .classList.toggle("rotate-element");
  }
};
let removeOtherText = function (givenNumber) {
  document
    .querySelector(`.text-list-info-${givenNumber}`)
    .classList.add("hidden");
};
let imageSwitch = function (imgNumber) {
  document.querySelector(
    `.image-switch`
  ).src = `/images/image-${imgNumber}.png`;
};
btnsCloseOpen[0].addEventListener("click", function () {
  showHiddenText(1);
  removeOtherText(2);
  removeOtherText(3);
  imageSwitch(1);
  let activeRorate = true;
  if (activeRorate === true) {
    btnsCloseOpen[1].classList.add("rotate-element");
    btnsCloseOpen[2].classList.add("rotate-element");
  }
});
btnsCloseOpen[1].addEventListener("click", function () {
  showHiddenText(2);
  removeOtherText(1);
  removeOtherText(3);
  imageSwitch(3);
  let activeRorate = true;
  if (activeRorate === true) {
    btnsCloseOpen[0].classList.add("rotate-element");
    btnsCloseOpen[2].classList.add("rotate-element");
  }
});
btnsCloseOpen[2].addEventListener("click", function () {
  showHiddenText(3);
  removeOtherText(1);
  removeOtherText(2);
  imageSwitch(2);
  let activeRorate = true;
  if (activeRorate === true) {
    btnsCloseOpen[0].classList.add("rotate-element");
    btnsCloseOpen[1].classList.add("rotate-element");
  }
});
// Amazing services section
// testimonial carousel
let RightSwitchCarousel = function () {
  for (let i = 0; i < slider.length; i++) {
    if (slider[i].classList.contains("active-slider")) {
      slider[i].classList.remove("active-slider");
      slider[i].classList.add("hidden");
      i++;
      slider[i].classList.remove("hidden");
      slider[i].classList.add("active-slider");
      if (slider[1].classList.contains("active-slider")) {
        btnLeftTesti.style.visibility = "visible";
      }
      if (slider[2].classList.contains("active-slider")) {
        btnRightTesti.style.visibility = "hidden";
      }
    }
  }
};
let LeftSwitchCarousel = function () {
  for (let i = 2; i < slider.length; i--) {
    if (slider[i].classList.contains("active-slider")) {
      slider[i].classList.remove("active-slider");
      slider[i].classList.add("hidden");
      i--;
      slider[i].classList.remove("hidden");
      slider[i].classList.add("active-slider");
      if (slider[0].classList.contains("active-slider")) {
        btnLeftTesti.style.visibility = "hidden";
      }
      if (slider[1].classList.contains("active-slider")) {
        btnRightTesti.style.visibility = "visible";
      }
    }
  }
};
btnRightTesti.addEventListener("click", function () {
  RightSwitchCarousel();
});
btnLeftTesti.addEventListener("click", function () {
  LeftSwitchCarousel();
});
// testimonial carousel
// grid items mouse
for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("mouseover", function () {
    gridItems[
      i
    ].style.backgroundImage = `linear-gradient( rgba(219, 118, 116, 0.85), rgba(227, 204, 124, 0.85) ), url(images/grid-img-${i}.png)`;
    childsGrid[i].style.opacity = "100";
  });
  gridItems[i].addEventListener("mouseout", function () {
    gridItems[i].style.backgroundImage = ``;
    childsGrid[i].style.opacity = "0";
  });
}
// grid items mouse
// map section
openMapBtn.addEventListener("click", function () {
  mapOpenSection.style.display = "none";
  map.style.height = "80vh";
  map.style.backgroundImage = "url(/images/map-location.png)";
  mapCloseSection.style.display = "flex";
  window.scrollTo(0, 6543);
});
closeMapBtn.addEventListener("click", function () {
  mapOpenSection.style.display = "flex";
  map.style.height = "";
  map.style.backgroundImage = "";
  mapCloseSection.style.display = "none";
});
window.onscroll = function () {
  console.log(window.pageYOffset, window.pageXOffset);
};
// map section
// mobile navbar
