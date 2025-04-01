document.addEventListener("DOMContentLoaded", function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    sessionStorage.setItem("taskCount", "0");

    function renderTasks() {
        const toDoList = document.getElementById("toDoList");
        toDoList.innerHTML = "";
        tasks.forEach((task, index) => {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            const taskSpan = document.createElement("span");
            taskSpan.textContent = task.text;

            const taskContainer = document.createElement("div");
            taskContainer.appendChild(checkbox);
            taskContainer.appendChild(taskSpan);

            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    tasks.splice(index, 1);
                    saveTasks();
                    renderTasks();
                }
            });

            toDoList.appendChild(taskContainer);
        });
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function updateTaskCount() {
        const taskCount = parseInt(sessionStorage.getItem("taskCount"));
        document.getElementById("taskCountDisplay").textContent = `Tasks added this session: ${taskCount}`;
    }

    document.getElementById("toDoForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const toDoInput = document.getElementById("toDo").value.trim();
        if (toDoInput) {
            tasks.push({ text: toDoInput, completed: false });
            let taskCount = parseInt(sessionStorage.getItem("taskCount"));
            taskCount++;
            sessionStorage.setItem("taskCount", taskCount.toString());
            saveTasks();
            renderTasks();
            updateTaskCount();
            document.getElementById("toDo").value = "";
        } else {
            alert("Please enter a task.");
        }
    });
    renderTasks();
    updateTaskCount();
});




function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split('=');
        if (key.trim() === name) return value.trim();
    }
    return null;
}

function defaultSetting() {
    document.getElementById('body').style = "background-color: #fcf6d7";
    document.getElementById('header2').style = "background-color: #d77e70";
    setCookie('theme', 'default', 7);
}

function dark() {
    document.getElementById('body').style = "background-color: #0b0701; color: #fdfdfe";
    document.getElementById('header2').style = "background-color: #333397";
    setCookie('theme', 'dark', 7);
}

function light() {
    document.getElementById('body').style = "background-color: #fdfdfc";
    document.getElementById('header2').style = "background-color: #feb082";
    setCookie('theme', 'light', 7);
}

document.addEventListener('DOMContentLoaded', function () {
    window.onload = function () {
        const savedTheme = getCookie('theme') || 'default';
        if (savedTheme === 'dark') {
            dark();
        } else if (savedTheme === 'light') {
            light();
        } else {
            defaultSetting();
        }

    const radioButton = document.getElementById(savedTheme);
    if (radioButton) {
        radioButton.checked = true;
    }
};

    document.getElementById('default').addEventListener('click', () => {
        defaultSetting();
        setCookie('theme', 'default', 7);
    });
    document.getElementById('dark').addEventListener('click', () => {
        dark();
        setCookie('theme', 'dark', 7);
    });
    document.getElementById('light').addEventListener('click', () => {
        light();
        setCookie('theme', 'light', 7);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    async function DogImageFunc() {
        const imageElement = document.getElementById('dogImage');
        const errorMessageElement = document.getElementById('errorMessage');

        try {
            errorMessageElement.style.display = 'none';
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!response.ok) {
                throw new Error('Dog image failed');
            }
            const data = await response.json();
            imageElement.src = data.message;
            imageElement.alt = 'A random dog image fetched from the API!';

        } catch (error) {
            errorMessageElement.textContent = 'Oops! Something went wrong. Please try again later.';
            errorMessageElement.style.display = 'block';
            console.error('Error fetching dog image:', error);
        }
    }
    document.getElementById('ImageButton').addEventListener('click', DogImageFunc);

    document.addEventListener('DOMContentLoaded', dogImage);
});