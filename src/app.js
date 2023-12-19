import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const saveState = (state) => {
  localStorage.setItem('quizState', JSON.stringify(state));
};

const loadState = () => {
  const savedState = localStorage.getItem('quizState');
  return savedState ? JSON.parse(savedState) : null;
};

const resetState = () => {
  localStorage.removeItem('quizState');
};

const loadApp = () => {
  const savedState = loadState();

  if (savedState) {
    quizData.currentQuestionIndex = savedState.currentQuestionIndex;
    // Load the appropriate page based on the saved state
    if (savedState.onResultsPage) {
      initResultsPage();
    } else {
      initQuestionPage();
    }
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
