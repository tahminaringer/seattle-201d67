'use strict';

console.log('js is loaded');

var ready = confirm('Are you ready');
var answer1 = null;

console.log(ready);

// '==' loose equal  and '===' strict'
if (ready === true) {
  answer1 = prompt('What your favorite color?');
  console.log(answer1, answer1.toLowerCase());
  // if (answer1 === 'red') {
  //   alert(answer1 + ' is not a nice color');
  // } else if (answer1 === 'purple') {
  //   alert('Wow how regal');
  // } else {
  //   alert(answer1 + ' I love that color too');
  // }

  switch (answer1) {
    case 'red':
      alert(answer1 + ' is not a nice color');
      break;

    case 'purple':
      alert('Wow how regal');
      break;

    default:
      alert(answer1 + ' I love that color too');
  }

} else {
  alert('Okay, bye');
}