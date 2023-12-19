import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', () => {
  if (sessionStorage.getItem("isReload")) {
    console.log("Page was reloaded");
  } else {
    sessionStorage.setItem("isReload", true);
    console.log("Page loaded for the first time");
    initWelcomePage();
  }
});
