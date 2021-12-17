import { $ } from './components/dom.js';
import CheckUserInputValidity from './components/checkUserInputValidity.js';
import { MakeRandomNumber } from './components/makeRandomNumber.js';
import { PrintResultWords } from './components/printResultWords.js';

function start() {  
  $('#result').innerHTML = '';
  $('#submit').type = 'button';
}
export default function BaseballGame() {
  start();
  const computerNumber = MakeRandomNumber();
  $('#submit').addEventListener('click', () => {
    const userInput = $('#user-input').value;
    if (CheckUserInputValidity(userInput)) {
      PrintResultWords(computerNumber, userInput);
    }
  });
}
BaseballGame();