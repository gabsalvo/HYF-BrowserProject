import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initResultPage } from './pages/resultPage.js';

const loadApp = () => {
  console.log("Loading app...");
  const storedData = JSON.parse(localStorage.getItem('quizData'));
  console.log("Stored data:", storedData);

  if (storedData) {
    quizData.currentQuestionIndex = storedData.currentQuestionIndex;

    if (storedData.isQuizCompleted) {
      const currentScore = storedData.currentScore;
      const topScore = quizData.questions.length;
      initResultPage(currentScore, topScore);
      
    } else if (storedData.currentQuestionIndex < quizData.questions.length) {
      // User was in the middle of the quiz
      initQuestionPage();
    }
  } else {
    initWelcomePage();
  }
};

window.addEventListener('load', loadApp);
