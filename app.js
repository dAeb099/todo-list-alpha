const btn = document.getElementById("submitBtn");
const input = document.getElementById("input");
const todoSection = document.getElementById("list");

let todos = [];

document.addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    title: input.value.trim(),
    isCompleted: false,
  });
  function appendItem(item) {
    todoSection.innerHTML += `
    <div>
      <h3>${item.title}</h3>
      <button>Complete</button>
    </div>
    `;
  }
  appendItem(todos.at(-1));
});
