//
//
// TODO
//
// sticky nav w/ intersection observer
//
//
var hamburgerHand = document.querySelector(".hamburger-menu");
var hiddenLinks = document.querySelector(".hidden-links");
var hamburgerClose = document.querySelector(".hamburger-close");
hamburgerHand.addEventListener('click', function () {
  hamburgerHand.classList.add('hamburger-menu-active');
  hiddenLinks.classList.add('show-hidden-links');
  hamburgerClose.classList.add('hamburger-close-active');
})
hamburgerClose.addEventListener('click', function () {
  hamburgerHand.classList.remove('hamburger-menu-active');
  hiddenLinks.classList.remove('show-hidden-links');
  hamburgerClose.classList.remove('hamburger-close-active');
})
