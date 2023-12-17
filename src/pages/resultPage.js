import { USER_INTERFACE_ID, RESTART_BTN_ID } from '../constants.js';
import { createResultPage } from '../views/resultView.js';
import { initQuestionPage} from './questionPage.js';

export const initResultPage = (currentscore,topScore) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultPage(currentscore,topScore);
  userInterface.appendChild(resultElement);

  const restartBtn = document.getElementById(RESTART_BTN_ID);
  restartBtn.addEventListener('click', startQuiz);
  // Update the message in .result-container::after dynamically
  updateResultMessage(currentscore);
};

// Function to update the message in .result-container::after
const updateResultMessage = (currentscore) => {
  const resultContainer = document.querySelector('.result-container');

  // Customize the message based on the user's score
  const message = currentscore >= 5 ? 'Congrats!' : 'You Failed!';

  // Update the content property dynamically
  resultContainer.style.setProperty('--result-message', `'${message}'`);
};


const startQuiz = () => {
 localStorage.clear();
  initQuestionPage();
};