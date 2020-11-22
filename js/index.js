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

/*
const projects = [
  {
    title: "OP.GG Summoner Search",
    description: "my first fully completed chrome extension with 5,000 current users",
    redirectURL: "https://chrome.google.com/webstore/detail/opgg-summoner-search/dfnoddgekoeiljeaekobnchnedoipgpc?hl=en",
    imageURL: "images/opgg.png"
  },
  {
    title: "Dominos/MBC Payroll Automater",
    description: "node.js webapp that automatically allocates tips, calculates tip credit, and determines employee healthcare eligibility for clients of ADP Hawaii",
    redirectURL: "https://mnysoftware.com/secureupload",
    imageURL: "images/mny.png"
  },
  {
    title: "This Tab",
    description: "webapp that allows users to view Google Ads on their new tabs and donate the generated money to charities of their choice",
    redirectURL: "https://chrome.google.com/webstore/detail/this-tab-helps-the-planet/kefafhmoknmjjgmafkkmjakidpdekbak",
    imageURL: "images/thistab.png"
  },
  {
    title: "Myze",
    description: "chrome extension that recommends the perfect size of a particular shirt based on your best fitting clothes",
    redirectURL: "https://myze.ai/",
    imageURL: "images/myze.png"
  },
  {
    title: "Capture The Flag",
    description: "simple and compact online 3v3 capture the flag game made with node.js and socket.io",
    redirectURL: "https://node-ctf.herokuapp.com/",
    imageURL: "images/ctf.png"
  },
  {
    title: "Tory's Roofing Digital Timesheet",
    description: "ruby on rails webapp that digitalizes Tory's Roofing entire timesheet and payroll proccess, highlight feature is an automated text confirmation system",
    redirectURL: "https://suite.mnysoftware.com/",
    imageURL: "images/tory.png"
  },
  {
    title: "FlashBricks Dashboard",
    description: "node.js crud app that lets users add keywords for a discord bot to detect and run an automated task on a windows vps with iis, built with custom scss",
    redirectURL: "https://dashboard.flashbricks.io/",
    imageURL: "images/flashbricks.png"
  },
];

const container = document.querySelector("#projects-list .responsive-container");

for(var project of projects) {
  container.innerHTML += createBlock(project.title, project.description, project.redirectURL, project.imageURL);
}

document.querySelector("body").style.display = "block";

function createBlock(title, description, redirectURL, imageURL) {
  return `
    <div class="block-wrapper">
      <div class="block-inner">
        <a href="${redirectURL}" target="_blank">
          <div class="block">
            <div class="block-image-wrapper">
              <img src="${imageURL}" class="block-image" alt="OPGG Screenshot"/>
            </div>
            <div class="block-text">
              <div class="block-text-title">
                ${title}
              </div>
              <div class="block-text-description">
                ${description}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  `;
}
*/