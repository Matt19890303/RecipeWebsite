// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {headerScroll()};

function headerScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".logo").style.padding = "10px";
  } else {
    document.querySelector(".logo").style.padding = "20px";
  }
} 