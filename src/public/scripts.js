const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', async () => {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const category = document.getElementById('task-category').value;
    const dueDate = document.getElementById('task-due-date').value;

    const task = { title, description, category, dueDate };

    const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });

    if (response.ok) {
        const newTask = await response.json();
        addTaskToList(newTask);
    }
});

function addTaskToList(task) {
    const li = document.createElement('li');
    li.textContent = task.title;
    taskList.appendChild(li);
}