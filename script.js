// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {headerScroll()};

function headerScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".primary-header").style.padding = "2px";
    document.querySelector(".logo").style.fontSize = "1.9em";
    document.querySelector("#recipes").style.marginTop = "0px";
    document.querySelector("#about-us").style.marginTop = "0px";
    document.querySelector("#contact-us").style.marginTop = "0px";
    document.querySelector("#stores").style.marginTop = "0px";
  } else {
    document.querySelector(".primary-header").style.padding = "8px";
    document.querySelector(".logo").style.fontSize = "2.5em";
    document.querySelector("#recipes").style.marginTop = "10px";
    document.querySelector("#about-us").style.marginTop = "10px";
    document.querySelector("#contact-us").style.marginTop = "10px";
    document.querySelector("#stores").style.marginTop = "10px";
    
  }
} 


