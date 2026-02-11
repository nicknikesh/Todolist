# Ex03 To-Do List using JavaScript
## Date:11-02-2026

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
```
NIKESH KUMAR C
212223040132
```
index.html
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
style.css
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

.status-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 14px;
}

.status-item:last-of-type {
    margin-bottom: 0;
}

.status-item i {
    font-size: 18px;
    color: #dc1414;
    width: 25px;
    text-align: center;
}

.status-item .label {
    font-weight: 600;
    color: #2d2d2d;
}

.status-item .value {
    font-weight: bold;
    color: #dc1414;
    font-size: 16px;
}

/* ===== Progress Bar ===== */
.progress-bar {
    width: 100%;
    height: 14px;
    background: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 15px;
    border: 2px solid #dc1414;
}

#progressFill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #dc1414, #8b0000);
    transition: width 0.4s ease;
    box-shadow: 0 0 10px rgba(220, 20, 20, 0.6);
}

/* ===== Input Area ===== */
.input-area {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 20px;
}

.input-area i {
    font-size: 24px;
    color: #dc1414;
}

input {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 2px solid #dc1414;
    font-size: 15px;
    transition: all 0.3s ease;
    background-color: #fff;
    color: #2d2d2d;
}

input:focus {
    outline: none;
    border-color: #8b0000;
    box-shadow: 0 0 8px rgba(220, 20, 20, 0.4);
    background-color: #fffbfb;
}

input::placeholder {
    color: #999;
}

/* ===== Buttons ===== */
button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #dc1414, #8b0000);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 15px;
    box-shadow: 0 4px 12px rgba(220, 20, 20, 0.3);
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(220, 20, 20, 0.5);
    background: linear-gradient(135deg, #8b0000, #4d0000);
}

button:active {
    transform: translateY(0);
}

/* ===== Task List ===== */
ul {
    list-style: none;
    padding: 0;
    margin-top: 18px;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    background: linear-gradient(135deg, #ffffff, #fafafa);
    margin-top: 10px;
    border-radius: 8px;
    font-size: 15px;
    border-left: 4px solid #dc1414;
    box-shadow: 0 2px 8px rgba(220, 20, 20, 0.1);
    transition: all 0.3s ease;
}

li:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(220, 20, 20, 0.2);
}

/* Completed Style */
.completed {
    text-decoration: line-through;
    color: #999;
    background: linear-gradient(135deg, #f0f0f0, #e8e8e8);
    border-left-color: #999;
}

/* Delete Button */
.delete-btn {
    background: linear-gradient(135deg, #ff0000, #cc0000);
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-size: 13px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(220, 20, 20, 0.4);
}

.delete-btn:hover {
    background: linear-gradient(135deg, #cc0000, #8b0000);
    box-shadow: 0 4px 10px rgba(220, 20, 20, 0.6);
    transform: scale(1.05);
}
```
script.js
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
script.jss
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
    del.textContent = "X";
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
<img width="1920" height="1080" alt="Screenshot 2026-02-11 154633" src="https://github.com/user-attachments/assets/b70b4d3c-5112-4cdf-81a0-dfae40fb874c" />



## RESULT
The program for creating To-do list using JavaScript is executed successfully.
