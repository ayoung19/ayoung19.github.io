var landing_arrow_wrapper_box = document.getElementById("landing-arrow-wrapper");

document.onmousemove = function(e) {
  var mouseX = e.clientX;
  var mouseY = e.clientY;
  if(rectHovered(mouseX, mouseY, landing_arrow_wrapper_box.getBoundingClientRect())) {
    document.getElementById("landing-arrow").style.borderColor = "#f6af42";
  } else {
    document.getElementById("landing-arrow").style.borderColor = "white";
  }
}

landing_arrow_wrapper_box.onclick = function() {
  document.getElementById("projects-anchor").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function rectHovered(x, y, rect) {
    if(x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
        return true;
    } else {
        return false;
    }
}
