// Users Choice
var user = document.getElementsByClassName('choice');
// All Avaliable Choices
var options = ['Rock', 'Paper', 'Scissors'];
// Computers Choice
var computer;
// Outcome
var result = ''

var winLose = document.getElementById('winLoss');
// Number of Wins
var wins = 0
// Number of Losses
var losses = 0
// Number of Ties
var ties = 0

// Users Choice
for(var i = 0; i < user.length; i+= 1) {
	var selected = user[i];
	selected.addEventListener('click', function() {
		console.log('Your Choice: ' + this.id);
    document.getElementById('yours').innerHTML = ('You Selected - ' + this.id);
    user = this.id;
    computerChoice();
    document.getElementById('others').innerHTML = ('Computer Selected - ' + computer);
    document.getElementById('win/lose').innerHTML = ('You ' + result);
	});
}

// Computers Choice
function computerChoice() {
  var index = Math.floor(Math.random() * options.length);
  computer =  options[index];
  console.log('The computer selected:  ' + computer);
  compare(user, computer);
}

// Results - Compare
function compare(user, computer) {
  if (user === computer) {
    console.log('Tie');
    result = 'Tied!'
    ties++
  }
  else if (user === 'Rock') {
    switch(computer) {
      case 'Paper':
        console.log('Lose');
        result = 'Lose!'
        losses++
        break;
      case 'Scissors':
        console.log('Win');
        result = 'Win!'
        wins++
        break;
    }
  } else if(user === 'Paper') {
      switch(computer) {
        case 'Rock':
          console.log('Win');
          result = 'Win!'
          wins++
          break;
        case 'Scissors':
          console.log('Lose');
          result = 'Lose!'
          losses++
          break;
      }
  } else {
    switch(computer) {
      case 'Rock':
        console.log('Lose');
        result = 'Lose!'
        losses++
        break;
      case 'Paper':
        console.log('Win');
        result = 'Win!'
        wins++
        break;
    }
  }
  winLose.innerText='Wins - ' + wins + ' Losses - ' + losses + ' Ties - ' + ties
}
