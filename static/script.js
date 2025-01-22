function addTask(event) {
    event.preventDefault();
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (input.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = input.value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        input.value = "";
    }
}
