if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registered!'))
      .catch((error) => console.error('Service Worker registration failed:', error));
  }
  
document.addEventListener('DOMContentLoaded', ()=>{
    loadTasks();
    document.querySelector("#task-input").addEventListener("keydown", (e)=>{
        if(e.key === 'Enter'){
            addTask();
        }
    })
});
function addTask(){
    let text = document.querySelector("#task-input");
    let textValue = text.value.trim();
    if (textValue){
        let tasks = document.querySelector(".tasks");
        let task = document.createElement("li");
        let deleteTask = document.createElement("button");
        let checkBtn = document.createElement("img");
        

        checkBtn.classList.add("check-button");
        checkBtn.addEventListener("click",()=>{
            checkBtn.classList.toggle("checked");
            task.classList.toggle("checked-task");
            saveTasks();
        })

        task.textContent = textValue;
        task.classList.add("task");

        deleteTask.textContent = "X";
        deleteTask.classList.add("delete-task-btn");
        deleteTask.addEventListener("click", ()=>{
            task.remove();
            deleteTask.remove();
            checkBtn.remove();
            saveTasks();
        });

        tasks.appendChild(checkBtn);
        tasks.appendChild(task);
        tasks.appendChild(deleteTask);
        text.value = "";
        saveTasks();
    }
    else{
        alert("Please enter something!!");
    }
}   


function saveTasks(){
    let tasks = document.querySelectorAll(".task");
    let taskList = [];
    tasks.forEach(task=>{
        taskList.push({text: task.textContent,
            completed: task.classList.contains("checked-task"),
        });
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
};

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((task) => {
        addTaskFromStorage(task.text, task.completed);
    });
}
function addTaskFromStorage(textValue, isCompleted){
    let tasks = document.querySelector(".tasks");
    let task = document.createElement("li");
    let deleteTask = document.createElement("button");
    let checkBtn = document.createElement("img");
    

    checkBtn.classList.add("check-button");
    if(isCompleted){
        checkBtn.classList.toggle("checked");
        task.classList.toggle("checked-task");  
    }

    checkBtn.addEventListener("click",()=>{
        checkBtn.classList.toggle("checked");
        task.classList.toggle("checked-task");
        saveTasks();
    });

    task.textContent = textValue;
    task.classList.add("task");

    deleteTask.textContent = "X";
    deleteTask.classList.add("delete-task-btn");
    deleteTask.addEventListener("click", ()=>{
        task.remove();
        deleteTask.remove();
        checkBtn.remove();
        saveTasks();
    });

    tasks.appendChild(checkBtn);
    tasks.appendChild(task);
    tasks.appendChild(deleteTask);
}

// document.addEventListener('DOMContentLoaded', loadTasks);

// function createTaskElement(textValue, isCompleted = false) {
//     let tasks = document.querySelector(".tasks");

//     let task = document.createElement("li");
//     task.textContent = textValue;
//     task.classList.add("task");
//     if (isCompleted) task.classList.add("checked-task");

//     let checkBtn = document.createElement("img");
//     checkBtn.classList.add("check-button");
//     if (isCompleted) checkBtn.classList.add("checked");
//     checkBtn.addEventListener("click", () => {
//         checkBtn.classList.toggle("checked");
//         task.classList.toggle("checked-task");
//         saveTasks();
//     });

//     let deleteTask = document.createElement("button");
//     deleteTask.textContent = "X";
//     deleteTask.classList.add("delete-task-btn");
//     deleteTask.addEventListener("click", () => {
//         task.remove();
//         saveTasks();
//     });

//     task.prepend(checkBtn);
//     task.appendChild(deleteTask);
//     tasks.appendChild(task);
// }

// function addTask() {
//     let text = document.querySelector("#task-input");
//     let textValue = text.value.trim();
//     if (textValue) {
//         createTaskElement(textValue);
//         saveTasks();
//         text.value = "";
//     } else {
//         alert("Please enter something!!");
//     }
// }

// function saveTasks() {
//     let tasks = [...document.querySelectorAll(".task")].map(task => ({
//         text: task.textContent.replace("X", "").trim(),
//         completed: task.classList.contains("checked-task")
//     }));
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function loadTasks() {
//     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.forEach(task => createTaskElement(task.text, task.completed));
// }
