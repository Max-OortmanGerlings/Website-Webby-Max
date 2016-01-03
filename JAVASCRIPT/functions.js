function navToggle(element) {
  var mobileNav = document.getElementById('mobile-nav')
  if (element.className == "mobile-nav-toggle"){
    element.className = "mobile-nav-toggle is-open";
    mobileNav.className = "mobile-nav is-open";
  } else {
    element.className = "mobile-nav-toggle";
    mobileNav.className = "mobile-nav";
  }
}
