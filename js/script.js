let taskInput = document.getElementById("taskInput"),
  addTask = document.getElementById("addTask"),
  listContainer = document.getElementById("listContainer");

addTask.addEventListener("click", function () {
  if (taskInput.value == "") {
    alert("You must have to write something!")
  } else {
    let li = document.createElement("li");
    li.innerHTML = taskInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = " \u00d7 ";
    li.appendChild(span)

    taskInput.value = "";
    saveData()
  }
})

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData()
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
})

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();