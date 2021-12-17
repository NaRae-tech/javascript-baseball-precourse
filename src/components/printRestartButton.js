import { $ } from './dom.js';
import Restart from './restart.js';
export function PrintRestartButton() {
  $('#result').innerHTML +=
    '<p>게임을 새로 시작하시겠습니까?<button id="game-restart-button">게임 재시작</button></p>';
  $('#game-restart-button').addEventListener('click', Restart);
}