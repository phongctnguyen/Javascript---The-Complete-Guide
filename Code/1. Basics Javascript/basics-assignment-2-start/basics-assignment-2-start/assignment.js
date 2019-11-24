const task3Element = document.getElementById("task-3");

// Create two new functions: One that takes no parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.
function alertText() {
  alert("Hello World!");
}

function alertName(name) {
  alert(name);
}

// Call both functions directly from your code.
alertText();
alertName("Phong");

// Add an event listener to task3Element and attach it to the first function (the one without arguments). Click this task thereafter to verify whether it works.
task3Element.addEventListener("click", alertText);

// Add a brand-new function that takes three parameters (three strings, give them any names you want) that returns one combined string (where the three strings are concatenated)
function combinedString(stringOne, stringTwo, stringThree) {
  return stringOne + ' ' + stringTwo + ' ' + stringThree;
}

// Call that new function directly from your code and alert() the result of that function.
const newString = combinedString("Hello", "New", "World");
alert(newString);