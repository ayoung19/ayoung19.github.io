for(var i = 1; i < document.getElementById("blocks").children.length; i++) {
  document.getElementById("blocks").children[i].style.marginTop = window.innerHeight + "px";
}
setTimeout(function() {
  document.getElementById("block0").style.color = "white";
  setTimeout(function() {
    document.getElementById("title-overlay").style.opacity = "0.7";
  }, 1000)
}, 750)

document.onscroll = function() {
  var blocks = document.getElementById("blocks");
  if(inView(blocks.children[0])) {
    show("panel0");
  } else if(inView(blocks.children[1])) {
    show("panel0");
  } else if(inView(blocks.children[2])) {
    show("panel1");
  } else if(inView(blocks.children[3])) {
    show("panel2");
  } else if(inView(blocks.children[4])) {
    show("panel3");
  } else if(inView(blocks.children[5])) {
    show("panel4");
  } else if(inView(blocks.children[6])) {
    show("panel5");
  } else if(inView(blocks.children[7])) {
    show("panel6");
  } else if(inView(blocks.children[8])) {
    show("panel7");
  } else if(inView(blocks.children[9])) {
    show("panel7");
  }
}

function show(id) {
  for(var i = 0; i < document.getElementById("background").children.length; i++) {
    if(document.getElementById("background").children[i].id == id) {
      document.getElementById("background").children[i].children[1].children[0].play();
      document.getElementById("background").children[i].style.display = "block";
    } else {
      document.getElementById("background").children[i].children[1].children[0].pause();
      document.getElementById("background").children[i].style.display = "none";
    }
  }
}

function inView(el) {
  var rect = el.getBoundingClientRect();
  if(rect.top < window.innerHeight, rect.bottom > 0) {
    return true;
  } else {
    return false;
  }
}
