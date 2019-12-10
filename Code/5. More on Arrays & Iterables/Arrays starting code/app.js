const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = new Array('Hi', 'Welcome'); // []
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', { moreDetail: [] }];

const analyticsData = [
  [1, 2],
  [1.2, 2.3]
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);