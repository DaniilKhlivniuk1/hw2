import { addTask, displayTasks } from './modules/task.js';

const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


document.addEventListener('DOMContentLoaded', displayTasks);


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value;
  addTask(task);
  taskInput.value = ''; 
  displayTasks();
});