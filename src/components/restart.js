import { $ } from './dom.js';
import Index from'../index.js';
export function Restart() {
  $('#result').innerHTML = '';
  $('#user-input').value = null;
  Index();
}