// Table Accordion

const acc = document.getElementsByClassName("specs-collapse");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const collapse_panel = this.nextElementSibling;
    if (collapse_panel.style.maxHeight) {
      collapse_panel.style.maxHeight = null;
    } else {
      collapse_panel.style.maxHeight = collapse_panel.scrollHeight + "px";
    } 
  });
}