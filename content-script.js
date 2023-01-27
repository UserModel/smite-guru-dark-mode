document.addEventListener('DOMContentLoaded', function () {
	document.body.style.backgroundColor = 'red';

	// creating button element
	var button = document.createElement('BUTTON');

	// creating text to be
	//displayed on button
	var text = document.createTextNode('Button');

	// appending text to button
	button.appendChild(text);

	// appending button to div
	var myDiv = document.getElementsByClassName('icon-list')[0];
	myDiv.style.backgroundColor = 'red';
	myDiv.appendChild(button);
});
