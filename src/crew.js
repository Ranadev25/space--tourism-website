import './style.css'






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



const slider = document.querySelector(".crew");
  const totalSlide = slider.children.length;
  let Index = 0;
  function slideNext() {
    Index = (Index + 1) % totalSlide;
    slider.style.transform = `translateX(-${Index * 100}%`;
  }
  setInterval(slideNext,2000)