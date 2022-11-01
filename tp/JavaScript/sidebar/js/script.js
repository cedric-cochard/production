const sidebar = document.getElementById('side-bar');
const content = document.querySelector('.content');
console.log(sidebar);

btn.addEventListener("click", () => {
  sidebar.classList.toggle('active');
});

content.addEventListener('click', () => {
  sidebar.classList.remove('active');
});