let dragItem = null;

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');
    const filterAllButton = document.getElementById('filterAllButton');
    const filterActiveButton = document.getElementById('filterActiveButton');
    const filterCompletedButton = document.getElementById('filterCompletedButton');
    const clearCompletedButton = document.getElementById('clearCompletedButton');

    addTaskButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });
    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
    filterAllButton.addEventListener('click', filterAll);
    filterActiveButton.addEventListener('click', filterActive);
    filterCompletedButton.addEventListener('click', filterCompleted);
    clearCompletedButton.addEventListener('click', clearCompleted);
    new Sortable(taskList, {
        group: "shared",
        animation: 150,
        ghostClass: "blue-background-class"
    });

    const taskItems = JSON.parse(localStorage.getItem('tasks'));

    taskItems.forEach((item) => {
        addTask(item.text, item.isCompleted);
    })
});

function addTask(taskText, isCompleted = false) {

    let text = taskText.trim();
    if (text === '') {
        taskInput.value = '';
        taskInput.focus();
        return;
    }

    const taskItem = document.createElement('li');
    const taskName = document.createElement('p');
    const deleteTaskButton = document.createElement('button');

    taskItem.draggable = true;
    taskItem.classList.add('taskItem');
    taskItem.classList.add('list-group-item');
    taskName.innerText = text;
    deleteTaskButton.innerText = 'Supprimer';
    if (isCompleted) {
        taskName.classList.add('completed');
    }

    taskName.addEventListener('click', () => {
        if (taskName.classList.contains('completed')) {
            taskName.classList.remove('completed');
        } else {
            taskName.classList.add('completed');
        }
        updateTaskCount();
        updateLocalStorage();
    });
    deleteTaskButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        updateTaskCount();
        updateLocalStorage();
    });
    taskItem.addEventListener('dragstart', dragStart);
    taskItem.addEventListener('dragend', dragEnd);

    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteTaskButton);

    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();

    updateTaskCount();
    updateLocalStorage();
};

function filterAll() {
    const taskItems = taskList.getElementsByTagName('li');
    Array.from(taskItems).forEach((item) => item.classList.remove('invisible'));
}

function filterActive() {
    filterAll();
    const taskItems = taskList.getElementsByTagName('li');
    Array.from(taskItems).forEach((item) => {
        if (item.firstChild.classList.contains('completed')) {
            item.classList.add('invisible');
        }
    });
}

function filterCompleted() {
    filterAll();
    const taskItems = taskList.getElementsByTagName('li');
    Array.from(taskItems).forEach((item) => {
        if (!item.firstChild.classList.contains('completed')) {
            item.classList.add('invisible');
        }
    });
}

function clearCompleted() {
    const taskItems = taskList.getElementsByTagName('li');
    for (let item of taskItems) {
        if (item.firstChild.classList.contains('completed')) {
            taskList.removeChild(item);
        }
    }
    updateLocalStorage();
}

function dragStart() {
    setTimeout(() => this.classList.add('invisible'), 0);
    dragItem = this;
}

function dragEnd() {
    this.classList.remove('invisible');
    dragItem = null;
}

function updateTaskCount() {
    const taskItems = taskList.getElementsByTagName('li');
    const count = Array.from(taskItems).filter((item) => !item.firstChild.classList.contains('completed')).length;
    taskCount.innerText = `Tâches en cours : ${count}`;
};

function updateLocalStorage() {
    const taskItems = taskList.getElementsByTagName('li');
    const tasks = Array.from(taskItems).map((item) => {
        return {
            text: item.firstChild.innerText,
            isCompleted: item.firstChild.classList.contains('completed')
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

