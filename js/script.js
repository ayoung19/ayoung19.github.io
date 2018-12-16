setTimeout(function() {
  document.getElementById("block0").style.color = "white";
  setTimeout(function() {
    document.getElementById("title-overlay").style.opacity = "0.7";
  }, 1000)
}, 750)
document.onscroll = function() {
  /*
  if(inBetween(-1, 40)) {
    document.getElementById("title-overlay").style.opacity = "" + (((-1/80) * document.documentElement.scrollTop) + 1);
  }
  */
  if(inBetween(0, 1515)) {
    show("panel0");
  } else if(inBetween(1515, 2555)) {
    show("panel1");
  } else if(inBetween(2555, 3475)) {
    show("panel2");
  } else if(inBetween(3475, 4545)) {
    show("panel3");
  } else if(inBetween(4545, 5545)) {
    show("panel4");
  } else if(inBetween(5545, 6545)) {
    show("panel5");
  } else if(inBetween(6545, 7655)) {
    show("panel6");
  } else if(inBetween(7655, 10000)) {
    show("panel7");
  }
}

function show(id) {
  for(var i = 0; i < document.getElementById("background").children.length; i++) {
    if(document.getElementById("background").children[i].id == id) {
      document.getElementById("background").children[i].style.display = "block";
    } else {
      document.getElementById("background").children[i].style.display = "none";
    }
  }
}

function inBetween(a, b) {
  var scroll_y = document.documentElement.scrollTop;
  console.log(scroll_y)
  if(scroll_y > a && scroll_y <= b) {
    return true;
  } else {
    return false;
  }
}
