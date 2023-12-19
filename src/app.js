import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
window.addEventListener('beforeunload', (event) => {.
  event.preventDefault();
  event.returnValue = 'Are you sure you want to leave? Your progress might be lost.';
});
