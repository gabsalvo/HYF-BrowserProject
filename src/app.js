import { quizData } from './data.js';
import { initWelcomePage, initQuestionPage, initResultPage } from './pages';

const loadApp = () => {
  console.log("Loading app...");
  const storedData = JSON.parse(localStorage.getItem('quizData'));
  console.log("Stored data:", storedData);

  if (storedData) {
    // Restore the saved quiz state
    quizData.currentQuestionIndex = storedData.currentQuestionIndex;

    // Check if the user was in the middle of a quiz or on the results page
    if (storedData.currentQuestionIndex < quizData.questions.length) {
      // User was in the middle of the quiz
      initQuestionPage();
    } else {
      // User had finished the quiz and was on the results page
      initResultPage();
    }
  } else {
    // No saved data, start at the welcome page
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);


