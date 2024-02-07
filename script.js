const menuBar = document.querySelector(".fa-bars");
const navlist = document.querySelector(".navlist");

menuBar.addEventListener("click", () => {
  navlist.classList.toggle("active");
  menuBar.classList.toggle("fa-xmark");
});
