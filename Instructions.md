# Building a To-Do App with Flask and JavaScript

## Introduction

In this tutorial, you will create a simple web-based To-Do app using **Python Flask**, **HTML**, and **JavaScript**. Each step introduces a new feature or concept, gradually building up your skills.

---

## Class 1: Setting Up the Project

### Objective

You will create a basic project structure and use Flask to serve a simple web page.

### Instructions

1. Run the following commands to create the following folder structure:

```powershell
# Navigate to the directory where you want to create the project
cd "\\YESHIVANAS\home\flast\"
# Create the main project directory
mkdir web_todo_app
# Navigate into the project directory
cd web_todo_app
# Create the static and templates subdirectories
mkdir static, templates
# Create the app.py file
New-Item -Path app.py -ItemType File
```
   
```plaintext
todo_app/
├── static/
├── templates/
└── app.py
```

2. Open your text editor or IDE and create a file called `app.py`. Paste the following code into it:  
   
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
```

3. In the `templates/` folder, create a file called `index.html` and add this code:  
   
```html
<!DOCTYPE html>
<html>
<head>
    <title>To-Do App</title>
</head>
<body>
    <h1>My To-Do List</h1>
</body>
</html>
```

4. Run the Flask app:  
     
   - Open a terminal and navigate to the `todo_app` folder.  
   - Run the command:  
       
     `python app.py`  
       
   - Open your browser and go to `http://127.0.0.1:5000/`. You should see the title and heading.

---

## Class 2: Adding an Input Field

### Objective

You will add an input field for entering new tasks.

### Instructions

1. Open the `index.html` file and update it with an input box and a button. The `onclick` attribute directly links the button's click event to the `addTask()` JavaScript function.
   
```html
<!DOCTYPE html>
<html>
<head>
    <title>To-Do App</title>
</head>
<body>
    <h1>My To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter a new task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
    <script>
        function addTask() {
            alert("This button will add a task later!");
        }  
    </script>
</body>
</html>
```

2. Save the file and reload your browser.  
     
   - The input field and button should appear.  
   - Clicking the button will show an alert message.

---

## Class 3: Adding a hardcoded To-Do List

### Objective

You will manually add some tasks to the `<ul>` element in your HTML. This will show how lists are structured in HTML and allow you to visualize the static list on your webpage.

### Instructions

1. Open the `index.html` file and update the `<ul>` element with hardcoded `<li>` items:  
   
```html
<ul id="taskList">
    <li>Buy groceries</li>
    <li>Clean the house</li>
    <li>Finish homework</li>
</ul>
```

2. Save the file and reload your browser.  
     
   - You should see the three hardcoded tasks displayed as a bulleted list.  
       
3. Open your browser’s **Developer Tools → Elements tab** and observe the hardcoded `<li>` element added to the `<ul>`.

---

## Class 4: Adding Tasks to the List

### Objective

You will write JavaScript to add new tasks to the list dynamically.

### Instructions

1. Add the following `addTask` function inside the `<script>` tag in your HTML file:  
   
```html
<script>
    function addTask() {
        const input = document.getElementById("taskInput"); 
        const taskList = document.getElementById("taskList");
        if (input.value.trim() !== "") {
            const newTask = document.createElement("li");
            newTask.textContent = input.value;
            taskList.appendChild(newTask);
            input.value = "";
        }
    }
</script>
```

2. Save the file and reload your browser.  
     
   - Enter a task in the input field and click "Add Task".  
   - Open your browser’s **Developer Tools → Elements tab** and observe the new `<li>` element added to the `<ul>`.

---

## Class 5: Moving JavaScript to an External File

### Objective

You will move your JavaScript code to an external file for better organization. The separation of JavaScript into a dedicated file makes the code easier to manage and reuse, especially as your app grows in complexity.

### Instructions

1. Create a new file in the `static/` folder called `script.js`. Add the following code (cut and paste from the `index.html` file):  
   
```javascript
function addTask() {
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (input.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = input.value;
        taskList.appendChild(newTask);
        input.value = "";
    }
}
```

2. Update the `script` element in your `index.html` file to link to this external script:  
   
```html
<script src="/static/script.js"></script>
```

3. Save the files and reload your browser.  
     
   - Confirm that the functionality remains the same.

---

## Class 6: Using a Form to Submit Tasks

### Objective

You will replace the button with a form and submit tasks using `onsubmit`.

### Instructions

1. Update your `index.html` file to put the input field and button in a form:  
   
```html
<form id="taskForm" onsubmit="addTask(event)">
    <input type="text" id="taskInput" placeholder="Enter a new task">
    <button type="submit">Add Task</button>
</form>
```

2. Update your `script.js` file by adding `event.preventDefault()`. This stops the form from refreshing the page or navigating to the form's `action` URL, allowing the JavaScript function to handle the input instead.:  
   
```javascript
function addTask(event) {
    event.preventDefault();
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    if (input.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = input.value;
        taskList.appendChild(newTask);
        input.value = "";
    }
}
```

3. Save the files and test:  
     
   - Enter a task in the input field and press Enter or click "Add Task".  
   - Observe the new task added to the list.

---

## Class 7: Adding a Delete Button

### Objective

You will add a "Delete" button to each task to remove it from the list.

### Instructions

1. Update your `script.js` file. This update makes `addTask()` dynamically add a `<li>` item and attach a Delete button to each task. The Delete button includes a function to remove the task when clicked.  
   
```javascript
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
```

2. Save the files and test:  
     
   - Add a task, then click the "Delete" button to remove it.  
   - Open **Developer Tools → Elements tab** to see how the `<li>` is removed.

---

## Next Steps

You now have a working To-Do app with basic functionality! In the next steps, you can:

1. Use Flask to store tasks in a JSON file.  
2. Fetch tasks dynamically when the page loads.  
3. Add styles using CSS.
