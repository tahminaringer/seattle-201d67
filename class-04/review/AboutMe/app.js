'use strict';

console.log('the js is aliiive!');

// Prompt the user
var user = prompt('What is your name?');


var ready = prompt('wanna play a guessing game? Y/N');
var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;
var answer5 = null;
var score = 0;


if (ready.toUpperCase() === 'Y') {
    answer1 = prompt('Am I from Tennessee? Y/N');
    console.log('Still a country bumpkin')
    if (answer1.toUpperCase() === 'Y') {
        alert('Shoot Fire..');
    }

    if (answer1.toLowerCase() === 'n') {
        alert('Git R Done');
        ++score;
        console.log(score);
    }


    answer2 = prompt('Did I use to live in a small town? Y/N');
    console.log('Everyone knows everybody!')
    if (answer2.toUpperCase() === 'Y') {
        alert('Dang Skippy');
        ++score;
        console.log(score);
    }

    if (answer2.toLowerCase() === 'n') {
        alert('Dang..That aint it');
    }




    answer3 = prompt('Do I like VR systems? Y/N');
    console.log('Things are getting real..')
    if (answer3.toUpperCase() === 'Y') {
        alert('Out of this world!');
        ++score;
        console.log(score);
    }
    if (answer3.toLowerCase() === 'n') {
        alert('Game Over');
    }




    answer4 = prompt('Do i like Software Development? Y/N');
    console.log('Coding is my game..')
    if (answer4.toUpperCase() === 'Y') {
        alert('Lovin it!');
        ++score;
        console.log(score);
    }
    if (answer4.toLowerCase() === 'n') {
        alert('Where am I?');
    }





    answer5 = prompt('Do I like Musicals? Y/N');
    console.log('I am not throwin away my shot!')
    if (answer5.toUpperCase() === 'Y') {
        alert('You are a mind at work!');
        ++score;
        console.log(score);
    }
    if (answer5.toLowerCase() === 'n') {
        alert('Noone mourns the Wicked.. ):')
    }

    alert('Welcome, ' + user);


}
var correctAnswer = 25;
var gameTime = prompt("want to play different game?");
console.log(gameTime);
if (gameTime.toLowerCase() === 'n') {
    alert("fine then... I didn't want to play with you either...): ");

} else if (gameTime.toUpperCase() === 'Y' || gameTime.toUpperCase() == 'YES') {

    for (var i = 0; i < 4; i++) {
        var playGame = prompt('I am thinking of a number between 1 and 100');

        if (playGame == correctAnswer) {
            alert('YAAAaAAAASSSSSS');
            ++score;
            console.log(score);
            break;
        } else if (playGame < correctAnswer) {
            alert('not quite high enough');

            // if (i == 3) {
            //     alert("You know what's funnier than 24? " + correctAnswer);
            // }
        } else if (playGame > correctAnswer) {
            alert(" whoa... not that high..");

            // if (i == 3) {
            //     alert("You know what's funnier than 24? " + correctAnswer);
            // }
        }
        if (i == 3) {
            alert("You know what's funnier than 24? " + correctAnswer);
        }
    }
}
var flowers = new Array('tulip', 'rose', 'blossum', 'buttercup', "gray's lily", 'lily');

loop1: for (var i = 0; i < 6; i++) {
    var question = prompt('what are my favorite flowers?');
    console.log(question);
    for (var j = 0; j < flowers.length; j++) {
        console.log(flowers[j]);
        if (flowers[j] === question) {
            console.log(flowers);
            alert('Correct');
            break loop1;
        }
    }
}



alert('You got ' + score + ' right!')