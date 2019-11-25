const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// 1. Write code that shows an alert (with any message) when that number is greater than 0.7.
if (randomNumber > 0.7) {
    alert(`${randomNumber} is greater than 0.7`);
}

// 2. Create an array of numbers (any numbers of your choice) and loop through the array in two different ways - outputting the numbers inside of the loop.
const myArr = [5, 6, 8, 9 , 12, 8];

// Traditional For-Loop
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

// For-of
for (const i of myArr) {
    console.log(i);
}

// 3. Adjust one of the loops from the last task such that it actually starts at the end (last element) of the array and loops to the first element.
for (let i = myArr.length - 1; i >=0; i--) {
    console.log(myArr[i]);
}

// 4. Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2
const otherRandomNumber = Math.random();

console.log(randomNumber, otherRandomNumber);

if (randomNumber > 0.7 && otherRandomNumber > 0.7) {
    alert('Both are greater 0.7');
}

if(randomNumber <= 0.2 || otherRandomNumber <= 0.2) {
    alert('At least one of the two is NOT greater than 0.2');
}

