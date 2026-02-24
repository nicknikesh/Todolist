const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");
const pendingEl = document.getElementById("pending");
const percentEl = document.getElementById("percent");
const progressFill = document.getElementById("progressFill");

window.onload = loadTasks;

/* ================= ADD TASK ================= */
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    createTaskElement(text);
    taskInput.value = "";

    saveTasks();
    updateStatus();
}

/* ================= CREATE ELEMENT ================= */
function createTaskElement(text, completed = false) {

    const li = document.createElement("li");
    li.textContent = text;

    if (completed) li.classList.add("completed");

    li.onclick = () => {
        li.classList.toggle("completed");
        saveTasks();
        updateStatus();
    };

    const del = document.createElement("button");
    del.textContent = "✕";
    del.className = "delete-btn";

    del.onclick = (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
        updateStatus();
    };

    li.appendChild(del);
    taskList.appendChild(li);
}

/* ================= SAVE ================= */
function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* ================= LOAD ================= */
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });

    updateStatus();
}

/* ================= STATUS + PERCENTAGE ================= */
function updateStatus() {

    const items = document.querySelectorAll("#taskList li");

    const total = items.length;
    const completed = document.querySelectorAll(".completed").length;
    const pending = total - completed;

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    totalEl.textContent = total;
    completedEl.textContent = completed;
    pendingEl.textContent = pending;
    percentEl.textContent = percent + "%";

    progressFill.style.width = percent + "%";
}
