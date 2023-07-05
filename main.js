let todoItems = [];

class CreateTodo {
  constructor(taskText) {
    this.text = taskText;
    this.checked = false;
    this.id = Date.now() * Math.random() * 10000;
  }
}

const buttonAddTask = document.getElementById('addTask');
buttonAddTask.addEventListener('click', addTodo);

function addTodo() {
  const inputTask = document.getElementById('inputTask');
  const textInput = inputTask.value;

  if (textInput === '') {
    alert('Please enter a task');
    return;
  }

  const toDo = new CreateTodo(textInput);
  todoItems.push(toDo);
  renderTodo();

  inputTask.value = '';
  inputTask.focus();
}

function renderTodo() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todoItems.forEach((toDo) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = toDo.checked;

    listItem.textContent = toDo.text;
    listItem.appendChild(checkbox);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    listItem.appendChild(span);

    todoList.appendChild(listItem);

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        listItem.style.textDecoration = 'line-through';
        listItem.style.color = 'red';
        listItem.style.backgroundColor = '#FFEFD5';
      } else {
        listItem.style.textDecoration = 'none';
        listItem.style.color = 'black';
        listItem.style.backgroundColor = '#FFFACD';
      }
    });

    listItem.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      } else if (e.target.tagName === 'SPAN') {
        const listItem = e.target.parentElement;
        const checkbox = listItem.querySelector('input[type="checkbox"]');
        const isChecked = checkbox.checked;
        const index = Array.from(listItem.parentElement.children).indexOf(
          listItem,
        );
        if (index !== -1) {
          todoItems.splice(index, 1);
          renderTodo();
        }
      }
    });
  });
}

const removeTaskButton = document.getElementById('removeTask');
removeTaskButton.addEventListener('click', removeLastTask);

function removeLastTask() {
  if (todoItems.length === 0) {
    alert('The list is empty');
    return;
  }

  const response = confirm('Are you sure you want to do that?');
  if (response) {
    console.log('Ok was pressed');
    todoItems.shift();
    renderTodo();
  } else {
    console.log('Cancel was pressed');
  }
}

const removeAllButton = document.getElementById('removeAllTaskButton');
removeAllButton.addEventListener('click', function () {
  if (todoItems.length === 0) {
    alert('The list is empty');
    return;
  }

  const response = confirm('Are you sure you want to do that?');
  if (response) {
    console.log('Ok was pressed');
    todoItems = [];
    renderTodo();
  } else {
    console.log('Cancel was pressed');
  }
});

function getDateTime() {
  const dateTimeLine = document.getElementById('dateTime');
  let today = new Date();
  let date =
    today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = date + '  ' + time;
  console.log(dateTime);
  dateTimeLine.innerHTML = dateTime;
}
getDateTime();
setInterval(getDateTime, 1000);
renderTodo();
