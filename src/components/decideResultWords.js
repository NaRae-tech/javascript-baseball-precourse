import { DecideBallCount } from './decideBallCount.js';
export function DecideResultWords(computerBall, userBall) {
  const ballCount = DecideBallCount(computerBall, userBall);  //[strike,ball]순서로 return
  if (ballCount[0] === 0 && ballCount[1] === 0) {
    return '낫싱';
  }
  else if (ballCount[0] === 0 && ballCount[1] > 0) {
    return `${ballCount[1]}볼`;
  }
  else if (ballCount[0] > 0 && ballCount[1] === 0) {
    return `${ballCount[0]}스트라이크`;
  }
  else {
    return `${ballCount[1]}볼 ${ballCount[0]}스트라이크`;
  }
}