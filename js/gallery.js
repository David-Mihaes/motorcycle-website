// Gallery Slideshow

function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  function showDivs(n) {
    const x = document.getElementsByClassName("myGallery");
    const dots = document.getElementsByClassName("preview");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("preview__img");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className == "preview__img";
}