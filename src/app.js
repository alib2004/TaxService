let hovericon = document.querySelector(".hovericon");
let p = document.querySelectorAll(".design p");
let iconmenu = document.querySelector(".icon-open-menu");
let menumobile = document.querySelector(".menu-mobile");
hovericon.addEventListener("mouseover", () => {
  p.forEach((element) => {
    element.classList.remove("ops");
  });
});
hovericon.addEventListener("mouseout", () => {
  p.forEach((element) => {
    element.classList.add("ops");
  });
});
iconmenu.addEventListener("click", () => {
  menumobile.classList.toggle("d-none");
});
