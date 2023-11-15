const listContainer = document.querySelector(".todo-items ul");
const taskBtn = document.querySelector(".task-btn");

listContainer.innerHTML = localStorage.getItem("data");

taskBtn.addEventListener("click", function (e) {
  console.log("clicked");
  const textInput = document.querySelector(".add-task-input");
  const val = textInput.value;

  if (!val) {
    alert("please enter a task");
    return;
  }

  const html = ` <li class="todo-item">
                    <div >
                        <span class="material-symbols-outlined cursor">
                        radio_button_unchecked
                        </span>
                       <p> ${val} </p>
                     </div>
                     <span class="material-symbols-outlined cursor"> delete </span>
                </li>`;

  listContainer.insertAdjacentHTML("beforeend", html);
  save();
});

const todoItems = document.querySelector(".todo-items");

todoItems.addEventListener("click", function (e) {
  const els = [...e.target.parentNode.childNodes];

  const text = e.target.textContent.trim();

  if (text === "delete") {
    e.target.parentNode.remove();
  } else if (text === "radio_button_unchecked") {
    e.target.textContent = "radio_button_checked";
    els[3].style.textDecoration = "line-through";
  } else if (text === "radio_button_checked") {
    e.target.textContent = "radio_button_unchecked";
    els[3].style.textDecoration = "none";
  }
  save();
});

const save = function () {
  localStorage.setItem("data", listContainer.innerHTML);
};
