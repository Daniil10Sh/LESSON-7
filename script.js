// const helloworld = document.querySelector('.helloworld2');
// helloworld.addEventListener('click', () => {
//     alert('Hello World!');
// });
const guessFieldInput = document.getElementById('guessField')
const guessResultText = document.getElementById('guessResult')

function getRandomNumber (){
    return Math.floor(Math.random() * 100) + 1;
}
function checkGuess(){
    const getValue = Number(guessFieldInput.value); 
    console.log(getRandomNumber())
    console.log(getValue)
    if (getValue === getRandomNumber) {
        console.log('You have WON !!!');
        guessResultText.textContent = 'You have won !!!'
    } else  {
        console.log('Wrong number !!!');
        guessResultText.textContent = 'Wrong number !!!'
    }
    guessFieldInput.value = '';
}
