# Class 03: Box Model / Arrays / Iteration


## How Does Git work

- Computer's file System
  - creating files in our local file system
- Git software
  - looking for updates, and formalizing changes in a specific place
- Remote Repository
  - Doing the same thing as the software, but just on a remote server.
- How do these changes talk to each other.

## Code Review

- Thanks Garrett!
  - [Code Review Gist](https://gist.github.com/tiggerman120/616a678808443cf1ec86c210ccb893b6)

## Javascript Arrays

- What is an array
  - a bucket of other data types
  - typically, we like to similar things in an array.
- How can we access the data in an array?
  - Uses an index
  - An index is an item within the array

```js

var question1 = 'what is your favorite color'
var question2 = 'what is your favorite food';
var question3 = '';


var questions = ['what is your favorite color', 'what is your favorite food', 'what is your first car?', undefined];

questions.length; // property that exists on all js arrays. => 3

// if we want add something to the array, what do?
questions[questions.length] = 'another thing';

console.log(questions) // => ['what is your favorite color', 'what is your favorite food', 'what is your first car?', 'another thing'];

// this is an array method ( a function attached to an object ) that adds something to an array
questions.push('something else');

console.log(questions); // ['what is your favorite color', 'what is your favorite food', 'what is your first car?', 'another thing', 'something else'];

// this removes the last item from an array
questions.pop();

console.log(questions); // ['what is your favorite color', 'what is your favorite food', 'what is your first car?']

// since js is loosely typed we can add different data types to our arrays
var question1 = ['what is my favorite number', 2];

var answer1 = 'my super awesome string';
var answer2 = 'another string';

// an empty array
// var myArray = [];

var myArray = [string1, string2];


console.log(myArray)

// ['my super awesome string', 'another string'];

// accessing the first position within the array;
myArray[0];

// Move on memory position to get to the second item in the array;
myArray[1];

```

## Running Code Multiple Loops

- What is a loop?
  - Running a specified code block, as long a condition remain true.
- For loops take 3 specific statement
  - Intialization of something to check within the loop
  - Comparison ( condition involving our intialized thing )
  - Operation to perform on our intialiazed thing.

```js
// we start with a for keyword
for (var i = 3; i > 0; i = i - 1;) {
  console.log(i);
}

```

- This is very good news for arrays
  - [3, 2, 1]

```js
var numbers = [3, 2, 1];

// for (var i = numbers.length; i > 0; i = i - 1) {
//   console.log(i -1);
// }

for (var i = 0; i <= number.length - 1; i = i + 1 ) {
  console.log(numbers[i]);

  if (i > 1) {
    console.log('fizz')
  } else if ( i > 3) {
    console.log('buzz');
  }
}

```

- while loop
  - functions jsut like a conditional statement, but repeats the operations until the statement is false


- truthy values and falsey values
  - truthy: true / 'string' / [] / {} / 1 ( any number above zero )
  - falsy: false / '' / 0 / undefined / null

```js
var numbers = [3,2,1];

// var i = 0;
// var bool = i <= numbers.length - 1;
var temp = [];

while(numbers.length) {
  // console.log('running');
  temp.push(numbers.pop());
  console.log(temp);
}

// this do code will always run at least once!
numbers = [];
do {
  // same idea
  console.log('this should execute at least once');
} while (numbers.length);

```

## CSS Box Model

- Understanding the layout properties of elements in a browser.
- All elements in the browser are boxes.
  - Each box can be provided values for 3 dicrete properties (going from the most outside layer of a box, inward )
    - Margin
      - refers to any space between the border, and any other element surrounding our box
    - Border
      - (by default) a thin line that sits between our margin, and padding;
    - Padding
      - Any space seperating the content from it border, this actually makes our box bigger.
    - (sort of the actual content)

### Semantic Tags

- When do I use div vs something like nav?
  - There's no advantage to using a semantic tag over a generic one.
    - These only add natural language meaning, and perhaps SEO advantages.
