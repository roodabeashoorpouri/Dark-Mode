const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classlist.toggle("dark")
    ? (toggle.firstElementChild.className = " far fa-moon")
    : (toggle.firstElementChild.className = " far fa-sun");
});
