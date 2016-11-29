// Users Choice
var selection = document.getElementsByClassName('choice');
// All Avaliable Choices
var options = ['Rock', 'Paper', 'Scissors'];
// Computers Choice
var choice = computerChoice();


// Users Choice
for(var i = 0; i < selection.length; i+= 1) {
	var selected = selection[i];
	selected.addEventListener('click', function() {
		console.log('Your Choice: ' + this.id);
	});
}

// Computers Choice
function computerChoice() {
  var index = Math.floor(Math.random() * options.length);
  return options[index];
}
console.log('The computer selected:  ' + choice);

// Results - Compare
















// user clicks on image - hint event.target.id
// coputer makes choice
// case statment to compare
// display winner
