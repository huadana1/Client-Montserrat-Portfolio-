function goToHome() {
  window.open("index.html")
}

function goToSkills() {
  window.open("skills.html")
}

function goToExperience() {
  window.open("experience.html")
}

function contactMe() {
  window.open("contact.html")
}

//enlarges a picture when mouse hovers
function enlargePic(pic) {
  pic.style.height = "100%"
  pic.style.width = "100%"
  pic.style.margin = "0px"
}

//returns enlarged pic to original size when mouse leaves
function normalPic(pic) {
  pic.style.width = "200px"
  pic.style.height = "300px"
  pic.style.marginLeft = "45%"
}
