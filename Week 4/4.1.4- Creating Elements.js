// Create a new unordered list (ul) element
const newUlElement = document.createElement('ul');

// Remove the paragraph element in the nav-bar
const navBar = document.querySelector('.nav-bar');
const paragraphElement = navBar.querySelector('p');
navBar.removeChild(paragraphElement);

// Add your new ul element to the nav-bar
navBar.appendChild(newUlElement);

// Create two new list item (li) elements, and add some text to them
const liElement1 = document.createElement('li');
liElement1.textContent = 'New Item 1';

const liElement2 = document.createElement('li');
liElement2.textContent = 'New Item 2';

// Add the li elements to the ul in the nav-bar
newUlElement.appendChild(liElement1);
newUlElement.appendChild(liElement2);
