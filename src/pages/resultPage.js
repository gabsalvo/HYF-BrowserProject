import { USER_INTERFACE_ID, RESTART_BTN_ID } from '../constants.js';
import { createResultPage } from '../views/resultView.js';
import { initWelcomePage } from './welcomePage.js';

export const initResultPage = (currentscore,topScore) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultPage(currentscore,topScore);
  userInterface.appendChild(resultElement);
 
  const restartBtn = document.getElementById(RESTART_BTN_ID);
  restartBtn.addEventListener('click', startQuiz);
if(currentscore > 4){
  var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);



}
}
const startQuiz = () => {
 localStorage.clear();
 initWelcomePage();
};


