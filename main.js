let todoItems = [];

class CreateTodo {
  constructor(taskText) {
    this.text = taskText;
    this.checked = false;
    this.id = Date.now() * Math.random() * 10000;
  }
}

// const toDo1 = new CreateTodo('test1');
// const toDo2 = new CreateTodo('test2');
// const toDo3 = new CreateTodo('test3');
// todoItems.push(toDo1);
// todoItems.push(toDo2);
// todoItems.push(toDo3);
// console.log(todoItems);

//Create an event listener for the `"addTask" button` ,with click type event .
const buttonAddTask = document.getElementById('addTask');
buttonAddTask.addEventListener('click', addTodo);

//Build the event handler function and call it `addTodo`
function addTodo() {
  //Retrieve the task text from the `"inputTask"` input field.
  const inputTask = document.getElementById('inputTask');
  const textInput = inputTask.value;
  //Check if the task text is empty. If it is, display an alert to the user to enter a task.
  if (textInput === '') {
    alert('Please enter a task ');
  }
  // If the task text is not empty, create a new todo object using the `createTodo` factory function.
  if (textInput !== '') {
    const toDo = new CreateTodo(textInput);
    console.log(toDo);
    //Push the todo object into the todoItems array.
    todoItems.push(toDo);
    // Logged the array to the console to check if the task object is successfully created or not.
    console.log(todoItems);
    renderTodo();
  }
  //Call a function called renderTodo

  //Clear the value of the "inputTask" input field
  inputTask.value = '';
  //Focus
  const focusButton = document.getElementById('addTask');
  const focusInput = document.getElementById('inputTask');
  focusButton.addEventListener('click', () => {
    focusInput.focus({ focusVisible: true });
  });
}

function renderTodo() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  todoItems.forEach((toDo) => {
    const listItem = document.createElement('li');
    listItem.textContent = toDo.text;
    todoList.appendChild(listItem);
  });
}
//Remove
const removeButton = document.getElementById('removeTask');
removeButton.addEventListener('click', removeLastTask);
function removeLastTask() {
  if (todoItems.length === 0) {
    alert('The list is empty');
  } else {
    const response = confirm('Are you sure you want to do that?');
    if (response) {
      // add code if the user pressed the Ok button
      console.log('Ok was pressed');
      todoItems.pop();
      renderTodo();
    } else {
      // add code if the user pressed the Cancel button
      console.log('Cancel was pressed');
      return;
    }
  }
}
//Remove All
const removeAllButton = document.getElementById('removeAllTask');

removeAllButton.addEventListener('click', function () {
  if (todoItems.length === 0) {
    alert('The list is empty');
  } else {
    const response = confirm('Are you sure you want to do that?');
    if (response) {
      // add code if the user pressed the Ok button
      console.log('Ok was pressed');
      todoItems = [];
      renderTodo();
    } else {
      // add code if the user pressed the Cancel button
      console.log('Cancel was pressed');
      return;
    }
  }
});
