const form = document.querySelector('form');
console.log(form);

const storeList = () => {
  window.localStorage.todoList = list.innerHTML;
};

const getTodos = () => {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquer sur un todo pour le supprimer</li>`
  }
};
getTodos();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(item.value);
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('checked')) {
    e.target.remove();
  } else {
    e.target.classList.add('checked');
  }
  storeList();
});