let taskInput = document.getElementById("taskInput"),
  addTask = document.getElementById("addTask"),
  listContainer = document.getElementById("listContainer");
let addSound = new Audio("addTask.mp3");
let deleteTask = new Audio("deleteTask.mp3");
let complete = new Audio("complete.mp3");

addTask.addEventListener("click", function () {
  if (taskInput.value == "") {
    alert("You must have to write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = " \u00d7 ";
    li.appendChild(span);
    addSound.play();

    taskInput.value = "";
    saveData();
  }
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    complete.play();
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
    deleteTask.play();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
