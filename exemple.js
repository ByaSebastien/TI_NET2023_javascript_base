document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    // const filterAllButton = document.getElementById('filterAll');
    // const filterActiveButton = document.getElementById('filterActive');
    // const filterCompletedButton = document.getElementById('filterCompleted');
    // const clearCompletedButton = document.getElementById('clearCompleted');

    addTaskButton.addEventListener('click', () => addTask(taskInput.value));
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // filterAllButton.addEventListener('click', filterAllTasks);
    // filterActiveButton.addEventListener('click', filterActiveTasks);
    // filterCompletedButton.addEventListener('click', filterCompletedTasks);
    // clearCompletedButton.addEventListener('click', clearCompleted);

    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(storedTasks);
    storedTasks.forEach((task) => {
        addTask(task.text, task.completed);
    });
});

function addTask(taskText, completed = false) {
    taskText = taskText.trim();
    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement('li');
    const taskName = document.createElement('p');
    const taskButton = document.createElement('button');

    taskItem.draggable = true;
    taskItem.className = 'taskItem';
    taskName.innerText = taskText;
    taskButton.innerText = 'Supprimer';

    if (completed) {
        taskItem.className = 'completed';
    }

    taskButton.addEventListener('click', deleteTask);

    taskItem.appendChild(taskName);
    taskItem.appendChild(taskButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskInput.focus();

    updateLocalStorage();
}

function deleteTask() {
    taskList.removeChild(this.parentNode);
}

function updateLocalStorage() {
    const taskItems = taskList.getElementsByTagName('li');
    console.log(taskItems);
    const tasks = Array.from(taskItems).map((taskItem) => {
        return {
            text: taskItem.firstChild.textContent,
            completed: taskItem.classList.contains('completed')
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}