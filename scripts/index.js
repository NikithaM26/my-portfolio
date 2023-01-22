var navbar = document.getElementById("top");
window.onscroll = function () {
  //checks if we have scrolled down through the first 50px of the page
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    navbar.style = "border: 1px solid #111111";
  } else {
    navbar.style = "border: none";
  }
};

