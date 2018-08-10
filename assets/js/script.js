// Todo: add unit testing so that when I add more features, I don't have to test everything each time

// sets shorter names to select specific elements in the page
const inputButton = document.getElementById('inputbutton');
const inputField = document.getElementById('inputfield');
const todoList = document.getElementById('todo-list');

// removes the parent node of the current event
const removeEl = (event) => {
  event.currentTarget.parentNode.remove();
}

// adds a delete button that, when clicked, deletes the li element and the new button
const addDelButton = (li) => {
  const button = document.createElement('button');
  const buttonText = document.createTextNode('delete');
  button.appendChild(buttonText);
  li.appendChild(button);
  button.addEventListener('click', removeEl);
}

// adds the new input to the list as a list item
const addToList = () => {
  const li = document.createElement('li');
  const liText = document.createTextNode(inputField.value);
  li.appendChild(liText);
  addDelButton(li); // adds a delete button alongside the new li element
  todoList.appendChild(li);
}

// checks to see if the input has a non-empty value in it before adding to the list
const sendInput = () => {
  if (inputField.value.length > 0) {
    addToList();
    inputField.value = ''; // clears the input field after adding the input to the list
  }
}

// checks that there's a value in the input and that the enter key was pressed
const checkKey = (e) => {
  if (inputField.value.length > 0 && e.keyCode === 13) {
    sendInput();
  }
}

// adds event listeners to the button and field to watch for user input
inputButton.addEventListener('click', sendInput);
inputField.addEventListener('keypress', checkKey);
