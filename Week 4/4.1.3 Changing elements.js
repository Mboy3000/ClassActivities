// Print the outer HTML of the navigation bar
const navBarOuterHTML = document.querySelector('.nav-bar').outerHTML;
console.log('Outer HTML of the navigation bar:', navBarOuterHTML);

// Print the inner HTML of the navigation bar
const navBarInnerHTML = document.querySelector('.nav-bar').innerHTML;
console.log('Inner HTML of the navigation bar:', navBarInnerHTML);

// Print the text content of the #class-schedule-list element
const classScheduleTextContent = document.querySelector('#class-schedule-list').textContent;
console.log('Text content of #class-schedule-list:', classScheduleTextContent);

// Select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector('.class-week');
firstClassWeek.classList.add('week-1');

// Select the img element and add a src attribute
const dogPictureElement = document.getElementById('dog-picture');
dogPictureElement.src = 'dog.jpg';

// Change the font color of the h1 element
const h1Element = document.querySelector('h1');
h1Element.style.color = 'blue';