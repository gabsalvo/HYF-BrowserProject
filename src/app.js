import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', () => {
  if (sessionStorage.getItem("isReload")) {
    console.log("Page was reloaded");
    // Handle the reload case, maybe redirect to a specific page or perform some action
    // For example, you could call initQuestionPage() or initResultsPage() based on saved state
  } else {
    sessionStorage.setItem("isReload", true);
    console.log("Page loaded for the first time");
    // Normal load handling
    initWelcomePage();
  }
});
