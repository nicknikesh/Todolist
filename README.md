# Ex03 To-Do List using JavaScript
## Date: 17.02.2025

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM

### index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Advanced To-Do App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="stylesheet" href="style.css" />
</head>

<body>

<div class="container">
    <div class="header">
        <div class="header-image">
            <i class="fas fa-tasks"></i>
        </div>
        <div class="header-text">
            <h1>My To-Do List</h1>
            <p>Organize Your Tasks Efficiently</p>
        </div>
    </div>

    <!-- Activity Status -->
    <div class="status-box">
        <div class="status-item">
            <i class="fas fa-list"></i>
            <div><span class="label">Total:</span> <span id="total" class="value">0</span></div>
        </div>
        <div class="status-item">
            <i class="fas fa-check-circle"></i>
            <div><span class="label">Completed:</span> <span id="completed" class="value">0</span></div>
        </div>
        <div class="status-item">
            <i class="fas fa-clock"></i>
            <div><span class="label">Pending:</span> <span id="pending" class="value">0</span></div>
        </div>
        <div class="status-item">
            <i class="fas fa-chart-pie"></i>
            <div><span class="label">Progress:</span> <span id="percent" class="value">0%</span></div>
        </div>

        <div class="progress-bar">
            <div id="progressFill"></div>
        </div>
    </div>

    <div class="input-area">
        <i class="fas fa-plus-circle"></i>
        <input type="text" id="taskInput" placeholder="Enter a new task..." />
        <button onclick="addTask()"><i class="fas fa-plus"></i> Add</button>
    </div>

    <ul id="taskList"></ul>

</div>

<script src="script.js"></script>
</body>
</html>
```

### style.css
```
/* ===== Global ===== */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    color: #333;
}

/* ===== Bigger Center Box ===== */
.container {
    background: #ffffff;
    width: 480px;              /* Bigger box */
    padding: 35px;
    border-radius: 18px;
    box-shadow: 0 15px 50px rgba(220, 20, 20, 0.3), 0 0 0 3px #dc1414;
    transition: 0.3s;
    border-left: 8px solid #dc1414;
}

.container:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 60px rgba(220, 20, 20, 0.4), 0 0 0 3px #8b0000;
}

/* ===== Header with Image and Text ===== */
.header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid #dc1414;
}

.header-image {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #dc1414, #8b0000);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.header-image i {
    font-size: 36px;
    color: white;
}

.header-text h1 {
    margin: 0;
    font-size: 28px;
    color: #2d2d2d;
    text-shadow: 2px 2px 4px rgba(220, 20, 20, 0.1);
}

.header-text p {
    margin: 5px 0 0 0;
    font-size: 14px;
    color: #dc1414;
    font-weight: 600;
}

/* ===== Status Box ===== */
.status-box {
    background: linear-gradient(135deg, #f8f8f8, #f0f0f0);
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 25px;
    border-left: 5px solid #dc1414;
    box-shadow: 0 4px 12px rgba(220, 20, 20, 0.1);
}
```

### script.js
```
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

```
## OUTPUT

![alt text](<Screenshot 2026-02-11 154633.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
