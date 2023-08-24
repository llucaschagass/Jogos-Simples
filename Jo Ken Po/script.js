const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Empate!';
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        return 'Você venceu!';
    } else {
        return 'Você perdeu!';
    }
}

function displayResult(result, playerChoice, computerChoice) {
    resultText.textContent = `Você escolheu ${playerChoice}. O computador escolheu ${computerChoice}. Resultado: ${result}`;
}
