function initGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    sessionStorage.setItem('randomNumber', randomNumber);
    sessionStorage.setItem('attempts', 0);
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartButton').style.display = 'none';
}


function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const randomNumber = parseInt(sessionStorage.getItem('randomNumber'));
    let attempts = parseInt(sessionStorage.getItem('attempts')) + 1;

    sessionStorage.setItem('attempts', attempts);

    if (userGuess === randomNumber) {
        document.getElementById('resultMessage').textContent = `Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток!`;
        document.getElementById('restartButton').style.display = 'block';
    } else if (userGuess < randomNumber) {
        document.getElementById('resultMessage').textContent = 'Слишком маленькое число. Попробуйте снова!';
    } else {
        document.getElementById('resultMessage').textContent = 'Слишком большое число. Попробуйте снова!';
    }
}

document.getElementById('guessButton').addEventListener('click', checkGuess);
document.getElementById('restartButton').addEventListener('click', initGame);


window.onload = initGame;
