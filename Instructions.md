# Building a Calculator App with Flask and JavaScript

## Introduction

In this tutorial, you will create a simple web-based Calculator app using **Python Flask**, **HTML**, and **JavaScript**. Each step introduces a new feature or concept, gradually building up your skills.

---

## Class 1: Setting Up the Project

### Objective

You will create a basic project structure and use Flask to serve a simple web page.

### Instructions

1. Run the following commands to create the following folder structure:

```powershell
# Navigate to the directory where you want to create the project
cd "\YESHIVANAS\home\flast\"
# Create the main project directory
mkdir web_calculator_app
# Navigate into the project directory
cd web_calculator_app
# Create the static and templates subdirectories
mkdir static, templates
# Create the app.py file
New-Item -Path app.py -ItemType File
```

```plaintext
web_calculator_app/
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
    <title>Calculator App</title>
</head>
<body>
    <h1>Simple Calculator</h1>
</body>
</html>
```

4. Run the Flask app:

   - Open a terminal and navigate to the `web_calculator_app` folder.
   - Run the command:

     `python app.py`

   - Open your browser and go to `http://127.0.0.1:5000/`. You should see the title and heading.

---

## Class 2: Creating the Calculator Layout

### Objective

You will add an input field and some buttons for digits and operations.

### Instructions

Update the `index.html` file to include a calculator display and buttons:

```html
<body>
    <h1>Simple Calculator</h1>
    <input type="text" id="display" readonly>
    <div>
        <button onclick="press('1')">1</button>
        <button onclick="press('2')">2</button>
        <button onclick="press('3')">3</button>
        <button onclick="press('+')">+</button>
    </div>
    <script>
        function press(value) {
            alert("Button pressed: " + value);
        }
    </script>
</body>
```

Reload the browser and test clicking the buttons. You should see an alert with the button value.

---

## Class 3: Displaying Button Input

### Objective

You will display the button value inside the input field instead of showing an alert.

### Instructions

Update the `press()` function in your `<script>`:

```html
<script>
    function press(value) {
        const display = document.getElementById("display");
        display.value += value;
    }
</script>
```

Now clicking a button should update the input field.

---

## Class 4: Adding More Buttons

### Objective

You will add more buttons to complete the calculator interface.

### Instructions

Add buttons for all digits, operators, and an equals and clear button:

```html
<div>
    <button onclick="press('4')">4</button>
    <button onclick="press('5')">5</button>
    <button onclick="press('6')">6</button>
    <button onclick="press('-')">-</button>
</div>
<div>
    <button onclick="press('7')">7</button>
    <button onclick="press('8')">8</button>
    <button onclick="press('9')">9</button>
    <button onclick="press('*')">*</button>
</div>
<div>
    <button onclick="press('0')">0</button>
    <button onclick="press('.')">.</button>
    <button onclick="calculate()">=</button>
    <button onclick="clearDisplay()">C</button>
</div>
```

And update the JavaScript functions:

```html
<script>
    function press(value) {
        const display = document.getElementById("display");
        display.value += value;
    }

    function clearDisplay() {
        document.getElementById("display").value = "";
    }

    function calculate() {
        const display = document.getElementById("display");
        display.value = eval(display.value);
    }
</script>
```

---

## Class 5: Moving JavaScript to an External File

### Objective

You will move your JavaScript code to a file for better organization.

### Instructions

1. Create a file called `script.js` in the `static/` folder:

```javascript
function press(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    display.value = eval(display.value);
}
```

2. Link it in `index.html` before the closing `</body>` tag:

```html
<script src="/static/script.js"></script>
```

Reload your browser and test again. Everything should still work.

---

## Class 6: Preventing Invalid Input

### Objective

You will add error handling to avoid calculator crashes.

### Instructions

Update the `calculate()` function in `script.js` to handle invalid expressions:

```javascript
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
```

Now the app will display "Error" if the input cannot be evaluated.

---

## Class 7: Applying Inline Styles for Layout

### Objective

You will apply inline styles directly to HTML elements to improve the layout and appearance of the calculator.

### Instructions

Update your `index.html` file as follows to style the calculator using inline styles:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Calculator App</title>
</head>
<body style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f4;">
    <div style="text-align: center;">
        <h1 style="font-size: 36px;">Simple Calculator</h1>
        <input type="text" id="display" readonly style="width: 240px; height: 40px; font-size: 20px; margin-bottom: 10px;"><br>
        <div>
            <button onclick="press('1')" style="width: 60px; height: 40px;">1</button>
            <button onclick="press('2')" style="width: 60px; height: 40px;">2</button>
            <button onclick="press('3')" style="width: 60px; height: 40px;">3</button>
            <button onclick="press('+')" style="width: 60px; height: 40px;">+</button>
            <br>
            <button onclick="press('4')" style="width: 60px; height: 40px;">4</button>
            <button onclick="press('5')" style="width: 60px; height: 40px;">5</button>
            <button onclick="press('6')" style="width: 60px; height: 40px;">6</button>
            <button onclick="press('-')" style="width: 60px; height: 40px;">-</button>
            <br>
            <button onclick="press('7')" style="width: 60px; height: 40px;">7</button>
            <button onclick="press('8')" style="width: 60px; height: 40px;">8</button>
            <button onclick="press('9')" style="width: 60px; height: 40px;">9</button>
            <button onclick="press('*')" style="width: 60px; height: 40px;">*</button>
            <br>
            <button onclick="press('0')" style="width: 60px; height: 40px;">0</button>
            <button onclick="press('.') " style="width: 60px; height: 40px;">.</button>
            <button onclick="calculate()" style="width: 60px; height: 40px;">=</button>
            <button onclick="clearDisplay()" style="width: 60px; height: 40px;">C</button>
        </div>
    </div>
    <script src="/static/script.js"></script>
</body>
</html>
```

---

## Class 8: Moving Styles to a `<style>` Tag

### Objective

You will move the inline styles into a `<style>` block in the `<head>` section for better organization.

### Instructions

1. Replace the inline styles in `index.html` with a `<style>` block like this:

```html
<head>
    <title>Calculator App</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            text-align: center;
        }
        #display {
            width: 240px;
            height: 40px;
            font-size: 20px;
            margin-bottom: 10px;
        }
        button {
            width: 60px;
            height: 40px;
            margin: 2px;
        }
    </style>
</head>
```

2. Then update your HTML elements to use the `class` names and IDs as shown above.

---

## Class 9: Moving Styles to a CSS File

### Objective

You will move the styles into an external CSS file for cleaner structure and reusability.

### Instructions

1. Create a file called `style.css` in the `static/` folder with the following content:

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}
.container {
    text-align: center;
}
#display {
    width: 240px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 10px;
}
button {
    width: 60px;
    height: 40px;
    margin: 2px;
}
```

2. Link this file in your `index.html` using the `<link>` tag:

```html
<head>
    <title>Calculator App</title>
    <link rel="stylesheet" href="/static/style.css">
</head>
```

---

## Class 10: Final Styling Improvements

### Objective

You will apply final polish to make the calculator look like a proper app.

### Instructions

1. Update your `style.css` file with the following enhancements:

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
    font-family: Arial, sans-serif;
}
.container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
#display {
    width: 260px;
    height: 50px;
    font-size: 24px;
    margin-bottom: 15px;
    text-align: right;
    padding-right: 10px;
}
button {
    width: 60px;
    height: 50px;
    font-size: 18px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #61dafb;
    cursor: pointer;
    transition: background-color 0.2s;
}
button:hover {
    background-color: #21a1f1;
}
```

Now your calculator looks and feels more like a real app!

Here are some ideas for additional features:

1. Add keyboard support using `keydown` events.
2. Store previous calculations in a history list.
