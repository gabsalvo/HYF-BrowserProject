import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  console.log("Initializing Welcome Page");
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  welcomeElement.classList.add('welcome-container', 'show');
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', () => {
    welcomeElement.classList.remove('show');
    setTimeout(() => {
      initQuestionPage();
    }, 700);
  });

  

var end = Date.now() + (4 * 1000);

// go Buckeyes!
var colors = ['#bb0000', '#ffffff'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
};
