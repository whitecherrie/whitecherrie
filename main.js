document.addEventListener('DOMContentLoaded', function() {
	// when user clicks 'add' button
	var addButton = document.getElementById('addButton');
	addButton.addEventListener('click', addTodoItem);

    var colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', changeTextColor);
});

function addTodoItem() {
	// retrieve the text from input box
	var inputText = document.getElementById('todoInput').value;
	console.log(inputText);
	// append that text to the list div <div id="todoItems"></div>
	var todoItem = document.createElement('p');
	todoItem.innerText = inputText;
	// <p>Input text</p>
	todoItem.id = 'item';
	todoItem.class = 'colourful';
	document.getElementById('todoItems').appendChild(todoItem);
}

function changeTextColor() {
    var color = generateRandomColor();
    document.getElementById('todoItems').style.color = color;
}

function generateRandomColor() {
    var colors = ['red', 'purple', 'yellow', 'green', '#0f0f0f'];

    var randomNumber = Math.random() * colors.length;
    var randomNumberFloored = Math.floor(randomNumber);
    return colors[randomNumberFloored];
}