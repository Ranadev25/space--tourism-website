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
  



// distaination page starte

const worldimg = document.querySelector(".crew-img");
const images = worldimg.querySelector("img");
const crewInfo = document.querySelector(".crew-info");
const crewTitle = crewInfo.querySelector("h1");
const crewText = crewInfo.querySelector("p");
const distance = document.querySelector(".distance");
const distancenumber = distance.querySelector("h2");
const timeSpeed = document.querySelector('.time');
const timeNumber = timeSpeed.querySelector("h2");

document.addEventListener("DOMContentLoaded", () => {
  mains();
})

const mains = document.querySelector(".mone").addEventListener("click", () => {
  images.src = "/distination/image-moon.png";
  crewTitle.innerText = 'Moon';
  crewText.innerText = ' See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
  distancenumber.innerText = '384,400 km Est.';
  timeNumber.innerText = '3 days';
})
document.querySelector(".mars").addEventListener("click", () => {
  images.src = "/distination/image-mars.png"
  crewTitle.innerText = 'Mars';
  crewText.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
  distancenumber.innerText = '225 mil. km Est.';
  timeNumber.innerText = '9 months';
})
  
document.querySelector(".europa").addEventListener("click", () => { 
  images.src = "/distination/image-europa.png"
  crewTitle.innerText = 'Europa';
  crewText.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
  distancenumber.innerText = '628 mil. km Est.';
  timeNumber.innerText = '3 years';
})
document.querySelector(".titan").addEventListener("click", (e) => { 
  images.src = "/distination/image-titan.png"
  e.preventDefault();
  crewTitle.innerText = 'Titan ';
  crewText.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
  distancenumber.innerText = ' 1.6 bil. km Est.';
  timeNumber.innerText = '7 years';
})
// distaination page ende






