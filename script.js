function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        li.className = "taskItem";

        var checkButton = document.createElement("button");
        checkButton.className = "checkButton"; // Add a class for styling
        checkButton.onclick = toggleCheck;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.onclick = deleteTask;

        li.appendChild(checkButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function toggleCheck() {
    this.classList.toggle("checked");
    // Toggle the presence of the check symbol
    if (this.classList.contains("checked")) {
        this.textContent = "✓";
    } else {
        this.textContent = "";
    }
}

function deleteTask() {
    this.parentNode.remove();
}

document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});
