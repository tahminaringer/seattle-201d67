# Class 04: Functions

## Warm Up

- In pairs: Using a loop, write some javascript that can print the numbers 1 thru 10.

- Seth and Mark:
  - for loop!

```js


// Mark + Seth
for (var i = 1; i <= 10; i++ ) {
  console.log('the variable is ' + i);
}

// Robert

var count = 0;
while (count < 10) {
  console.log(count + 1);
  count++;
}

// Jacob with an array of number

var numbers numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= numbers.length - 1; i += 1) {
    console.log(numbers[i]);
}


```

## Lab Review

- See review folder for Alexandria's Code :)

## CSS Layout Continued

- Box Model
  - Margin: Space between the border and another box.
  - Border: Between margin and padding
    - Add a `border-radius` to change our box into more of an oval or a circle ( if you want ).
  - Padding: Right around the content

- Position: how an element positions itself amongst other elements
  - static: normal positioning based on margin, border, padding, height, width, etc.
  - relative: allows us to position an element relative to it's normal position.
    - move away from other elements relative to its position.
  - absolute: ignoring our immediate layout, move me however many px specified and stay their.
  - fixed: remove me as much as possible, and position myself within the browser.

- Display: How content will display itself relative to its parent and siblings.
  - block: display my content as a giant block, that takes up as much room as possible
  - inline: only take up as much space as my internal content needs ( and no more ).
  - inline-block: allow me to set the height and width, while also appear on the same horizontal plane.

## JS Functions

- What is a function?
  - a block of code that can be run whenever we want.
  - like defining a varible that contains javascript operations.
  - Allows us to reuse the same operations in multiple places.


```js

// var answers = [1,2,3,4,5];
// var question = 'what is my favorite number?';

// // var response = prompt(question);
// // if (response === answers[0]) {
// //   console.log('correct');
// // }

// // question = 'what is my favorite bird?';
// // answers=['hawk', 'eagle'];

// // response = prompt(question);
// // if (response === answers[0]) {
// //   console.log('correct');
// // }

function askQuestion(question, answers) {
  var response = prompt(question);
  if (response === answers[0]) {
    console.log('correct');
  }
}

askQuestion('what is my favorite number', [1,2,3,4,5]);


```

- Arguments and parameters
  - If we have values that need to be reference within the function code block, we can pass an argument into our function
    - argument is a value that exists outside of the function signature
    - parameter is a variable that defines a reference for an argument.

- If we want our function to pass a value into a different context ( do something outside of the function definition)
  - We need to return a value.

```js

// default function signature
function print() {
  console.log('Hello from print');
}

// execute / invoke / call the function
print(); // "Hello from print"

// defining a function using parameters
function printWithArgs(param) {
  console.log('hello ' + param);
}

// invoking a function with arguments
printWithArgs('Jacob');

var myArgument = "jacob";

printWithArgs(myArgument);

// Return values;

function sum(num1, num2) {
  return num1 + num2;
}

function product(num1, num2) {
  return num1 * num2;
}

var result = product(sum(1,2), sum(2,4));

console.log(result);

```

- Returning multiple values

```js

function multipleValues(string, num) {
  return [string, num];
}

var values = multipleValues('hello', 4);

console.log(value) // ['hello', 4];

```

- anonymous functions: a function that is defined but lack a name
  - function hoisting: as long as a function is defined, you can use it anywhere in that file.
    - Named function get 'hoisted' to the top of the file, so can be used at any time.

```js

// var sum = function (num1, num2) {
//   return num1 + num2;
// }

sum(1,2);

function sum(num1, num2) {
  return num1 + num2;
}


// there is no function hoisting.
// this comes in handy much later.
  // callbacks ( a function passed as a value, to be executed later)

function takesACallback(cb) {
  return cb(1,2);
}

takesACallback(function(num1, num2) {
  return num1 + num2;
});

```

- Scope: the runtime context for variables and values
  - global: accessible to anything in the script
  - function scoped: only accessible to that code block that defines our functionality.

```js

var global = 'Here is my global string';

function print(num) {
  console.log(global); // 'here is my global string';
  var functionScoped = 'Here is a scoped variables'
  return num;
}

console.log(functionScoped); // undefined;
console.log(print(40)); // 40

```

## Pair Programming

- I'll split you up into pairs
  - Driver / Navigator
    - Driver is the one that writes all the code.
    - Navigator is going to make all the high level decisions
      - what function am I writing
      - what variables need to be defined.
    - The navigator is not the boss.

### Workflow

- Driver forks navigators repo
  - Driver clones repo to local machine
  - Pairs work to complete assignement
  - Driver then Adds, Commits, and Pushes to Drivers forked repo
- Driver makes a PR 
  - From their master branch
  - To the Navigators master branch
- Navigator approves PR, and submit link in canvas
