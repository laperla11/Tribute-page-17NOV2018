function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("toggle-btn");
  if (x.className === "navigation-bar") {
    x.className += " responsive";
    y.className += " close";
  } else {
    x.className = "navigation-bar";
    y.className = "btn-open";
  }
}