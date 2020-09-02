'use strict';

// this is whatever the user's anwer is;
var question1 = prompt('Name a bird?');
var answers1 = ['eagle', 'raven', 'robin', 'gold finch', 'crow'];

// question1 === 'Raven';

for (var i = 0; i < answers1.length - 1; i++) {
  console.log(answers1[i]);
  if (question1.toLowerCase() === answers1[i]) {

  }
}

// we have to inform incorrect outside of the for loop
if () {
  alert('Correct!');
} else {
  alert('Incorrect!');
}
