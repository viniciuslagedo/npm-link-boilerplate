const superHappyMessage = require('super-happy-message');
const superSadMessage = require('super-sad-message');

const boring = 'This is a boring string';
const happyString = superHappyMessage(boring);
const sadString = superSadMessage(boring);

console.log(happyString);
console.log(sadString);
