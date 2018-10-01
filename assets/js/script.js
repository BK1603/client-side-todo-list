/*
  Todo: add unit testing so that when I add more features,
  so I don't have to test everything each time
*/

// sets shorter names to select specific elements in the page
const inputButton = document.getElementById('inputbutton');
const inputField = document.getElementById('inputfield');
const todoList = document.getElementById('todo-list');
const todo = document.getElementById('todo');
const dmToggle = document.getElementById('dark-mode-toggle');
const fontSelector = document.getElementById('font');

// function to change the font according to the one selected by the user
const changeFont = (event) => {
  const font = event.currentTarget.value;
  switch (font) {
    case 'Helvetica':
      document.body.style.fontFamily = 'helvetica';
      break;
    case 'Times':
      document.body.style.fontFamily = 'times';
      break;
    case 'Courier':
      document.body.style.fontFamily = 'Courier, monospace';
      break;
    default:
      document.body.style.fontFamily = 'helvetica';
  }
};

/*
  Function to mark the task as completed, sets the class completed from
  the css file
*/
const markCompleted = (event) => {
  const checkbox = event.currentTarget;
  if (checkbox.checked === true) {
    checkbox.parentElement.classList.add('completed');
  } else {
    checkbox.parentElement.classList.remove('completed');
  }
};

// adds checkbox to the list
const addCheckbox = (li) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = markCompleted;
  li.appendChild(checkbox);
};

// function to set the visibility of the todo list div
const setListView = () => {
  if(todoList.hasChildNodes())
    todo.style.display = 'block';
  else
    todo.style.display = 'none';
}

// removes the parent node of the current event
const removeEl = (event) => {
  event.currentTarget.parentNode.remove();
  // hides the list from view if there are no elements in it
  setListView();
};

// adds a delete button that, when clicked, deletes the li element and the new button
const addDelButton = (li) => {
  const button = document.createElement('button');
  const buttonText = document.createTextNode('Delete');
  button.appendChild(buttonText);
  li.appendChild(button);
  button.addEventListener('click', removeEl);
};

// adds the new input to the list as a list item
const addToList = () => {
  const li = document.createElement('li');
  const liText = document.createTextNode(inputField.value);
  addCheckbox(li); // adds a checkbox before the text in the new li element
  li.appendChild(liText);
  addDelButton(li); // adds a delete button alongside the new li element
  todoList.appendChild(li);
  setListView();
};

// checks to see if the input has a non-empty value in it before adding to the list
const sendInput = () => {
  if (inputField.value.length > 0) {
    addToList();
    inputField.value = ''; // clears the input field after adding the input to the list
  }
};

// checks that there's a value in the input and that the enter key was pressed
const checkKey = (event) => {
  if (inputField.value.length > 0 && event.keyCode === 13) {
    sendInput();
  }
};

// toggles the dark mode classes on the page elements
const toggleDarkMode = () => {
  const container = document.querySelector('#container');
  container.classList.toggle('dark-mode-background');
  container.classList.toggle('dark-mode-text');
};

// adds event listeners to the button and field to watch for user input
inputButton.addEventListener('click', sendInput);
inputField.addEventListener('keypress', checkKey);
dmToggle.addEventListener('click', toggleDarkMode);
fontSelector.addEventListener('change', changeFont);
