let tasks = [];

export function addTask(task) {
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks)); 
}
export function displayTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = ''; 
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}