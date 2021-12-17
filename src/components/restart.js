import { $ } from './dom.js';
import BaseballGame from '../index.js';

export default function Restart() {
  $('#result').innerHTML = '';
  $('#user-input').value = null;
  $('#submit').disabled = false;
  BaseballGame();
}