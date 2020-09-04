# Class 05: Finishing up the Guessing Game

## Warmup

- Review of concepts from this week


```html

<ul>
  <li>select me</li>
  <li></li>
  <li></li>
  <li></li>
<ul>

<div>
  <li>select me</li>
</div>



```


```css

/* Any element (of type li) gets the following CSS properties */
ul li:first-child {
  background-color: blue;
}

div h2:first-child {

}

```

- parseInt?
  - Built it javascript function
    - Takes in some value, and tries to pull our an Integer
      - ( whole number withour any decimal values )
      - Really helpful for converting a string into a number.
    - If we pass no interger values into parseInt, we receive the 'NaN'
  - Type coercion?
    - Javascript makes many assumptions about types, we can use parseInt to coerce our strings to either be:
    - How do I manipulate types in JS.
      - Integers => 1, 2, 1000, 1276576...
      - NaN
- Terminal Functionality.
  - this is just a place to run programs outside of a GUI (graphical user interface).
  - All the things that a program needs to o know, should come from things that you have typed.

```bash

<program-name> <some-path>

```
  - git commands
    - adding: makes git aware of any file changes within a git directory.

`git add <file changes to add to git>`

    - commiting: commits all added files changes to a checkpoint. ( saving changes ).

`git commit -m <message for all changed file>`
      - We can at any point revert all files back to the state that was commited.
      
    - pushing: Justify all changes locally, with files that live in a remote server.

`git push origin master`

- check for a remote repository
`git remote -v`
  - Check your remotes and make sure any pushed are going to the correct repo on github.

- Global Variables.
- Any variable that you put at the top of the page, should be available in the code below.
  - Tahmina couldn't get code to run unless it was in a specific place.

> app.js
```js
'use strict';

var string = 'a string for testing'


function doThings() {
  string = parseInt(someArg);
}

doThings();

function doOtherThings() {
  string // undefined
}



```

- Tally counts?
  - Incrementing a number.

## Code Review

- Maybe build some of the functionality as a class.
- Big Picture for our Guessing Game.

- 3 Main Features to the Guessing Game
  - Yes or No Questions
    - Flow control for a binary swich.
  - Guessing A Number with a certain number of attempts
    - Flow Control Logic whether an input is equal to a number.
        - Quantitative comparisions.
        - Using something like parseInt is going to be very helpful. 
      - Based on the number of times a user is prompted.
  - Multiple Correct answer Question.
    - Flow control to dictate whether the user has any attempts left.
    - Flow control for comparing the users answer with a bucket of correct answers.

## HTML & CSS Features

### Images
- HTML has a special tag for images
  - `<img>`
    - We can't add the content directly because it's not really representable in a naturail
    - We can provide a path to a image file.

```html

<img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg">

```

- for Background stuff:

```css
  background-image: url('https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg');
  background-repeat: no-repeat;
  background-size: cover;
```

### Links

- A way to load different content / views / markup.
- Local HTML pages within our project Directory / external HTML pages (https://google.com)

```html

<!-- HTML anchor tag -->

<a href="aboutme.html">About Me</a>

```

### Colors

## Git Branches

- Branches allow us to save any work in a seperate place from the master branch.
  - A branch is typically refered to as a "Feature Branch"

  - To Create a branch, we just use `git checkout -b <Branch-Name>`
  - To switch branches, `git checkout <branch-name>`
  - To list all availabel branches `git branch`
  - When we want to push our branch to github, we just need to modify the origin 
    - `git push origin <branch-name>`
  - Merging feature branch code with master branch is done with a PR. 
