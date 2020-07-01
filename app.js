const startGameBtn = document.getElementById('start-game-btn');

// const start = function() {          //////////////// Function Expressions: Storing functions in variables
//   console.log('Game is starting...');     ////////////////  Function Expressions vs Function Declarations
// };

// const person = {                  //////////////// Functions Vs Methods
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// console.dir(startGame);          ///////////////// Functions are objects!

startGameBtn.addEventListener('click', function() {     ////////////////// Anonymous functions
  console.log('Game is starting...');
});
