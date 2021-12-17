import { $ } from './dom.js';
import BaseballGame from '../index.js';

export function Restart() {
  $('#result').innerHTML = '';
  $('#user-input').value = null;
  BaseballGame();
}