/*
  Todo: add unit testing so that when I add more features,
  I don't have to test everything each time
  Todo: add a button that adds a class with the strike-through
  property for the text, without deleting it
*/

// sets shorter names to select specific elements in the page
const inputButton = document.getElementById('inputbutton');
const inputField = document.getElementById('inputfield');
const todoList = document.getElementById('todo-list');


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

// removes the parent node of the current event
const removeEl = (event) => {
  event.currentTarget.parentNode.remove();
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

// adds event listeners to the button and field to watch for user input
inputButton.addEventListener('click', sendInput);
inputField.addEventListener('keypress', checkKey);

//DARK MODE STARTS

var btn = document.getElementById("toggle-btn");

function toggle(){
  var header=document.getElementById("header");
  var divbody=document.getElementById("divbody");
  var body=document.body;
  if(btn.checked == true){
    body.style.borderTop="6px solid #54006d";
    body.style.backgroundColor="rgba(0,0,0,0.6)";
    divbody.style.display="block";
    header.style.backgroundColor="#54006d";
    header.style.color="white";  
  }
  else{
    body.style.borderTop="6px solid rgba(0,0,255,0.6)";
    divbody.style.display="none";
    header.style.backgroundColor="rgba(0,0,255,0.6)";
    header.style.color="black"; 
  }
}
//DARK MODE ENDS
