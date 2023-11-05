const toggleMenu = () => {
  const el = document.querySelector(".navbar-menu");
  el.classList.toggle("is-active");
};

const skills = ["HTML", "CSS", "JavaScript", "React.js", "Vue.js", "Node.js"];

const skillsContainer = document.querySelector(".skills-container");

skills.forEach((item) => {
  const skillsItem = document.createElement("span");
  skillsItem.classList.add("tag");
  skillsItem.classList.add("is-danger");
  skillsItem.classList.add("is-large");
  skillsItem.textContent = item;
  skillsContainer.appendChild(skillsItem);
});
