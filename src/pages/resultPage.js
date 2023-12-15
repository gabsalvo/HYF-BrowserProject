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
};

const startQuiz = () => {

  initQuestionPage();
};