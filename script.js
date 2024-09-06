onst getUserChoice = (userInput) => {
  userInput = userInput.trim().toLowerCase(); // Convert input to lowercase and remove extra whitespace
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Error: Invalid choice. Please choose rock, paper, or scissors.';
  }
};

const playGame = () => {
  const userInput = document.getElementById('userInput').value;
  const userChoice = getUserChoice(userInput);

  if (userChoice === 'Error: Invalid choice. Please choose rock, paper, or scissors.') {
    document.getElementById('result').innerText = userChoice;
    return;
  }

  // Example computer choice (you can replace this with a random choice)
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (userChoice === computerChoice) {
    result = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  document.getElementById('result').innerText = `Computer chose ${computerChoice}. ${result}`;
};
