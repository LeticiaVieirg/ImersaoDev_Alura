//the variable receives: analyze the entire value, according to the random number from 0 to 0.999... then multiply by 1001
var  secretNumber=parseInt(Math.random() *1001);

// as long as test is different from secretNumber, will ask you to enter a number until it matches the one drawn
while (test != secretNumber) {
  var test=prompt('Enter a number between 0 and 1000: ')
  if (test == secretNumber) {
    alert('Got it right!')
  } else  if (test < secretNumber){
    alert('Made a mistake. The number is smaller.')
  } else  if (test > secretNumber) {
    alert('Made a mistake.The  number is bigger.'
  }
}
