import { $ } from './dom.js';
import { CheckCorrectness } from './checkCorrectness.js';
import { DecideResultWords } from './decideResultWords.js';
import { PrintRestartButton } from './printRestartButton.js';

export function PrintResultWords(computerBall, userBall) {
  const correctness = CheckCorrectness(computerBall, userBall);
  if (correctness) {
    $('#result').innerHTML = `🎉정답을 맞추셨습니다.🎉`;
    PrintRestartButton();
  }
  else {
    $('#result').innerHTML = DecideResultWords(computerBall, userBall);
  }
}