const navli = document.querySelectorAll("nav ul li a");
const active = document.querySelector(".active");
navli.forEach((nav) => {
  nav.addEventListener("click", () => {
    navli.forEach((nav) => nav.classList.remove("active"));
    nav.classList.add("active");
  });
});
