import './style.css';
import './custom.css';



// navigrationver start
const iconClose = document.querySelector(".icon-close")
const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".navmenu");
const li = navmenu.querySelectorAll("li").forEach(li => {
  const a = li.querySelector("a")

  hamburger.addEventListener("click", () => {
    iconClose.style.display = "inline-block";
    hamburger.style.display = "none";
    navmenu.classList.add("menuver")
    a.style.padding = "5px";
    a.style.borderColor = "white"
  })

});

iconClose.addEventListener("click", () => {
  iconClose.style.display = "none";
    hamburger.style.display = "inline-block";
    navmenu.classList.remove("menuver")
})
// navigrationver end
  


// technology start

const numberOne = document.querySelector(".number-one");
const numberTwo = document.querySelector(".number-two");
const numberThree = document.querySelector(".number-three");
const vehicleFirst = document.querySelector(".vehicle-first");
const vehicle2nd = document.querySelector(".vehicle-2nd");
const profasion = document.querySelector(".profasion");
const parson = document.querySelector(".parson-names");
const detailes = document.querySelector(".detailes");



numberOne.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "white";
  e.target.style.color = "black";
  numberTwo.style.backgroundColor = "black";
  numberTwo.style.color = "white";
  numberThree.style.backgroundColor = "black";
  numberThree.style.color = "white";
  vehicleFirst.src = "/technology/image-launch-vehicle-landscape.jpg";
  vehicle2nd.src = "/technology/image-launch-vehicle-portrait.jpg";
  profasion.inntext = "The terminology...";
  parson.innerHTML = "Launch vehicle";
  detailes.innerHTML = " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
})


numberTwo.addEventListener("click", e => {
  e.target.style.backgroundColor = "white";
  e.target.style.color = "black";
  numberOne.style.backgroundColor = "black";
  numberOne.style.color = "white";
  numberThree.style.backgroundColor = "black";
  numberThree.style.color = "white";
  vehicleFirst.src = "./../technology/image-space-capsule-landscape.jpg";
  vehicle2nd.src = "./../technology/image-space-capsule-portrait.jpg";
  profasion.inntext = "The terminology...";
  parson.innerHTML = "Space capsule";
  detailes.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
})

numberThree.addEventListener("click", e => {
  e.target.style.backgroundColor = "white";
  e.target.style.color = "black";
  numberTwo.style.backgroundColor = "black";
  numberTwo.style.color = "white";
  numberOne.style.backgroundColor = "black";
  numberOne.style.color = "white";
  vehicleFirst.src = "./../technology/image-spaceport-landscape.jpg";
  vehicle2nd.src = "./../technology/image-spaceport-portrait.jpg";
  profasion.inntext = "The terminology...";
  parson.innerHTML = "Spaceport";
  detailes.innerHTML = " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
})

// technology end